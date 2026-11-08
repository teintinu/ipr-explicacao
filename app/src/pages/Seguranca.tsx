import { Callout, Kicker, Lead, Section } from "../components/ui";
import { Scene, type SceneStep } from "../components/scene/Scene";
import { Arrow, Box, Label, Marker } from "../components/scene/parts";

const passosCamadas: SceneStep[] = [
  { at: 0, label: "A rede conhece contas: apelido, chave e conteúdo.", note: "É o que circula. Nenhuma linha da rede tem nome, CPF ou data de nascimento." },
  { at: 1800, label: "A AR conhece pessoas: documento, prova de vida e um número interno.", note: "A AR é quem conferiu seus documentos uma vez. É o único lugar com PII, e ela fica cifrada." },
  { at: 3600, label: "A AR tem uma tabela de contas: cada apelido aponta para uma pessoa.", note: "É o único lugar do sistema onde existe esse vínculo — e ele não é publicado em lugar nenhum." },
  { at: 5400, label: "Fora da AR, o vínculo não existe.", note: "Nó, provedor, leitor e autor não têm essa ligação em campo, índice nem evento. É aí que mora o anonimato." },
];

const passosOrdem: SceneStep[] = [
  { at: 0, label: "A justiça quer saber quem está por trás da conta A.", note: "O mandado vai para a AR que emitiu a credencial. Não existe caminho de suporte nem de emergência." },
  { at: 1800, label: "A AR confere o mandado.", note: "Ela é a instituição que verificou a pessoa: reconhece a conta e valida a ordem." },
  { at: 3600, label: "Ela consulta a própria base — sem pedir nada à rede.", note: "A rede não tem o que fornecer. A resposta nasce dentro da AR." },
  { at: 5400, label: "A AR entrega só os campos pedidos.", note: "Nome e documento se o mandado pedir isso. Endereço, histórico e outras contas ficam de fora." },
  { at: 7200, label: "A resposta sai por canal institucional, fora da rede.", note: "Nenhuma rota do UPR transporta o resultado. A rede não fica sabendo de nada." },
  { at: 9000, label: "Cada revelação deixa um registro lacrado.", note: "O livro publica compromisso, data e contador — nunca conta, pessoa, nome ou documento." },
];

const passosLivro: SceneStep[] = [
  { at: 0, label: "O livro é público: qualquer um pode baixar e guardar uma cópia.", note: "Público de verdade: a cópia que você baixou continua válida mesmo se a rede quiser reescrever." },
  { at: 1800, label: "Cada linha é um código.", note: "Um compromisso calculado a partir da ordem, da conta, da data e do resultado." },
  { at: 3600, label: "Quem tem a ordem judicial consegue conferir que a linha existe.", note: "Só quem já tem os dados casa a linha com o caso. Para os outros, é ruído." },
  { at: 5400, label: "Também há contadores: quantas revelações por mês.", note: "Volume anômalo aparece. O contador não diz quem foi revelado." },
  { at: 7200, label: "O conteúdo completo fica com um órgão de controle, sob chave própria.", note: "Aqui o projeto depende de uma decisão ainda aberta: qual órgão, com que quórum." },
];

function CenaCamadas() {
  return (
    <Scene duration={6400} steps={passosCamadas}>
      <svg viewBox="0 0 860 280" role="img" aria-label="A rede só tem contas; a AR tem a pessoa e a tabela que liga conta e pessoa.">
        <Marker id="m-seg" />
        <Box x={20} y={40} w={250} h={130} tone="brand" lines={["a rede vê", "conta @apelido", "conteúdo assinado"]} at={0} />
        <Box x={590} y={20} w={250} h={170} tone="accent" lines={["a AR guarda", "pessoa: PII cifrada", "conta → id_pessoa", "prova de vida"]} at={1800} />
        <g data-at={3600}>
          <line x1={430} y1={30} x2={430} y2={230} stroke="var(--upr-line-strong)" strokeWidth={3} strokeDasharray="8 6" />
          <text x={430} y={250} textAnchor="middle" className="lbl-sm">o vínculo mora só deste lado</text>
        </g>
        <Label x={150} y={200} at={5400}>sem nome, sem documento</Label>
        <Label x={715} y={210} at={5400}>fora daqui, ninguém liga</Label>
      </svg>
    </Scene>
  );
}

function CenaOrdem() {
  return (
    <Scene duration={10200} steps={passosOrdem}>
      <svg viewBox="0 0 880 310" role="img" aria-label="O mandado vai à AR, que consulta a própria base e entrega só os campos pedidos, fora da rede.">
        <Marker id="m-ordem" />
        <Box x={20} y={40} w={150} h={64} tone="warn" lines={["mandado", "conta A"]} at={0} />
        <Box x={210} y={40} w={190} h={64} tone="brand" lines={["a AR confere", "o mandado"]} at={1800} />
        <Box x={440} y={30} w={190} h={84} tone="accent" lines={["base da AR", "conta → pessoa", "PII cifrada"]} at={3600} />
        <Box x={670} y={40} w={190} h={64} lines={["só os campos", "pedidos"]} at={5400} />
        <Box x={210} y={140} w={650} h={54} tone="accent" lines={["a resposta sai por canal institucional — fora da rede UPR"]} at={7200} />
        <Box x={210} y={214} w={650} h={46} lines={["registro lacrado: compromisso, data e contador"]} at={9000} />
        <Arrow d="M170 72 H 206" tone="warn" marker="m-ordem" at={1200} />
        <Arrow d="M400 72 H 436" marker="m-ordem" at={3000} />
        <Arrow d="M630 72 H 666" tone="accent" marker="m-ordem" at={4800} />
        <Arrow d="M535 114 V 136" marker="m-ordem" at={6600} />
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
        <Box x={330} y={60} w={220} h={150} lines={["o que cada linha diz", "que houve revelação", "daquela conta", "naquela data"]} at={1800} />
        <Box x={610} y={60} w={210} h={150} tone="accent" lines={["contadores", "12 em maio", "3 em junho"]} at={5400} />
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
          A rede não guarda seu nome. Quem guarda é a AR — a instituição que conferiu seus documentos —
          e ela é a única que sabe qual pessoa está por trás de qual conta.
        </Lead>
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Duas camadas</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          A rede tem contas. A AR tem pessoas. E tem também a tabela que liga uma coisa à outra.
        </p>
        <CenaCamadas />

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <Callout tone="ok" title="O que a rede não tem">
            <p>
              Nenhum campo ligando conta a pessoa, em nó, provedor, evento ou métrica. Quem lê o
              mural vê um apelido e uma assinatura — não um nome.
            </p>
          </Callout>
          <Callout tone="warn" title="O que a AR tem">
            <p>
              O documento, cifrado, e a tabela de contas. Não é a rede que guarda isso: é a
              instituição que assinou sua credencial, com as obrigações dela.
            </p>
          </Callout>
        </div>
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">A ordem judicial, em seis etapas</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          Um mandado, uma instituição, uma resposta fora da rede.
        </p>
        <CenaOrdem />

        <div className="mt-6">
          <Callout tone="warn" title="O que não existe">
            <p>
              Não há caminho de emergência, de suporte, de administração nem de "risco de vida".
              Quem pedir um deles está pedindo para mudar o desenho do protocolo.
            </p>
          </Callout>
        </div>
      </Section>

      <Section alt tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">O livro público</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          Toda revelação deixa marca. O livro prova que houve, sem dizer para quem.
        </p>
        <CenaLivro />
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Bloquear é parar a conta, não apagar o post</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface p-5">
            <h3 className="font-bold">A ordem bloqueia</h3>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-text-soft">
              A AR marca a pessoa como bloqueada judicialmente. A conta para de operar: não publica,
              não comenta, não segue.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-5">
            <h3 className="font-bold">Quem apaga é o autor</h3>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-text-soft">
              A rede não tem botão de censura. Se o conteúdo é ilegal, a justiça determina ao autor
              que remova — e é ele que responde se não remover.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
