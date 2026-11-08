import { Callout, Kicker, Lead, Section } from "../components/ui";
import { Scene, type SceneStep } from "../components/scene/Scene";
import { Arrow, Box, Label, Marker } from "../components/scene/parts";

const formatos = [
  { titulo: "Postagem", texto: "Texto, foto ou vídeo curto. Fica no seu perfil até você apagar." },
  { titulo: "Momento", texto: "Postagem com prazo de 24 horas. Depois do prazo, ninguém busca mais." },
  { titulo: "Vídeo", texto: "Arquivo maior, entregue em pedaços por vários provedores." },
  { titulo: "Comentário", texto: "Assinado, com regra de identificação escolhida por quem publicou." },
  { titulo: "Transmissão ao vivo", texto: "Acontece uma vez; vira arquivo só se quem transmitiu decidir." },
];

const passosLive: SceneStep[] = [
  { at: 0, label: "O apresentador está ao vivo e controla o que entra no ar.", note: "Quem transmite decide o que aparece — e responde pelo que decidiu." },
  { at: 1600, label: "A plateia assiste e pode enviar vídeos ou áudios.", note: "Qualquer pessoa pode mandar; ninguém entra no ar sem passar por alguém." },
  { at: 3200, label: "Os envios chegam ao moderador, não ao apresentador.", note: "O filtro é separado de quem apresenta, para não virar favor." },
  { at: 4800, label: "O moderador ouve, descarta o que é abuso e aprova o que faz sentido.", note: "A decisão dele também é registrada." },
  { at: 6400, label: "O aprovado é encaminhado, com um comentário rápido do moderador.", note: "O apresentador recebe o vídeo já triado e com contexto." },
  { at: 8000, label: "O apresentador decide, com um clique, tocar aquele vídeo ao vivo.", note: "Ele pode recusar, mesmo depois da aprovação." },
  { at: 9600, label: "Depois, ele decide se a transmissão continua publicada.", note: "Transmissão ao vivo não é arquivo automático." },
  { at: 11200, label: "A partir da transmissão é possível gerar cortes, que apontam para o original.", note: "O corte é derivado: se o original sai, o corte fica órfão, com aviso." },
];

function CenaLive() {
  return (
    <Scene duration={12200} steps={passosLive}>
      <svg viewBox="0 0 880 320" role="img" aria-label="A plateia envia vídeos, o moderador filtra e o apresentador decide o que entra no ar.">
        <Marker id="m-live" />
        <Box x={30} y={40} w={210} h={80} tone="accent" lines={["apresentador", "ao vivo"]} at={0} />
        <Box x={30} y={170} w={210} h={80} lines={["plateia", "assiste e envia"]} at={1600} />
        <Box x={320} y={150} w={230} h={80} tone="brand" lines={["moderador", "recebe os envios"]} at={3200} />
        <Box x={320} y={40} w={230} h={80} tone="warn" lines={["descarta abuso", "aprova o resto"]} at={4800} />
        <Box x={620} y={40} w={230} h={80} lines={["no ar", "só o que foi aprovado", "e liberado"]} at={8000} />
        <Box x={620} y={150} w={230} h={80} lines={["o apresentador decide", "mesmo depois da aprovação"]} at={6400} />
        <Box x={320} y={262} w={530} h={44} tone="accent" lines={["o corte aponta para o original — se ele sai, o corte avisa"]} at={11200} />
        <Arrow d="M240 210 H 316" marker="m-live" at={3200} />
        <Arrow d="M435 150 V 124" marker="m-live" at={4800} />
        <Arrow d="M550 80 H 616" marker="m-live" at={8000} />
        <Arrow d="M550 190 H 616" marker="m-live" at={6400} />
        <Arrow d="M345 262 V 234" tone="accent" marker="m-live" at={10400} />
        <Label x={545} y={250} at={9600}>a transmissão não vira arquivo sozinha</Label>
      </svg>
    </Scene>
  );
}

export function Diario() {
  return (
    <>
      <Section>
        <Kicker>O dia a dia</Kicker>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Diário</h1>
        <Lead>
          O que você publica, por quanto tempo fica e quem decide o que entra no ar.
        </Lead>
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">O que cabe numa conta</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {formatos.map((f) => (
            <div key={f.titulo} className="rounded-2xl border border-line bg-surface p-5">
              <h3 className="font-bold">{f.titulo}</h3>
              <p className="mt-1.5 text-[0.92rem] leading-relaxed text-text-soft">{f.texto}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section alt tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Momentos: o que some em 24 horas</h2>
        <p className="mt-2 max-w-3xl text-[1.02rem] leading-relaxed text-text-soft">
          Um momento é uma postagem com prazo escrito junto. Passado o prazo, ele deixa de ser servido — e
          o provedor apaga o arquivo quando voltar a se conectar. Não há recibo, e não precisa: a
          rede simplesmente não busca mais.
        </p>
        <p className="mt-3 max-w-3xl text-[1.02rem] leading-relaxed text-text-soft">
          O que fica é o registro assinado: existiu, e tinha prazo de um dia. O prazo não promete que
          ninguém salvou — print e gravação de tela seguem possíveis, e nenhuma rede impede isso.
        </p>
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">A transmissão ao vivo</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          Quem está no ar, quem modera e quem enviou ficam registrados — para que a justiça tenha a
          quem perguntar, se precisar.
        </p>
        <CenaLive />
      </Section>

      <Section tight>
        <div className="grid gap-3 md:grid-cols-2">
          <Callout tone="warn" title="Remoção é do autor">
            <p>
              Quem publicou pode apagar quando quiser. Ilegalidade vai para a justiça, que ordena ao
              autor — a rede não decide sozinha o que sai do ar.
            </p>
          </Callout>
          <Callout tone="info" title="Apagar deixa prova">
            <p>
              Some o conteúdo, fica um registro assinado com o resumo do que existia. É o que impede
              que apagar vire impunidade.
            </p>
          </Callout>
        </div>
      </Section>
    </>
  );
}
