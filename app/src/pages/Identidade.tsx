import { Avatar, VerificationTag } from "../components/Avatar";
import { Callout, Kicker, Lead, Section, Tldr } from "../components/ui";
import { Scene, type SceneStep } from "../components/scene/Scene";
import { Arrow, Box, Label, Marker } from "../components/scene/parts";
import { anaMaria, antonioJose, mariaClara, type Persona } from "../data/personas";

const passos: SceneStep[] = [
  { at: 0, label: "Você tem um documento: CPF, CNPJ ou passaporte.", note: "O tipo importa: cada um tem regra própria de validação e um emissor." },
  { at: 1600, label: "Um verificador de identidade confere que ele é válido e que é seu.", note: "A conferência é da instituição, com os meios dela — a rede não participa." },
  { at: 3200, label: "Ele emite uma credencial que diz “esta pessoa foi verificada” — sem dizer quem é.", note: "A credencial carrega a assinatura do verificador, não o seu documento." },
  { at: 4800, label: "Com a credencial, você cria contas. A rede não sabe seu nome.", note: "A conta nasce com a credencial; o nome fica do lado de fora." },
  { at: 6400, label: "Cada conta continua separada das outras.", note: "Uma credencial por conta, sem ligação entre elas — e nada impede ter várias." },
];

function CenaIdentidade() {
  return (
    <Scene duration={7600} steps={passos}>
      <svg viewBox="0 0 880 250" role="img" aria-label="O documento é conferido por um verificador, que emite uma credencial; dela saem várias contas separadas.">
        <Marker id="m-id" />
        <Box x={20} y={80} w={170} h={90} lines={["seu documento", "CPF ou passaporte"]} at={0} />
        <Box x={240} y={80} w={200} h={90} tone="brand" lines={["verificador", "confere"]} at={0} />
        <Box x={490} y={80} w={200} h={90} tone="accent" lines={["credencial", "“pessoa verificada”"]} at={3200} />
        <Box x={740} y={40} w={120} h={44} tone="brand" lines={["conta 1"]} at={4800} />
        <Box x={740} y={104} w={120} h={44} tone="brand" lines={["conta 2"]} at={4800} />
        <Box x={740} y={168} w={120} h={44} tone="brand" lines={["conta 3"]} at={4800} />
        <Arrow d="M190 125 H 236" marker="m-id" at={1200} />
        <Arrow d="M440 125 H 486" marker="m-id" at={2400} />
        <Arrow d="M690 125 L 736 62" marker="m-id" at={6400} />
        <Arrow d="M690 125 H 736" marker="m-id" at={6400} />
        <Arrow d="M690 125 L 736 190" marker="m-id" at={6400} />
        <Label x={430} y={214} at={6400}>a rede não vê o documento em nenhum passo</Label>
      </svg>
    </Scene>
  );
}

export function Identidade() {
  return (
    <>
      <Section>
        <Kicker>Quem existe</Kicker>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Identidade</h1>
        <Lead>
          A rede sabe que existe uma pessoa real por trás da conta. Não sabe — e não guarda — quem.
        </Lead>
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">O caminho, em cinco passos</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          Você, o verificador, a credencial e a conta.
        </p>
        <CenaIdentidade />
      </Section>

      <Section tight>
        <Tldr
          title="Resumo em cinco linhas — com o que cada uma quer dizer"
          items={[
            {
              title: "Você prova quem é uma vez, para um verificador de identidade.",
              note: "Pode ser um órgão do governo, a sua operadora, o seu partido ou a empresa em que você trabalha. Você escolhe a quem se apresentar, e o documento só é conferido uma vez.",
            },
            {
              title: "Ele devolve uma credencial — e não conta para a rede quem você é.",
              note: "A credencial não leva nome, CPF nem foto: leva só a prova de que um verificador conferiu seus dados. Ele sabe que emitiu; não consegue dizer em qual conta foi usada.",
            },
            {
              title: "A rede só sabe que a conta tem uma credencial válida.",
              note: "Por isso você pode ter quantas contas quiser. Cada uma recebe a própria credencial, emitida numa conversa separada.",
            },
            {
              title: "Uma certificadora mantém a lista de verificadores legítimos.",
              note: "Ela não atende pessoas: credencia instituições e responde pela lista. Quem verifica assume responsabilidade legal pelo que atesta.",
            },
            {
              title: "A meta é o gov.br — mas não só ele.",
              note: "Quem não é brasileiro precisa de outro emissor. O desenho não assume que documento é sinônimo de CPF.",
            },
          ]}
        />
      </Section>

      <Section alt tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">O selo tem idade</h2>
        <p className="mt-2 mb-5 max-w-3xl text-[1.02rem] leading-relaxed text-text-soft">
          Verificação não vale para sempre. O selo no avatar muda de cor conforme o tempo desde a
          última conferência — e a cor não esconde nem pune ninguém: só mostra há quanto tempo
          ninguém confere aquele documento.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["Verde", "conferida há menos de um ano", "bg-accent"],
            ["Amarelo", "entre um e cinco anos", "bg-warn"],
            ["Vermelho", "acima de cinco anos", "bg-danger"],
          ].map(([nome, texto, cor]) => (
            <div key={nome} className="rounded-2xl border border-line bg-surface p-5">
              <span className={`mb-2 block h-2 w-10 rounded-full ${cor}`} aria-hidden="true" />
              <h3 className="font-bold">{nome}</h3>
              <p className="mt-1 text-[0.9rem] text-text-soft">{texto}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {([
            [anaMaria, "é você nesta demonstração"],
            [mariaClara, "confiança antiga, mas ainda válida"],
            [antonioJose, "passou muito tempo sem reverificar"],
          ] as Array<[Persona, string]>).map(([persona, texto]) => {
            return (
              <div key={persona.id} className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4">
                <Avatar persona={persona} size="lg" />
                <div>
                  <p className="font-bold">{persona.name}</p>
                  <p className="text-[0.82rem] text-text-faint">{texto}</p>
                  <span className="mt-1.5 inline-block">
                    <VerificationTag persona={persona} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6">
          <Callout tone="info" title="Quem decide o prazo é o verificador">
            <p>
              A rede não inventa regra de revalidação: cada emissor define de quanto em quanto tempo
              confere de novo. A cor é só a leitura pública dessa data.
            </p>
          </Callout>
        </div>
      </Section>
    </>
  );
}
