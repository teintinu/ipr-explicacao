#!/usr/bin/env bash
#
# Publica o site explicativo em https://upr-explicacao.teintinu.com
#
# REGRAS DE OPERAÇÃO
#   - Rode este script SOMENTE à mão, quando o deploy for pedido.
#   - Ele nunca executa git (nem stage, nem commit, nem push).
#   - Nada aqui é chamado automaticamente por outro processo.
#
# Uso:
#   ./scripts/deploy.sh              # empacota + envia + aplica + verifica
#   ./scripts/deploy.sh --dry-run    # só empacota (não envia nada)
#   ./scripts/deploy.sh --check      # só verifica o site publicado
#   ./scripts/deploy.sh --skip-package  # reaproveita build/site.tgz
#   ./scripts/deploy.sh --help
#
# Variáveis (opcionais):
#   SERVER_HOST   host do control plane     (padrão: srv1550081.hstgr.cloud)
#   SERVER_USER   usuário SSH               (padrão: root)
#   REMOTE_DIR    diretório do bundle       (padrão: /srv/upr-explicacao)
#   NAMESPACE     namespace Kubernetes      (padrão: upr-explicacao)
#   DEPLOYMENT    deployment da app         (padrão: upr-explicacao)
#   SITE_URL      URL para verificação      (padrão: https://upr-explicacao.teintinu.com)
#   SSH_MODE      direct | container        (padrão: direct)
#   SSH_CONTAINER container do gerenciador  (padrão: teintinu-net-app-1)
#   SSH_KEY       chave dentro do container (padrão: /data/ssh/id_ed25519)
#   MANIFEST      manifesto k8s             (padrão: deploy/kubernetes.yaml)
#   BUILD_DIR     diretório de empacotamento(padrão: build)
#
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

SERVER_USER="${SERVER_USER:-root}"
SERVER_HOST="${SERVER_HOST:-srv1550081.hstgr.cloud}"
REMOTE_DIR="${REMOTE_DIR:-/srv/upr-explicacao}"
NAMESPACE="${NAMESPACE:-upr-explicacao}"
DEPLOYMENT="${DEPLOYMENT:-upr-explicacao}"
SITE_URL="${SITE_URL:-https://upr-explicacao.teintinu.com}"
SSH_MODE="${SSH_MODE:-direct}"
SSH_CONTAINER="${SSH_CONTAINER:-teintinu-net-app-1}"
SSH_KEY="${SSH_KEY:-/data/ssh/id_ed25519}"
MANIFEST="${MANIFEST:-deploy/kubernetes.yaml}"
BUILD_DIR="${BUILD_DIR:-build}"
MARKER="a rede explicada"

dry_run=false
check_only=false
skip_package=false

for arg in "$@"; do
  case "$arg" in
    --dry-run) dry_run=true ;;
    --check) check_only=true ;;
    --skip-package) skip_package=true ;;
    -h|--help) sed -n '2,34p' "$0" | sed 's/^# \{0,1\}//'; exit 0 ;;
    *) echo "Argumento desconhecido: $arg (use --help)" >&2; exit 2 ;;
  esac
done

log()  { printf '\n\033[1;32m==> %s\033[0m\n' "$*"; }
warn() { printf '\033[1;33m[aviso] %s\033[0m\n' "$*"; }
fail() { printf '\033[1;31m[erro] %s\033[0m\n' "$*" >&2; exit 1; }

remote() {
  if [ "$SSH_MODE" = "container" ]; then
    docker exec "$SSH_CONTAINER" ssh -T \
      -o BatchMode=yes -o StrictHostKeyChecking=yes \
      -o UserKnownHostsFile=/data/ssh/known_hosts \
      -o ConnectTimeout=20 \
      -i "$SSH_KEY" "$SERVER_USER@$SERVER_HOST" "$@"
  else
    ssh -T -o BatchMode=yes -o ConnectTimeout=20 \
      "$SERVER_USER@$SERVER_HOST" "$@"
  fi
}

upload() { # upload <arquivo-local> <caminho-remoto>
  local local_file="$1" remote_path="$2"
  if [ "$SSH_MODE" = "container" ]; then
    docker exec -i "$SSH_CONTAINER" sh -c "cat | ssh -T \
      -o BatchMode=yes -o StrictHostKeyChecking=yes \
      -o UserKnownHostsFile=/data/ssh/known_hosts \
      -o ConnectTimeout=20 -i '$SSH_KEY' '$SERVER_USER@$SERVER_HOST' 'cat > \"$remote_path\"'" < "$local_file"
  else
    ssh -T -o BatchMode=yes -o ConnectTimeout=20 \
      "$SERVER_USER@$SERVER_HOST" "cat > '$remote_path'" < "$local_file"
  fi
}

require() {
  command -v "$1" >/dev/null 2>&1 || fail "Comando obrigatório não encontrado: $1"
}

# ---------------------------------------------------------------- verificação

check_dns() {
  local host="${SITE_URL#https://}"
  host="${host%%/*}"
  local ips=""
  if command -v dig >/dev/null 2>&1; then
    ips="$(dig +short "$host" @ns1.hoda5.com 2>/dev/null || true)"
    [ -z "$ips" ] && ips="$(dig +short "$host" 2>/dev/null || true)"
  fi
  if [ -z "$ips" ]; then
    warn "O DNS de $host ainda não resolve."
    cat <<EOF
    Adicione o registro na zona teintinu.com (o gerenciador faz isso em
    "Projetos → net → DNS", ou edite a zona no primário e publique):

        $host.   3600   IN   A   187.124.248.88
        $host.   3600   IN   A   187.41.110.244

    Sem isso, o certificado Let's Encrypt não é emitido e o site não abre.
EOF
    return 1
  fi
  echo "    DNS: $host → $(echo "$ips" | tr '\n' ' ')"
  return 0
}

check_http() {
  local code="000" body=""
  for _ in $(seq 1 30); do
    code="$(curl -s -o /tmp/upr-explicacao-check.html -m 10 -w '%{http_code}' "$SITE_URL/" || true)"
    [ "$code" = "200" ] && break
    sleep 5
  done
  if [ "$code" != "200" ]; then
    warn "Verificação falhou: $SITE_URL/ respondeu $code"
    return 1
  fi
  if ! grep -qi "$MARKER" /tmp/upr-explicacao-check.html; then
    warn "O site respondeu 200, mas o conteúdo não parece ser o esperado."
    return 1
  fi
  echo "    HTTP: 200 e conteúdo confere"
  return 0
}

if [ "$check_only" = true ]; then
  log "Verificando $SITE_URL"
  if ! check_dns; then
    warn "Sem DNS não há como verificar o HTTPS."
    exit 1
  fi
  check_http || exit 1
  log "Site no ar."
  exit 0
fi

# ---------------------------------------------------------------- pré-requisitos

log "Pré-requisitos"
require tar
[ -f "$MANIFEST" ] || fail "Manifesto não encontrado: $MANIFEST"
[ -f "deploy/server.js" ] || fail "Servidor estático não encontrado: deploy/server.js"
[ -f "index.html" ] || fail "index.html não encontrado; rode da raiz do site."

if [ "$SSH_MODE" = "container" ]; then
  require docker
  docker inspect "$SSH_CONTAINER" >/dev/null 2>&1 || \
    fail "Container '$SSH_CONTAINER' não está rodando (use SSH_MODE=direct para SSH local)."
else
  require ssh
  ssh -T -o BatchMode=yes -o ConnectTimeout=10 "$SERVER_USER@$SERVER_HOST" true \
    || fail "Não foi possível conectar em $SERVER_USER@$SERVER_HOST por SSH (chave/config)."
fi

# ---------------------------------------------------------------- empacotamento

if [ "$skip_package" = false ]; then
  log "Empacotando o site"
  rm -rf "$BUILD_DIR/site"
  mkdir -p "$BUILD_DIR/site"

  cp ./*.html "$BUILD_DIR/site/"
  cp -R assets "$BUILD_DIR/site/"
  cp deploy/server.js "$BUILD_DIR/site/server.js"

  # Nada de lixo no bundle.
  find "$BUILD_DIR/site" -name '.DS_Store' -delete 2>/dev/null || true

  tar czf "$BUILD_DIR/site.tgz" -C "$BUILD_DIR/site" .

  total="$(find "$BUILD_DIR/site" -type f | wc -l | tr -d ' ')"
  echo "    $total arquivos → $(du -h "$BUILD_DIR/site.tgz" | cut -f1)"
else
  log "Empacotamento ignorado (--skip-package)"
  [ -f "$BUILD_DIR/site.tgz" ] || fail "Sem $BUILD_DIR/site.tgz; rode sem --skip-package."
fi

if [ "$dry_run" = true ]; then
  log "Dry-run: nada foi enviado e o cluster não foi alterado."
  exit 0
fi

# ---------------------------------------------------------------- envio

log "Enviando bundle para $SERVER_USER@$SERVER_HOST:$REMOTE_DIR"
remote "mkdir -p '$REMOTE_DIR'"
upload "$BUILD_DIR/site.tgz" "$REMOTE_DIR/site.tgz"

log "Aplicando $MANIFEST em $NAMESPACE"
upload "$MANIFEST" "$REMOTE_DIR/kubernetes.yaml"
remote "/usr/local/bin/k3s kubectl apply -f '$REMOTE_DIR/kubernetes.yaml'"

# O bundle é extraído na inicialização: sem reiniciar, o pod continua com a
# versão antiga mesmo quando o manifesto não muda.
log "Reiniciando deployment/$DEPLOYMENT"
remote "/usr/local/bin/k3s kubectl -n '$NAMESPACE' rollout restart deployment/'$DEPLOYMENT' >/dev/null"

log "Aguardando o rollout"
remote "/usr/local/bin/k3s kubectl -n '$NAMESPACE' rollout status deployment/'$DEPLOYMENT' --timeout=240s"

# ---------------------------------------------------------------- verificação

log "Verificando DNS e HTTPS"
ok=0
check_dns || ok=1
if [ "$ok" = "0" ]; then
  check_http || ok=1
else
  warn "Pulando a verificação HTTP enquanto o DNS não resolver."
  warn "O certificado é emitido assim que o nome apontar para o Ingress."
fi

if [ "${ok}" != "0" ]; then
  echo
  warn "O deploy foi aplicado, mas a verificação final não passou."
  echo "    Diagnóstico:"
  echo "      ssh $SERVER_USER@$SERVER_HOST '/usr/local/bin/k3s kubectl -n $NAMESPACE get pods,ingress,certificate'"
  echo "      ssh $SERVER_USER@$SERVER_HOST '/usr/local/bin/k3s kubectl -n $NAMESPACE describe certificate'"
  exit 1
fi

log "Deploy concluído: $SITE_URL"
