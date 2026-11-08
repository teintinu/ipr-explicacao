# UPR — Explicação

Site estático que explica, em linguagem simples e em português, como a rede funciona:
segurança e privacidade, mensagens, diário, chamadas e provedores.

É material **educativo** — não é especificação, não é aconselhamento jurídico e não
promete que tudo o que descreve já esteja implementado.

## Rodar localmente — antes de publicar

O site é React + Vite + Tailwind, em `app/`. O HTML antigo foi removido — a fonte é
`app/src`, e o que vai ao ar é `app/dist`.

```sh
cd app
npm install      # só na primeira vez
npm run dev      # http://localhost:5173, recarrega sozinho
npm run build    # gera dist/ e falha se o TypeScript reclamar
npm run preview  # serve o dist/ em http://localhost:4173
```

**Regra:** nada é publicado sem ter rodado localmente e conferido as páginas afetadas —
build limpo, página abrindo, e o que mudou visível na tela. Ver `AGENTS.md` §17 (P6).

O deploy (`scripts/deploy.sh`) **constrói o site** (`npm ci` + `npm run build`) e publica
o `app/dist` gerado. Se o build falhar, ele para e não envia nada — build quebrado nunca
chega ao ar. Construir no deploy não substitui conferir localmente: rode antes.

O servidor estático em `deploy/server.js` faz o fallback das rotas da SPA e redireciona
os endereços antigos `*.html` (301) para o caminho limpo.

## Regra editorial

O site fala de convivência: trocar ideias, aprender, se divertir. O mecanismo judicial
existe, mas **só é detalhado em `/seguranca`** — nas outras páginas, no máximo um
ponteiro para lá. Não use "juiz", "juíza" nem "juízo": diga **a justiça**, **mandado
judicial** ou **determinação da justiça**. Evite masculinos genéricos ("o usuário",
"o cidadão"); prefira "quem usa", "as pessoas".

Comentário sem identificação **não leva etiqueta na tela**: nada de "conta anônima".
A escolha é de quem publicou o post; a interface apenas não mostra o nome de quem
comentou.

## Créditos de imagem

- `app/public/cerebro.jpg` — modelo anatômico de cérebro, **CC0** (domínio público), via
  Wikimedia Commons: `The_Human_Brain_Model_01.jpg`. Recortada em 3:2 para o post de
  exemplo.
- **Avatares das personas** (as 33 contas: pessoas, grupos e empresas) —
  [pravatar.cc](https://pravatar.cc/). São imagens de exemplo, livres para uso em
  protótipo; cada uma foi recortada em quadrado e reduzida para 192×192.
  *Exceção:* os dois avatares institucionais — `cafe-aurora.jpg` e
  `banda-do-bairro.jpg` — vêm do [StockSnap](https://stocksnap.io/), **CC0**, porque
  precisavam ser foto de objeto/cena, não retrato.
- **Vídeos do feed de demonstração** — [pixabay.com/pt/videos](https://pixabay.com/pt/videos/).
  Os arquivos originais ficam em `../raw/` e são recortados e transcodificados por
  `scripts/build-feed.py`; o que vai para o site está em `app/public/media/`.
- **Músicas dos vídeos** — [pixabay.com/pt/music/search/audio](https://pixabay.com/pt/music/search/audio).
  São nove faixas em `../raw/*.mp3`. Cada clipe de 8 s recebe um trecho de uma delas:
  a faixa se repete, o trecho não — `scripts/add-music.py` sorteia janelas de 8 s e só
  repete uma janela depois de esgotar as outras daquela faixa. O resultado fica
  registrado em `app/.feed/musica.json` (vídeo → faixa → segundo inicial).

> As personas são **fictícias**. Os retratos são de banco de imagens; nenhuma das
> pessoas fotografadas tem relação com o projeto ou com o que as contas dizem.

## Estrutura

```
.
├── app/                    o site: React 19 + Vite + Tailwind 4
│   ├── src/components/     Avatar, PostCard, ChatWindow, AppFrame, PageShell
│   │   ├── app/            moldura do aplicativo, feed, conversa, anotação
│   │   └── scene/          motor das cenas (Scene) e primitivas de SVG
│   ├── src/data/           personas — Ana Maria e mais seis
│   ├── src/pages/          as 11 rotas
│   ├── src/styles.css      tokens de tema (claro/escuro) + primitivas das cenas
│   └── public/             cerebro.jpg, favicon e avatares
├── deploy/server.js        servidor estático (fallback da SPA e redirect dos .html)
├── scripts/deploy.sh       build + empacotamento + envio
└── README.md
```

## O protótipo e o feed de demonstração

A home tem um protótipo navegável: um celular com o aplicativo dentro, à esquerda, e
explicações com seta à direita. O feed tem **100 posts** (68 com mídia, 32 de texto) e
**33 personas**, e três layouts — clássico, resumido e focado.

A mídia vem dos vídeos de `../raw/`
([pixabay.com/pt/videos](https://pixabay.com/pt/videos/)), recortados e transcodificados
por `scripts/build-feed.py`:

```sh
python3 scripts/build-feed.py            # recorta, transcodifica e gera o feed
python3 scripts/build-feed.py --keep-raw # o mesmo, sem apagar os vídeos consumidos
python3 scripts/add-music.py             # põe um trecho de música em cada clipe
```

O `add-music.py` roda **depois** do `build-feed.py` e precisa das faixas em `../raw/`.
Ele copia o vídeo sem recodificar e só acrescenta o áudio (AAC, com fade de entrada e
saída), então é rápido.

O script lê os posts escritos em `app/.feed/out/` (JSON), grava `app/public/media/` e
reescreve `app/src/data/feed-posts.ts`. Os vídeos consumidos saem de `raw/`.

Para conferir um layout direto: `/?layout=resumido` ou `/?layout=focado`.

O som dos vídeos é uma preferência única, guardada em `localStorage` na chave
`upr-som` (`1` ligado, `0` desligado) e **ligada por padrão**. Vale para todos os
posts ao mesmo tempo: o botão de alto-falante no cabeçalho do celular e o de cada
vídeo mexem no mesmo estado. Como o navegador não deixa um vídeo começar com som sem
um gesto, o primeiro vídeo mostra "toque para ouvir" — o clique libera o áudio.

> A mídia ocupa ~34 MB em `public/media` (68 vídeos de até 8 s + capas). É o custo de
> ter um feed que se parece com um feed de verdade.

## Três níveis de leitura

1. **Resumo** — o componente `Tldr`: uma linha por ideia, com a explicação embaixo.
2. **Explicação** — o corpo, com cenas animadas e exemplos.
3. **Detalhe** — a nota de cada passo (`.step-note`), as perguntas frequentes e o
   glossário.

Ao escrever, mantenha essa separação: nada de jargão no nível 2 sem uma explicação
curta disponível.

## Como as cenas funcionam

Uma cena é o componente `Scene`, com duas coisas:

- uma lista de passos (`{ at, label, note }`), em milissegundos;
- um SVG onde cada grupo tem `data-at="<ms>"`.

O motor revela o que já passou, destaca o passo atual e deixa clicar em qualquer passo
para ir até ele. Para criar uma cena nova, basta montar o SVG com as primitivas (`Box`,
`CircleNode`, `Arrow`, `Label`) e escolher os tempos — não há lógica de animação a
escrever.

## Regras de acessibilidade

- `prefers-reduced-motion` desliga a animação e mostra o estado final, sem transição.
- Todo SVG decorativo tem `aria-hidden`; os que explicam algo têm `role="img"` e
  `aria-label`.
- Os passos são `<button>`: dá para pular para qualquer um pelo teclado.
- Navegação com "pular para o conteúdo" no topo e foco visível em todos os controles.
- Contraste conferido nos dois temas (claro e escuro).

## Publicação

O site vai para **https://upr-explicacao.teintinu.com**, no cluster gerenciado pelo
`teintinu-net`, como um bundle estático servido por um container Bun sobre `hostPath`
(mesmo padrão do projeto `ecovila`).

```sh
./scripts/deploy.sh --dry-run   # empacota e não envia nada
./scripts/deploy.sh             # empacota, envia, aplica e verifica
./scripts/deploy.sh --check     # só verifica o que está no ar
```

Arquivos:

- `deploy/kubernetes.yaml` — Namespace, Middleware de redirect HTTPS, Deployment, Service
  e Ingress com TLS (`letsencrypt-prod`).
- `deploy/server.js` — servidor estático mínimo, sem dependências.
- `scripts/deploy.sh` — empacota `*.html` + `assets/` + `server.js`, envia para
  `/srv/upr-explicacao`, aplica o manifesto, reinicia o deployment e verifica o HTTPS.

**Duas restrições que não são óbvias:**

1. **DNS é pré-requisito e não é criado pelo script.** `upr-explicacao.teintinu.com`
   precisa apontar para `187.124.248.88` e `187.41.110.244` na zona `teintinu.com`.
   O `--check` mostra exatamente os registros a criar.
2. **O pod é fixo no nó `srv1550081.hstgr.cloud`**, porque o bundle vive no disco daquele
   nó (`hostPath`). Trocar de nó exige mudar o `nodeSelector` e reenviar o bundle.

O script **nunca** executa git e **nunca** roda sozinho.

## Convenções

- Conteúdo em **português**; código (classes, atributos, arquivos) em inglês.
- Sem dependências externas, sem CDN, sem telemetria. Nada sai do navegador.
- Se você mudar um termo no glossário, confira os `data-more` das páginas — eles
  apontam para âncoras específicas (`glossario.html#limiar`, por exemplo).
