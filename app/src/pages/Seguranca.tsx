import { Callout, Kicker, Lead, Section } from "../components/ui";
import { Scene, type SceneStep } from "../components/scene/Scene";
import { Arrow, Box, Label, Marker } from "../components/scene/parts";

const passosParede: SceneStep[] = [
  { at: 0, label: "No verificador, a pessoa existe com nome e documento.", note: "O registro de identidade vive aqui, cifrado, e não existe em nenhum outro ponto da rede." },
  { at: 1800, label: "Na rede, existe só uma conta com apelido e chave.", note: "A conta é o que circula: apelido, chave e conteúdo. Nome e CPF nunca entram nela." },
  { at: 3600, label: "Entre as duas há uma parede.", note: "Não há campo, índice nem referência ligando a conta ao registro. A parede é a ausência de caminho." },
  { at: 5400, label: "O que liga as duas é um envelope lacrado, guardado num cofre.", note: "O vínculo existe para poder ser aberto um dia, e é inútil para quem não tem a ordem." },
];

const passosOrdem: SceneStep[] = [
  { at: 0, label: "A justiça quer saber quem está por trás da conta A.", note: "Só a justiça inicia esse caminho. Não há atalho de suporte, de administração nem de emergência." },
  { at: 1800, label: "O pedido vai ao primeiro cofre. Três das cinco instituições precisam cooperar.", note: "Nenhuma instituição decide sozinha: cada uma valida o mandado por conta própria." },
  { at: 3600, label: "O cofre devolve um número: “a conta A pertence ao identificador 7f3c…”.", note: "Um identificador aleatório, sem nome nem documento. Sozinho, ele não leva a ninguém." },
  { at: 5400, label: "Esse número aponta para a AR que emitiu a credencial.", note: "É a instituição que verificou a pessoa: ela reconhece o número e confere o mesmo mandado." },
  { at: 7200, label: "A AR não entrega nada pela rede.", note: "A resposta não trafega pelo UPR: sai por um canal institucional, fora da rede social." },
  { at: 9000, label: "Quem emitiu entrega só os campos pedidos.", note: "Só o que o mandado pede. Endereço, histórico e outros dados ficam de fora." },
  { at: 10800, label: "Cada etapa registra um recibo lacrado.", note: "O recibo prova que houve abertura, sem dizer para quem. É o que permite auditar sem expor." },
];

const passosLivro: SceneStep[] = [
  { at: 0, label: "O livro é público: qualquer um pode baixar e guardar uma cópia.", note: "Público de verdade: a cópia que você baixou continua válida mesmo se a rede quiser reescrever." },
  { at: 1800, label: "Cada linha é um código.", note: "Um compromisso calculado a partir da ordem, da conta, da data e do resultado." },
  { at: 3600, label: "Quem tem a ordem judicial consegue conferir que a linha existe.", note: "Só quem já tem os dados consegue casar a linha com o caso. Para os outros, é ruído." },
  { at: 5400, label: "Também há contadores: quantas aberturas por mês.", note: "Volume anômalo aparece. O contador não diz quem foi aberto." },
  { at: 7200, label: "O conteúdo completo fica com um órgão de controle, sob chave própria.", note: "Aqui o projeto depende de uma decisão ainda aberta: qual órgão, com que quórum." },
];

function CenaParede() {
  return (
    <Scene duration={6400} steps={passosParede}>
      <svg viewBox="0 0 860 260" role="img" aria-label="A identidade fica no verificador; a conta fica na rede; entre as duas há uma parede e um envelope lacrado.">
        <Marker id="m-seg" />
        <Box x={40} y={70} w={230} h={120} lines={["verificador de identidade", "nome, documento", "data de nascimento"]} at={0} />
        <Box x={590} y={70} w={230} h={120} tone="brand" lines={["conta", "@apelido", "chave pública"]} at={1800} />
        <g data-at={3600}>
          <line x1={430} y1={44} x2={430} y2={212} stroke="var(--upr-line-strong)" strokeWidth={3} strokeDasharray="8 6" />
          <text x={430} y={30} textAnchor="middle" className="lbl-sm">parede: não há caminho</text>
        </g>
        <g data-at={5400}>
          <rect x={330} y={92} width={200} height={56} rx={10} className="node node--accent" />
          <text x={430} y={114} textAnchor="middle" className="lbl">envelope lacrado</text>
          <text x={430} y={134} textAnchor="middle" className="lbl-sm">no cofre, sob chave repartida</text>
        </g>
        <Label x={430} y={240} at={5400}>o vínculo existe — e não pode ser lido por quem passa</Label>
      </svg>
    </Scene>
  );
}

function CenaOrdem() {
  return (
    <Scene duration={12000} steps={passosOrdem}>
      <svg viewBox="0 0 880 300" role="img" aria-label="A ordem judicial passa pelo primeiro cofre, devolve um identificador opaco e chega à AR que emitiu a credencial.">
        <Marker id="m-ordem" />
        <Box x={20} y={40} w={150} h={64} tone="warn" lines={["ordem judicial", "conta A"]} at={0} />
        <Box x={210} y={30} w={170} h={84} tone="brand" lines={["primeiro cofre", "3 de 5 instituições", "validam o mandado"]} at={1800} />
        <Box x={420} y={40} w={170} h={64} tone="accent" mono lines={["7f3c…", "identificador"]} at={3600} />
        <Box x={630} y={30} w={230} h={84} tone="brand" lines={["a AR que emitiu", "confere o mesmo", "mandado"]} at={5400} />
        <Box x={210} y={150} w={650} h={54} tone="accent" lines={["a resposta sai por um canal institucional — não pela rede UPR"]} at={7200} />
        <Box x={210} y={222} w={650} h={54} lines={["quem emitiu entrega só os campos pedidos: nome e documento"]} at={9000} />
        <Box x={20} y={222} w={170} h={54} tone="warn" lines={["recibo lacrado", "por etapa"]} at={10800} />
        <Arrow d="M170 72 H 206" tone="warn" marker="m-ordem" at={1200} />
        <Arrow d="M380 72 H 416" marker="m-ordem" at={3000} />
        <Arrow d="M590 72 H 626" tone="accent" marker="m-ordem" at={4800} />
        <Arrow d="M745 114 V 146" marker="m-ordem" at={6600} />
      </svg>
    </Scene>
  );
}

function CenaLivro() {
  return (
    <Scene duration={8400} steps={passosLivro}>
      <svg viewBox="0 0 860 260" role="img" aria-label="O livro é público, com linhas em código; o conteúdo completo fica com um órgão de controle.">
        <Marker id="m-livro" />
        <Box x={40} y={60} w={230} h={150} tone="brand" lines={["livro público", "1. 9f2a…", "2. c71b…", "3. 04de…"]} mono at={0} />
        <Box x={330} y={60} w={220} h={150} lines={["o que cada linha diz", "que houve abertura", "daquela conta", "naquela data"]} at={1800} />
        <Box x={610} y={60} w={210} h={150} tone="accent" lines={["contadores", "12 aberturas em maio", "3 em junho"]} at={5400} />
        <Box x={40} y={228} w={780} h={44} lines={["o conteúdo integral só o órgão de controle abre"]} at={7200} />
        <Arrow d="M270 135 H 326" marker="m-livro" at={3400} />
      </svg>
    </Scene>
  );
}

export function Seguranca() {
  return (
    <>
      <Section>
        <Kicker>Identidade e revelação</Kicker>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Identidade e revelação</h1>
        <Lead>
          A rede não guarda seu nome. Ela guarda a prova de que alguém verificou que você existe — e
          um caminho, lacrado, para a justiça chegar até você.
        </Lead>
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">A parede</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          Duas coisas separadas: quem você é, no verificador; e o que você faz, na rede.
        </p>
        <CenaParede />
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">A ordem judicial, em sete etapas</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          Uma decisão, duas execuções. Nenhuma instituição sozinha abre o vínculo.
        </p>
        <CenaOrdem />

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <Callout tone="warn" title="O que não existe">
            <p>
              Não há caminho de emergência, de suporte, de administração nem de "risco de vida".
              Quem pedir um deles está pedindo para mudar o desenho do protocolo.
            </p>
          </Callout>
          <Callout tone="info" title="Uma ordem, uma conta">
            <p>
              A ordem alcança a conta citada. Ela não abre as outras contas do mesmo usuário — nem
              como conveniência para "adiantar o trabalho".
            </p>
          </Callout>
        </div>
      </Section>

      <Section alt tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">O livro público</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          Toda abertura deixa marca. O livro prova que houve, sem dizer para quem.
        </p>
        <CenaLivro />
      </Section>
    </>
  );
}
