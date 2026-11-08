import { ChatWindow, type Message } from "../components/app/ChatWindow";
import { Callout, Kicker, Lead, Section } from "../components/ui";
import { Scene, type SceneStep } from "../components/scene/Scene";
import { Arrow, Box, Label, Marker } from "../components/scene/parts";
import { anaMaria, joaoPedro } from "../data/personas";

const conversa: Message[] = [
  { id: "1", from: "system", text: "conversa cifrada de ponta a ponta" },
  { id: "2", from: "them", text: "chego às 19h, pode ser?", meta: "18:42 · cifrada" },
  { id: "3", from: "me", text: "pode. leva o cabo extra?", meta: "18:43 ✓✓" },
  { id: "4", from: "them", text: "levo. e o vídeo do ensaio, você viu?", meta: "18:44 · cifrada" },
  { id: "5", from: "me", text: "vi ontem, ficou bom", meta: "18:45 ✓✓" },
];

const passosGrupo: SceneStep[] = [
  { at: 0, label: "O grupo tem chave e assinatura próprias — é como uma conta.", note: "Não é uma lista de pessoas: é uma conta que assina em nome de todos." },
  { at: 1600, label: "Cada membro usa essa chave para ler e escrever.", note: "Todos os membros compartilham a mesma chave do grupo." },
  { at: 3200, label: "Todas as mensagens são trancadas com a chave do grupo.", note: "Uma mensagem, uma chave comum — não uma chave por par." },
  { at: 4600, label: "Ana sai. Ela ainda tem a cópia antiga da chave.", note: "Sair não apaga o que ela já viu. Isso nenhum sistema resolve." },
  { at: 6000, label: "O grupo troca a chave automaticamente. É a versão 2.", note: "A troca é um evento assinado, visível para quem ficou." },
  { at: 7400, label: "Ana não consegue ler nada do que vier depois da troca.", note: "A chave velha não abre o que foi cifrado com a nova." },
  { at: 8800, label: "Eva entra depois: recebe a chave nova e não lê o que passou.", note: "O histórico não vem junto com a entrada." },
];

function CenaGrupo() {
  return (
    <Scene duration={9800} steps={passosGrupo}>
      <svg viewBox="0 0 880 260" role="img" aria-label="O grupo tem chave própria; quando Ana sai, a chave troca e ela não lê o que vem depois.">
        <Marker id="m-conv" />
        <Box x={40} y={60} w={210} h={90} tone="accent" lines={["Banda do Bairro", "chave v1"]} at={0} />
        <Box x={40} y={175} w={210} h={54} lines={["4 membros", "mesma chave"]} at={1600} />
        <Box x={320} y={60} w={190} h={90} mono lines={["mensagem", "cifrada com v1"]} at={3200} />
        <Box x={320} y={175} w={190} h={54} tone="warn" lines={["Ana saiu", "ainda tem a v1"]} at={4600} />
        <Box x={580} y={60} w={260} h={90} tone="brand" lines={["chave v2", "gerada na saída"]} at={6000} />
        <Box x={580} y={175} w={260} h={54} tone="danger" lines={["Ana não lê o que vier depois"]} at={7400} />
        <Arrow d="M250 105 H 316" marker="m-conv" at={3200} />
        <Arrow d="M415 150 V 171" tone="warn" marker="m-conv" at={4600} />
        <Arrow d="M510 202 H 576" tone="warn" marker="m-conv" at={6000} />
        <Arrow d="M710 150 V 171" marker="m-conv" at={7400} />
        <Label x={440} y={248} at={8800}>quem entra depois recebe a chave nova — e não o passado</Label>
      </svg>
    </Scene>
  );
}

export function Conversas() {
  return (
    <>
      <Section>
        <Kicker>Mensagens</Kicker>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Conversas</h1>
        <Lead>
          Uma conversa que a rede transporta sem conseguir abrir. E um grupo que troca a chave
          quando alguém sai.
        </Lead>
      </Section>

      <Section tight>
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,420px)_1fr]">
          <ChatWindow
            person={joaoPedro}
            status="conectado · cifrada de ponta a ponta"
            messages={conversa}
            height="min(430px,60vh)"
          />
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight">O que o provedor vê</h2>
            <p className="text-[1.02rem] leading-relaxed text-text-soft">
              Ele vê um pacote saindo de uma conta para outra, e o horário. Não vê o texto, não vê
              foto, não vê áudio. A chave que abre a mensagem existe só no aparelho de quem recebe.
            </p>
            <Callout tone="info" title="Nada é guardado para sempre">
              <p>
                A conversa não vira arquivo histórico no servidor. Quando os dois aparelhos apagam, o
                que sobra é o embrulho, que não abre mais nada.
              </p>
            </Callout>
            <p className="text-[0.92rem] text-text-faint">
              A conta de quem conversa é <strong className="text-text-soft">{anaMaria.name}</strong> —
              {" "}{anaMaria.verification.label}.
            </p>
          </div>
        </div>
      </Section>

      <Section alt tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Grupo: a chave muda quando alguém sai</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          Um grupo é uma conta com chave própria. Quando um membro sai, a chave é trocada — e o que
          vem depois já não abre para ele.
        </p>
        <CenaGrupo />

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <Callout tone="warn" title="O que a troca não resolve">
            <p>
              Quem saiu já leu o que leu. A troca protege o futuro, não reescreve o passado — e o
              projeto não promete o contrário.
            </p>
          </Callout>
          <Callout tone="ok" title="Entrada é sempre visível">
            <p>
              O grupo sempre sabe quem entrou e quem saiu. Não existe admissão encoberta, nem quando
              a entrada vem de uma ordem judicial.
            </p>
          </Callout>
        </div>
      </Section>
    </>
  );
}
