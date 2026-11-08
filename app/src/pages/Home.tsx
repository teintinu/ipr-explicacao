import { ChatWindow, type Message } from "../components/app/ChatWindow";
import { Annotation } from "../components/app/Annotation";
import { Avatar } from "../components/Avatar";
import { Prototipo } from "../components/Prototipo";
import { Callout, Kicker, Lead, Section } from "../components/ui";
import { anaMaria, joaoPedro } from "../data/personas";

const conversa: Message[] = [
  { id: "1", from: "them", text: "conseguiu ver o vídeo que te mandei?", meta: "19:04 · cifrada" },
  { id: "2", from: "me", text: "vi. o trecho dos 10% é o que mais me pegou", meta: "19:05 ✓✓" },
  { id: "3", from: "them", text: "mandei pro meu irmão também, ele jurou que era verdade", meta: "19:06 · cifrada" },
  { id: "4", from: "me", text: "manda o link de onde ele tirou isso", meta: "19:07 ✓✓" },
];


const capitulos = [
  { href: "/identidade", titulo: "Identidade", texto: "Como a rede sabe que você existe sem nunca ver seu documento." },
  { href: "/conversas", titulo: "Conversas", texto: "Conversas que só os dois aparelhos conseguem abrir." },
  { href: "/diario", titulo: "Diário", texto: "Postagens, momentos, vídeos, comentários e transmissões ao vivo." },
  { href: "/chamadas", titulo: "Chamadas", texto: "Voz e vídeo que não viram arquivo por padrão." },
  { href: "/confianca", titulo: "Confiança e remoção", texto: "Quem fala primeiro, e como apagar o que você publicou." },
  { href: "/provedores", titulo: "Provedores", texto: "Quem guarda os arquivos, quanto ocupa e quem paga." },
];

export function Home() {
  return (
    <>
      <Section>
        <Kicker>Projeto aberto</Kicker>
        <h1 className="max-w-4xl text-4xl leading-[1.05] font-extrabold tracking-tight md:text-6xl">
          Uma rede realmente social — e de confiança.
        </h1>

        <div className="mt-6 max-w-[66ch] space-y-5 text-lg leading-relaxed text-text-soft">
          <p>
            Hoje, poucas empresas concentram as redes sociais e os aplicativos de mensagem. Elas
            dependem de datacenters gigantes, que gastam eletricidade e água numa escala difícil de
            justificar. E, ao mesmo tempo, a quantidade de contas falsas torna quase impossível
            confirmar qualquer informação — seja numa rede social, seja num aplicativo de mensagem.
          </p>
          <p>
            O UPR propõe outro caminho:{" "}
            <strong className="text-text">uma rede em que todas as pessoas são autenticadas</strong>.
            A verificação pode vir do gov.br ou de outro governo, da sua operadora de telefone, do
            seu partido político ou da empresa em que você trabalha. O que a rede recebe é uma
            credencial — nunca o seu documento.
          </p>
          <p>
            Você continua livre para dizer o que quiser e para não se expor: a conta não mostra quem
            você é. E o que sustenta a convivência é simples: existe uma pessoa real por trás de cada
            conta. É a diferença entre <strong className="text-text">anonimato</strong> e{" "}
            <strong className="text-text">impunidade</strong> — sem expor ninguém.
          </p>
        </div>

        <p className="mt-4 text-[0.9rem] text-text-faint">
          O projeto está em construção — este site mostra o desenho, não um aplicativo pronto.
        </p>
      </Section>

      <Prototipo />

      <Section>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Se quiser o caminho longo
        </h2>
        <Lead>Cada capítulo explica um pedaço da rede com calma.</Lead>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capitulos.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="group rounded-2xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-line-strong"
            >
              <h3 className="font-bold">{c.titulo}</h3>
              <p className="mt-1.5 text-[0.92rem] leading-relaxed text-text-soft">{c.texto}</p>
              <span className="mt-3 inline-block text-[0.86rem] font-bold text-brand">Entender →</span>
            </a>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <Callout tone="info" title="O que você está vendo">
            <p>
              Esta é uma demonstração, não um aplicativo funcionando. As contas, as postagens e
              os grupos são inventados para mostrar o desenho da rede — e cada clique abre a explicação
              do que aconteceria de verdade por baixo.
            </p>
            <p className="flex items-center gap-2">
              <Avatar persona={anaMaria} size="sm" />
              <span>
                Você é <strong>{anaMaria.name}</strong> nesta demonstração —{" "}
                {anaMaria.verification.label}.
              </span>
            </p>
          </Callout>
        </div>
      </Section>
    </>
  );
}
