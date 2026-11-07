# IPR — Explicação

Site estático que explica, em linguagem simples e em português, como a rede funciona:
segurança e privacidade, mensagens, diário, chamadas e provedores.

É material **educativo** — não é especificação, não é aconselhamento jurídico e não
promete que tudo o que descreve já esteja implementado.

## Como abrir

Não tem build, não tem dependência, não tem `npm install`.

**Opção 1 — direto:** abra `index.html` no navegador.

**Opção 2 — servidor local** (recomendado, evita restrições de `file://` em alguns
navegadores):

```sh
python3 -m http.server 8080
# depois abra http://127.0.0.1:8080
```

## Estrutura

```
.
├── index.html          visão geral e mapa do site
├── seguranca.html      identidade, cartórios, cofre, ordem judicial, menores
├── mensagens.html      conversas, grupos, chaves
├── diario.html         posts, comentários anônimos, jogo, lives, cortes
├── chamadas.html       topologia, gravação, fila de fala
├── provedores.html     armazenamento, navegador como ajudante, custos
├── perguntas.html      perguntas frequentes
├── glossario.html      termos, com âncoras usadas pelos tooltips
└── assets/
    ├── css/base.css         tokens, tipografia, layout, cabeçalho, rodapé
    ├── css/components.css   cartões, cenas, tooltip, acordeão, tabelas
    ├── js/site.js           tema, menu, tooltips, alternadores, demonstrações
    ├── js/scenes.js         motor de linha do tempo das cenas animadas
    └── img/favicon.svg
```

Cada página é autossuficiente em HTML: cabeçalho e rodapé são repetidos de propósito,
para o site funcionar sem JavaScript e sem servidor.

## Três níveis de leitura

O desenho editorial é deliberado:

1. **Resumo** — o quadro `.tldr` no topo de cada página.
2. **Explicação** — o corpo, com cenas animadas e exemplos.
3. **Detalhe** — termos com sublinhado pontilhado (`.term` + `data-tip`) e blocos
   `<details class="acc">` com o funcionamento técnico.

Ao escrever, mantenha essa separação: nada de jargão no nível 2 sem uma explicação
curta disponível.

## Como as cenas funcionam

Uma cena é um `<figure class="scene" data-scene>` com três partes:

- um SVG onde os elementos têm `data-at="<ms>"`;
- uma lista `.scene-caps` cujos `<li>` também têm `data-at`;
- controles `data-act="toggle"` e `data-act="replay"`.

O `scenes.js` revela os elementos conforme o tempo avança, destaca a legenda
correspondente e permite clicar numa legenda para pular até aquele passo.

Para criar uma cena nova, copie a estrutura de uma existente. Não é preciso escrever
JavaScript: basta escolher os tempos.

## Regras de acessibilidade

- O site funciona sem JavaScript: as legendas e o texto permanecem legíveis.
- `prefers-reduced-motion` desliga as animações e mostra o estado final.
- Todo SVG decorativo tem `aria-hidden`; os que explicam algo têm `role="img"` e
  `aria-label`.
- Navegação por teclado: os tooltips abrem no foco e fecham com `Esc`.
- Contraste conferido nos dois temas (claro e escuro).

## Convenções

- Conteúdo em **português**; código (classes, atributos, arquivos) em inglês.
- Sem dependências externas, sem CDN, sem telemetria. Nada sai do navegador.
- Se você mudar um termo no glossário, confira os `data-more` das páginas — eles
  apontam para âncoras específicas (`glossario.html#limiar`, por exemplo).
