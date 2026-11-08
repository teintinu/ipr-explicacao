import { useState } from "react";
import { Callout, Compare, Kicker, Lead, Section } from "../components/ui";
import { Scene, type SceneStep } from "../components/scene/Scene";
import { Arrow, Box, Label, Marker } from "../components/scene/parts";

const passosExponencial: SceneStep[] = [
  { at: 0, label: "Dois provedores guardam o bloco.", note: "Tudo começa pequeno: duas máquinas, uma cópia em cada." },
  { at: 1400, label: "Cada um entrega para duas pessoas — agora são quatro.", note: "Quatro pessoas com o bloco, sem ninguém instalar servidor." },
  { at: 3000, label: "Essas quatro já têm o bloco e passam a repassar.", note: "Quem recebeu vira fonte. É isso que faz o número crescer." },
  { at: 4400, label: "Cada uma entrega para mais duas: oito. Depois dezesseis.", note: "O crescimento é em dobro a cada salto, não linear." },
  { at: 5800, label: "Em poucos saltos, o conteúdo está em milhares de aparelhos.", note: "Vinte saltos passam de um milhão de cópias." },
  { at: 7200, label: "Ninguém decidiu isso: a rede se multiplica sozinha enquanto as pessoas assistem.", note: "Não há plano de distribuição: a multiplicação é consequência de cada aparelho repassar." },
];

const passosRecibo: SceneStep[] = [
  { at: 0, label: "Sua conta tem arquivos espalhados por provedores escolhidos por você.", note: "Você escolhe; a rede não impõe provedor." },
  { at: 1400, label: "O provedor A guarda 1,2 GB. O B guarda 1,9 GB. O C guarda 0,3 GB.", note: "Números diferentes porque os blocos são distribuídos, não copiados inteiros." },
  { at: 3000, label: "Você pede a lista do que está guardado onde.", note: "A lista é a fonte da conta, não um número que o provedor informa." },
  { at: 4600, label: "Cada provedor devolve um recibo com a lista de arquivos — e a soma.", note: "Assinado, e conferível por qualquer um." },
  { at: 6200, label: "Como a soma vem da lista, ninguém consegue inflar o número sem inventar arquivo.", note: "E arquivo inventado não tem impressão digital válida." },
];

function CenaExponencial() {
  return (
    <Scene duration={8200} steps={passosExponencial}>
      <svg viewBox="0 0 880 260" role="img" aria-label="Dois provedores entregam para quatro, que entregam para oito, dezesseis e milhares de aparelhos.">
        <Marker id="m-exp" />
        <Box x={20} y={100} w={130} h={60} tone="brand" lines={["2 cópias"]} at={0} />
        <Box x={200} y={100} w={130} h={60} lines={["4"]} at={1400} />
        <Box x={380} y={100} w={130} h={60} lines={["8"]} at={3000} />
        <Box x={560} y={100} w={130} h={60} lines={["16"]} at={4400} />
        <Box x={740} y={100} w={120} h={60} tone="accent" lines={["milhares"]} at={5800} />
        <Arrow d="M150 130 H 196" marker="m-exp" at={1400} />
        <Arrow d="M330 130 H 376" marker="m-exp" at={3000} />
        <Arrow d="M510 130 H 556" marker="m-exp" at={4400} />
        <Arrow d="M690 130 H 736" tone="accent" marker="m-exp" at={5800} />
        <Label x={440} y={200} at={3000}>cada pessoa que assiste também repassa</Label>
        <Label x={440} y={222} at={7200}>sem servidor central, sem plano de distribuição</Label>
      </svg>
    </Scene>
  );
}

function CenaRecibo() {
  return (
    <Scene duration={7200} steps={passosRecibo}>
      <svg viewBox="0 0 860 260" role="img" aria-label="Cada provedor devolve um recibo com a lista de arquivos e a soma.">
        <Marker id="m-rec" />
        <Box x={20} y={90} w={140} h={80} tone="brand" lines={["sua conta"]} at={0} />
        <Box x={220} y={30} w={170} h={64} lines={["Provedor A", "1,2 GB"]} mono at={1400} />
        <Box x={220} y={120} w={170} h={64} lines={["Provedor B", "1,9 GB"]} mono at={1400} />
        <Box x={220} y={210} w={170} h={34} lines={["Provedor C", "0,3 GB"]} mono at={1400} />
        <Box x={460} y={60} w={370} h={100} tone="accent" lines={["recibo de uso", "lista de arquivos → soma", "3,4 GB no total"]} at={3000} />
        <Box x={460} y={190} w={370} h={50} lines={["3,4 GB = 1,2 + 1,9 + 0,3"]} at={4600} />
        <Arrow d="M160 130 L 216 62" marker="m-rec" at={3000} />
        <Arrow d="M160 130 H 216" marker="m-rec" at={3000} />
        <Label x={420} y={250} at={6200}>a soma tem que bater — sempre</Label>
      </svg>
    </Scene>
  );
}

function DemoOrcamento() {
  const [used, setUsed] = useState(340);
  const pct = (used / 1024) * 100;

  return (
    <div className="rounded-3xl border border-line bg-surface p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-[0.7rem] font-extrabold tracking-wide text-brand-ink uppercase">
          Simulação
        </span>
        <label htmlFor="budget" className="text-[0.9rem] text-text-soft">
          Conteúdo guardado pelo navegador
        </label>
      </div>

      <div className="flex items-baseline justify-between text-[0.92rem] text-text-soft">
        <span>uso atual</span>
        <span>
          <strong className="text-text">{used} MB</strong> de 1 GB
        </span>
      </div>
      <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-surface-3">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand to-accent transition-[width]"
          style={{ width: `${pct}%` }}
        />
      </div>

      <input
        id="budget"
        type="range"
        min={0}
        max={1024}
        step={8}
        value={used}
        onChange={(e) => setUsed(Number(e.target.value))}
        className="mt-4 w-full accent-brand"
      />

      <p className="mt-3 text-[0.88rem] text-text-soft">
        Ao chegar no teto, o navegador descarta o mais antigo — nunca o que você está vendo agora.
      </p>
    </div>
  );
}

export function Provedores() {
  return (
    <>
      <Section>
        <Kicker>Quem guarda</Kicker>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Provedores</h1>
        <Lead>
          Não existe “o servidor da rede”. Existem cópias — em empresas, cooperativas e nos próprios
          aparelhos de quem assiste.
        </Lead>
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Onde o conteúdo mora</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          A diferença não é de discurso: é de desenho.
        </p>
        <Compare
          left={{
            title: "Redes sociais tradicionais",
            items: [
              "Tudo sobe para o datacenter de uma empresa.",
              "Quem publica não escolhe onde o conteúdo fica.",
              "Quem assiste só consome.",
              "Disco, banda e energia se concentram ali.",
            ],
          }}
          right={{
            title: "A proposta",
            items: [
              "Vários provedores guardam e distribuem.",
              "Qualquer um pode ser provedor: empresa, cooperativa, universidade ou pessoa.",
              "Quem assiste também repassa enquanto assiste.",
              "A carga se reparte, e nenhum provedor é obrigatório.",
            ],
          }}
        />
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Como isso cresce sem datacenter</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          Cada pessoa que recebe o arquivo vira mais uma fonte. O número dobra a cada salto.
        </p>
        <CenaExponencial />
      </Section>

      <Section alt tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">O navegador também é provedor — com orçamento</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          Sem tetos, “ajudar a rede” viraria consumo de bateria, de disco e de dados móveis.
        </p>
        <div className="grid gap-4 lg:grid-cols-[1fr_minmax(0,420px)]">
          <div className="space-y-3">
            {[
              ["Espaço em disco", "1 GB por padrão; o excedente é descartado"],
              ["Envio (upload)", "1 GB por dia — o teto mais importante, porque é o que custa caro"],
              ["Bateria", "Pausa quando o aparelho está na bateria"],
              ["Rede móvel", "Desligado por padrão"],
              ["Aba em segundo plano", "Pausa"],
              ["Cópia única", "Nunca é a única cópia: exige ao menos um provedor sempre-ligado"],
            ].map(([nome, texto]) => (
              <div key={nome} className="flex gap-3 rounded-xl border border-line bg-surface px-4 py-3">
                <strong className="w-40 shrink-0 text-[0.92rem]">{nome}</strong>
                <span className="text-[0.92rem] text-text-soft">{texto}</span>
              </div>
            ))}
          </div>
          <DemoOrcamento />
        </div>
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">O recibo prova o que está guardado</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          Provedor que não entrega é detectável. Provedor que infla o uso é pego pela conta.
        </p>
        <CenaRecibo />

        <div className="mt-6">
          <Callout tone="warn" title="Provedor comercial não promete anonimato de IP">
            <p>
              Quem hospeda em datacenter vê o endereço de quem se conecta. O desenho não finge o
              contrário — e quem opera precisa dizer qual é a sua natureza.
            </p>
          </Callout>
        </div>
      </Section>
    </>
  );
}
