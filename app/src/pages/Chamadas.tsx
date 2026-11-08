import { Callout, Compare, Kicker, Lead, Section } from "../components/ui";
import { Scene, type SceneStep } from "../components/scene/Scene";
import { Arrow, Box, Label, Marker } from "../components/scene/parts";

const passosFila: SceneStep[] = [
  { at: 0, label: "O organizador escolheu o modo “fila do organizador”.", note: "A política é escolhida antes, e vale para a chamada inteira." },
  { at: 1600, label: "Os participantes entram na chamada.", note: "Todos entram no mesmo espaço, sem hierarquia automática." },
  { at: 3200, label: "Quem quer falar levanta a mão e entra na fila.", note: "Pedir a palavra não interrompe ninguém." },
  { at: 4800, label: "A fila é visível para todos, na ordem em que foi formada.", note: "Todos sabem quem está esperando e desde quando." },
  { at: 6400, label: "O organizador libera uma pessoa por vez.", note: "A decisão é dele, e fica registrada como ato dele." },
  { at: 8000, label: "Só a pessoa liberada tem o áudio distribuído para a chamada.", note: "Os outros microfones ficam fechados no distribuidor." },
  { at: 9600, label: "Os demais continuam ouvindo, mas não são ouvidos.", note: "Ouvir é de todos; falar é de um por vez." },
  { at: 11200, label: "O próximo só entra quando o organizador clicar de novo.", note: "Nada é automático: a fila não anda sozinha." },
];

function CenaFila() {
  return (
    <Scene duration={12200} steps={passosFila}>
      <svg viewBox="0 0 880 300" role="img" aria-label="A chamada tem uma fila visível; o organizador libera um participante por vez.">
        <Marker id="m-call" />
        <Box x={30} y={40} w={200} h={80} tone="brand" lines={["organizador", "modo: fila"]} at={0} />
        <Box x={30} y={160} w={200} h={90} lines={["participantes", "entram", "na chamada"]} at={1600} />
        <Box x={310} y={40} w={230} h={80} tone="accent" lines={["fila visível", "1. Carla", "2. Diego"]} at={3200} />
        <Box x={310} y={160} w={230} h={90} lines={["quem levanta a mão", "entra no fim", "da fila"]} at={3200} />
        <Box x={620} y={40} w={230} h={80} tone="accent" lines={["no ar", "só quem foi liberado"]} at={8000} />
        <Box x={620} y={160} w={230} h={90} lines={["os outros ouvem", "mas não são ouvidos"]} at={9600} />
        <Box x={310} y={268} w={540} h={26} lines={["o próximo só entra com novo clique do organizador"]} at={11200} />
        <Arrow d="M230 200 H 306" marker="m-call" at={3200} />
        <Arrow d="M425 120 V 156" marker="m-call" at={4800} />
        <Arrow d="M540 80 H 616" tone="accent" marker="m-call" at={6400} />
        <Arrow d="M655 120 V 156" marker="m-call" at={9600} />
        <Label x={220} y={140} at={1600}>entra</Label>
      </svg>
    </Scene>
  );
}

export function Chamadas() {
  return (
    <>
      <Section>
        <Kicker>Voz e vídeo</Kicker>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Chamadas</h1>
        <Lead>
          Chamada não vira arquivo. O que acontece na sala existe enquanto a sala existe — e quem
          organiza escolhe as regras.
        </Lead>
      </Section>

      <Section tight>
        <Compare
          tone="neutral"
          left={{
            title: "Nas redes de hoje",
            items: [
              "A chamada passa por um servidor que pode gravar.",
              "Quem organiza não controla a ordem de fala.",
              "O histórico fica guardado sem você saber.",
            ],
          }}
          right={{
            title: "No desenho proposto",
            items: [
              "Nenhuma porta de armazenamento aceita sessão de chamada.",
              "A ordem de fala é política explícita, visível para todos.",
              "Fim da chamada, fim da sessão — sem cópia no servidor.",
            ],
          }}
        />
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">A fila do organizador</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          Um dos modos possíveis: em vez de todo mundo falar ao mesmo tempo, a palavra é dada em
          ordem, e todos veem a fila.
        </p>
        <CenaFila />
      </Section>

      <Section alt tight>
        <div className="grid gap-3 md:grid-cols-2">
          <Callout tone="warn" title="Gravação não tem como ser impedida">
            <p>
              Se dá para filmar a tela com um celular, controlar gravação seria ilusão. A rede não
              tenta impedir — e não promete sigilo do que foi dito.
            </p>
          </Callout>
          <Callout tone="ok" title="Quem responde pela live">
            <p>
              Criador, quem está ao vivo e quem modera ficam registrados. Se houver problema, a
              justiça sabe a quem perguntar — e a rede não vira juíza.
            </p>
          </Callout>
        </div>
      </Section>
    </>
  );
}
