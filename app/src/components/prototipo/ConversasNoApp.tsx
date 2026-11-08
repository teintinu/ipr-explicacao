import { Avatar } from "../Avatar";
import { conversasDe, pedidosDe, type Conversa } from "../../data/conversas";
import { contatosDe, gruposDe } from "../../data/conversas-geradas";
import { ehRestrita, personas } from "../../data/personas";
import { alternarRelacao, relacaoDe, usarVersaoRelacoes } from "../../lib/relacoes";
import { autorizar, escopoDe, revogarAutorizacao, usarVersaoAutorizacoes } from "../../lib/autorizacoes";
import { aceitar, rotuloCanais, usarVersaoContatos, vinculoDe } from "../../lib/contatos";
import { denunciar, denunciasContra, encaminhar, ranking, usarVersaoDenuncias } from "../../lib/denuncias";
import { byId } from "../../data/personas";
import { usarLeitor } from "../../lib/conta";
import { irPara, usarTela } from "../../lib/navegacao";

/** Lista de conversas e conversa aberta, dentro do celular. */
export function ConversasNoApp() {
  const leitor = byId(usarLeitor());
  const tela = usarTela();
  const minhas = conversasDe(leitor.id);

  if (tela !== "conversas") {
    const conversa = minhas.find((c) => c.id === tela);
    if (!conversa) return <Lista minhas={minhas} />;
    return <Thread conversa={conversa} eu={leitor.id} />;
  }

  return <Lista minhas={minhas} />;
}

function tituloDa(conversa: Conversa, eu: string) {
  if (conversa.grupo) return conversa.grupo;
  const outro = conversa.participantes.find((p) => p !== eu) ?? eu;
  return byId(outro).name;
}

function Lista({ minhas }: { minhas: Conversa[] }) {
  const eu = usarLeitor();
  return (
    <div className="min-h-0 flex-1 overflow-y-auto bg-bg-alt">
      <div className="border-b border-line bg-surface px-3 py-2">
        <span className="text-[0.95rem] font-bold">Conversas</span>
      </div>

      {minhas.length === 0 && (
        <p className="px-4 py-6 text-[0.84rem] text-text-soft">
          Nenhuma conversa nesta demonstração para esta conta. Troque em “Ver como”.
        </p>
      )}

      <Pedidos />

      <Autorizacoes />
      <Ouvidoria />
      <AvisoDeDenuncia />

      <ul>
        {minhas.map((c) => {
          const ultima = c.mensagens[c.mensagens.length - 1];
          const autor = byId(ultima.de);
          // O avatar é do destinatário — não de quem mandou a última mensagem,
          // que muitas vezes é a própria pessoa que está vendo.
          const outroId = c.participantes.find((p) => p !== eu);
          const retrato = outroId ? byId(outroId) : autor;
          return (
            <li key={c.id} data-conversa={c.id}>
              <button
                type="button"
                onClick={() => irPara(c.id)}
                className="flex w-full items-center gap-3 border-b border-line px-3 py-2.5 text-left hover:bg-surface"
              >
                {c.grupo ? (
                  <span
                    data-hotspot="grupo"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-brand-soft text-[0.7rem] font-extrabold text-brand"
                  >
                    {c.grupo.split(" ").filter((w) => w.length > 2).slice(0, 2).map((w) => w[0]).join("").toUpperCase()}
                  </span>
                ) : (
                  <Avatar persona={retrato} size="sm" />
                )}
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5">
                    <span className="truncate text-[0.84rem] font-semibold">{tituloDa(c, usarLeitor())}</span>
                    <span className="ml-auto shrink-0 text-[0.66rem] text-text-faint">{ultima.hora}</span>
                  </span>
                  <span className="block truncate text-[0.76rem] text-text-soft">
                    {c.grupo ? `${autor.name.split(" ")[0]}: ` : ""}
                    {ultima.texto}
                  </span>
                </span>
                {c.naoLidas ? (
                  <span className="grid h-4 min-w-4 place-items-center rounded-full bg-brand px-1 text-[0.6rem] font-extrabold text-white">
                    {c.naoLidas}
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      <p className="px-3 py-3 text-[0.72rem] text-text-faint">
        Conversas inventadas para a demonstração. A mensagem em si não é lida pela rede.
      </p>
    </div>
  );
}

function Thread({ conversa, eu }: { conversa: Conversa; eu: string }) {
  const leitor = byId(eu);
  const ultimaRecebida = conversa.mensagens.reduce(
    (achado, m, i) => (m.de !== eu ? i : achado),
    -1,
  );
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-bg-alt">
      <div
        className="flex items-center gap-2 border-b border-line bg-surface px-2 py-2"
        data-hotspot={conversa.grupo ? "grupo" : undefined}
      >
        <button
          type="button"
          onClick={() => irPara("conversas")}
          aria-label="Voltar para as conversas"
          className="grid h-8 w-8 place-items-center rounded-lg text-text-soft hover:bg-surface-2 hover:text-text"
        >
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <span className="text-[0.9rem] font-bold">{tituloDa(conversa, eu)}</span>
        {conversa.grupo && (
          <span className="ml-auto text-[0.68rem] text-text-faint">
            {conversa.participantes.length} pessoas
          </span>
        )}
      </div>

      <div className="min-h-0 flex-1 space-y-2 overflow-y-auto px-3 py-3">
        {conversa.mensagens.map((m, i) => {
          const meu = m.de === eu;
          const autor = byId(m.de);
          return (
            <div key={i} className={`flex items-end gap-1.5 ${meu ? "justify-end" : "justify-start"}`}>
              {!meu && <Avatar persona={autor} size="sm" showVerification={false} />}
              <div
                data-hotspot={i === ultimaRecebida ? "mensagem" : undefined}
                className={`max-w-[78%] rounded-2xl px-2.5 py-1.5 text-[0.82rem] leading-snug ${
                  meu ? "bg-brand text-white" : "border border-line bg-surface text-text"
                }`}
              >
                {!meu && !conversa.grupo && null}
                {!meu && conversa.grupo && (
                  <span className="mb-0.5 block text-[0.66rem] font-semibold opacity-70">
                    {autor.name.split(" ")[0]}
                  </span>
                )}
                {m.texto}
                <span className={`ml-1.5 text-[0.6rem] ${meu ? "text-white/70" : "text-text-faint"}`}>{m.hora}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="border-t border-line bg-surface px-2 py-2"
        data-hotspot={conversa.grupo ? undefined : "particular"}
      >
        <p className="rounded-full border border-line px-3 py-1.5 text-[0.78rem] text-text-faint">
          Escrever para {conversa.grupo ?? byId(conversa.participantes.find((p) => p !== eu) ?? eu).name.split(" ")[0]}…
        </p>
        <p className="mt-1 px-1 text-[0.66rem] text-text-faint">
          {leitor.name} · demonstração, nada é enviado
        </p>
      </div>
    </div>
  );
}

/** Pedidos de mensagem: de quem ainda não é contato. */
function Pedidos() {
  usarVersaoRelacoes();
  const leitor = byId(usarLeitor());
  // Conta restrita não vê pedido nenhum: eles sobem para o responsável.
  if (ehRestrita(leitor)) return null;
  const pedidos = pedidosDe(leitor.id);
  if (!pedidos.length) return null;

  const restrita = ehRestrita(leitor);
  const contatos = contatosDe(leitor.id, conversasDe(leitor.id));
  const meusGrupos = gruposDe(leitor.id);

  return (
    <div className="border-b border-line bg-surface-2/60 px-3 py-2">
      <p className="text-[0.62rem] font-extrabold tracking-[0.08em] text-text-faint uppercase">
        Pedidos de mensagem · {pedidos.length}
      </p>

      <ul className="mt-2 space-y-2">
        {pedidos.map((p) => {
          const de = byId(p.de);
          const rel = relacaoDe(p.de);
          const emComum = gruposDe(p.de).filter((g) => meusGrupos.some((m) => m.id === g.id));
          const gente = contatosDe(p.de, conversasDe(p.de)).filter((c) => contatos.includes(c));

          if (rel.bloqueado) {
            return (
              <li key={p.id} className="rounded-xl border border-line bg-surface px-2.5 py-2 text-[0.74rem] text-text-faint">
                {de.name} está bloqueada. Nada aparece.
              </li>
            );
          }

          return (
            <li key={p.id} className="rounded-xl border border-line bg-surface p-2.5">
              <div className="flex items-start gap-2">
                <Avatar persona={de} size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="text-[0.8rem] font-semibold">{de.name}</p>
                  <p className="text-[0.76rem] leading-snug text-text-soft">{p.texto}</p>

                  <p className="mt-1 text-[0.68rem] font-semibold text-text-soft">
                    Quer te adicionar para {p.quer ? rotuloCanais(p.quer) : "conversas"}
                  </p>

                  {(vinculoDe(leitor.id, p.de).conversas || vinculoDe(leitor.id, p.de).mural) && (
                    <p className="mt-1 text-[0.68rem] font-semibold text-brand">
                      Autorizado:{" "}
                      {vinculoDe(leitor.id, p.de).mural ? "conversas e postagens" : "apenas conversas"}
                    </p>
                  )}

                  <p className="mt-0.5 text-[0.68rem] text-text-faint">
                    {gente.length > 0
                      ? `${gente.length} contato${gente.length > 1 ? "s" : ""} em comum: ${gente
                          .slice(0, 2)
                          .map((c) => byId(c).name.split(" ")[0])
                          .join(", ")}`
                      : "nenhum contato em comum"}
                    {emComum.length > 0 && ` · ${emComum.map((g) => g.nome).join(", ")}`}
                  </p>

                  {restrita ? (
                    <p
                      data-hotspot="autorizacao"
                      className="mt-1.5 rounded-md bg-warn-soft px-2 py-1 text-[0.7rem] font-semibold text-warn"
                    >
                      Conta restrita: quem autoriza esta conversa é o responsável.
                    </p>
                  ) : (
                    <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                      <AceitarCanais de={p.de} />
                      <button
                        type="button"
                        onClick={() => alternarRelacao(p.de, "segue")}
                        className="hidden"
                      >
                        aceitar
                      </button>
                      <button
                        type="button"
                        onClick={() => alternarRelacao(p.de, "bloqueado")}
                        className="rounded-md border border-line px-2 py-1 text-[0.7rem] font-semibold text-text-soft"
                      >
                        Bloquear
                      </button>
                      <button
                        type="button"
                        onClick={() => denunciar(p.de, "procon-regional")}
                        className="rounded-md border border-line px-2 py-1 text-[0.7rem] font-semibold text-danger"
                      >
                        Denunciar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * O que o responsável vê: pedidos de contato que dependem da assinatura dele,
 * e a escolha do alcance — só conversar, ou também acompanhar as postagens.
 */
function Autorizacoes() {
  usarVersaoRelacoes();
  usarVersaoAutorizacoes();
  const leitor = byId(usarLeitor());
  const tutelados = personas.filter((p) => p.guardian === leitor.id);
  if (!tutelados.length) return null;

  return (
    <div className="border-b border-line bg-warn-soft/40 px-3 py-2">
      <p
        data-hotspot="responsavel"
        className="text-[0.62rem] font-extrabold tracking-[0.08em] text-warn uppercase"
      >
        Autorizações pendentes · responsável
      </p>

      {tutelados.map((filho) => {
        const pedidos = pedidosDe(filho.id);
        if (!pedidos.length) return null;
        return (
          <div key={filho.id} className="mt-2 space-y-2">
            <p className="text-[0.7rem] text-text-soft">
              Pedidos para <strong className="text-text">{filho.name}</strong> ({filho.age} anos)
            </p>

            {pedidos.slice(0, 2).map((p) => {
              const de = byId(p.de);
              return (
                <div key={p.id} className="rounded-xl border border-line bg-surface p-2.5">
                  <div className="flex items-start gap-2">
                    <Avatar persona={de} size="sm" />
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.78rem] font-semibold">{de.name}</p>
                      <p className="text-[0.74rem] leading-snug text-text-soft">{p.texto}</p>

                      <p className="mt-1 text-[0.66rem] text-text-faint">
                        {gruposDe(p.de).length > 0
                          ? gruposDe(p.de).map((g) => g.nome).join(", ")
                          : "sem grupo em comum"}
                      </p>

                      {escopoDe(filho.id, de.id) && (
                        <p className="mt-1 text-[0.66rem] font-semibold text-brand">
                          Autorizado:{" "}
                          {escopoDe(filho.id, de.id) === "conversas" ? "só conversas" : "conversas + postagens"}
                        </p>
                      )}

                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        <button
                          type="button"
                          onClick={() => autorizar(filho.id, de.id, "conversas")}
                          className="rounded-md bg-brand px-2 py-1 text-[0.68rem] font-bold text-white"
                        >
                          Autorizar só conversas
                        </button>
                        <button
                          type="button"
                          onClick={() => autorizar(filho.id, de.id, "conversas+postagens")}
                          className="rounded-md border border-brand px-2 py-1 text-[0.68rem] font-bold text-brand"
                        >
                          Autorizar conversas e postagens
                        </button>
                        <button
                          type="button"
                          onClick={() => revogarAutorizacao(filho.id, de.id)}
                          className="rounded-md border border-line px-2 py-1 text-[0.68rem] font-semibold text-danger"
                        >
                          Ignorar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

/** Painel de quem recebe denúncias: ranking e encaminhamento à justiça. */
function Ouvidoria() {
  usarVersaoDenuncias();
  const leitor = byId(usarLeitor());
  if (!leitor.recebeDenuncias) return null;

  const lista = ranking(leitor.id);
  if (!lista.length) {
    return (
      <Pedaco titulo="Denúncias recebidas">
        <p className="text-[0.76rem] text-text-soft">
          Nenhuma denúncia ainda. Quem recebe é esta conta — as denúncias chegam aqui, não ao mural.
        </p>
      </Pedaco>
    );
  }

  const pendentes = lista.reduce((n, r) => n + r.total, 0);

  return (
    <Pedaco titulo={`Denúncias recebidas · ${pendentes}`}>
      <ul className="space-y-1">
        {lista.map((r) => {
          const alvo = byId(r.alvo);
          return (
            <li key={r.alvo} className="flex items-center gap-2 rounded-lg border border-line bg-surface px-2 py-1.5">
              <Avatar persona={alvo} size="sm" />
              <span className="min-w-0 flex-1 truncate text-[0.78rem] font-semibold">{alvo.name}</span>
              <span className="rounded-full bg-danger-soft px-1.5 py-0.5 text-[0.64rem] font-extrabold text-danger">
                {r.total}
              </span>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={() => encaminhar(leitor.id)}
        className="mt-2 w-full rounded-lg bg-brand px-3 py-1.5 text-[0.76rem] font-bold text-white"
      >
        Encaminhar à justiça com a lista de denúncias
      </button>
    </Pedaco>
  );
}

/** A conta denunciada recebe um aviso automático da ouvidoria. */
function AvisoDeDenuncia() {
  usarVersaoDenuncias();
  const leitor = byId(usarLeitor());
  const contra = denunciasContra(leitor.id);
  if (!contra.length) return null;
  const ouvidoria = byId(contra[0].ouvidoria);
  return (
    <Pedaco titulo="Aviso automático">
      <div className="flex items-start gap-2">
        <Avatar persona={ouvidoria} size="sm" />
        <div className="min-w-0">
          <p className="text-[0.78rem] font-semibold">{ouvidoria.name}</p>
          <p className="text-[0.74rem] leading-snug text-text-soft">
            Você recebeu {contra.length} denúncia{contra.length > 1 ? "s" : ""}: {contra[0].motivo.toLowerCase()}.
            A ouvidoria guarda a lista e pode encaminhar à justiça.
          </p>
        </div>
      </div>
    </Pedaco>
  );
}

function Pedaco({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-line bg-surface-2/60 px-3 py-2">
      <p className="mb-1.5 text-[0.62rem] font-extrabold tracking-[0.08em] text-text-faint uppercase">
        {titulo}
      </p>
      {children}
    </div>
  );
}

/** Quem aceita escolhe o alcance: só conversas, ou conversas e postagens. */
function AceitarCanais({ de }: { de: string }) {
  usarVersaoContatos();
  const leitor = byId(usarLeitor());
  const atual = vinculoDe(leitor.id, de);
  const soConversas = !!atual.conversas && !atual.mural;
  const osDois = !!atual.conversas && !!atual.mural;

  return (
    <div className="flex flex-wrap items-center gap-1">
      <button
        type="button"
        onClick={() => aceitar(de, leitor.id, ["conversas"])}
        aria-pressed={soConversas}
        className={`rounded-md px-2 py-1 text-[0.68rem] font-bold ${
          soConversas ? "bg-brand text-white" : "border border-brand/60 text-brand"
        }`}
      >
        Autorizar apenas conversas
      </button>
      <button
        type="button"
        onClick={() => aceitar(de, leitor.id, ["conversas", "mural"])}
        aria-pressed={osDois}
        className={`rounded-md px-2 py-1 text-[0.68rem] font-bold ${
          osDois ? "bg-brand text-white" : "border border-brand/60 text-brand"
        }`}
      >
        Autorizar conversas e postagens
      </button>
    </div>
  );
}
