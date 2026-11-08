import { Annotation } from "../components/app/Annotation";
import { AppFrame } from "../components/app/AppFrame";
import { ChatWindow, type Message } from "../components/app/ChatWindow";
import { PostActions, PostCard } from "../components/app/PostCard";
import { StoryRow } from "../components/app/StoryRow";
import { Avatar } from "../components/Avatar";
import { Callout, Kicker, Lead, Section } from "../components/ui";
import {
  anaBeatriz,
  anaMaria,
  bandaDoBairro,
  cafeAurora,
  joaoPedro,
  antonioJose,
  mariaClara,
} from "../data/personas";

const conversa: Message[] = [
  { id: "1", from: "them", text: "conseguiu ver o vídeo que te mandei?", meta: "19:04 · cifrada" },
  { id: "2", from: "me", text: "vi. o trecho dos 10% é o que mais me pegou", meta: "19:05 ✓✓" },
  { id: "3", from: "them", text: "mandei pro meu irmão também, ele jurou que era verdade", meta: "19:06 · cifrada" },
  { id: "4", from: "me", text: "manda o link de onde ele tirou isso", meta: "19:07 ✓✓" },
];

const legenda = [
  { n: 1, href: "/por-dentro", titulo: "Publicar um post", texto: "Assinatura, impressão digital e envio aos provedores." },
  { n: 2, href: "/por-dentro", titulo: "Conta em que você confia", texto: "Por que o comentário dela aparece primeiro." },
  { n: 3, href: "/por-dentro", titulo: "Comentários sem identificação", texto: "O autor do post escolheu não mostrar quem comenta." },
  { n: 4, href: "/por-dentro", titulo: "Grupo", texto: "Como um grupo ganha identidade e chave própria." },
  { n: 5, href: "/por-dentro", titulo: "Aprovação de membro", texto: "Pedido, votação e entrada registrada." },
  { n: 6, href: "/conversas", titulo: "Conversas", texto: "Abra a tela de mensagens e clique numa bolha." },
  { n: 7, href: "/identidade", titulo: "Identidade", texto: "Quem confirma que você existe — e como." },
  { n: 8, href: "/por-dentro", titulo: "Provedores", texto: "Quem guarda os arquivos e por quê." },
];

const capitulos = [
  { href: "/identidade", titulo: "Identidade", texto: "Como a rede sabe que você existe sem nunca ver seu documento." },
  { href: "/conversas", titulo: "Conversas", texto: "Conversas que só os dois aparelhos conseguem abrir." },
  { href: "/diario", titulo: "Diário", texto: "Posts, momentos, vídeos, comentários e transmissões ao vivo." },
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

      <Section tight>
        <Kicker>Experimente</Kicker>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Esta é a tela de uma conta comum.
        </h2>
        <Lead>
          Passe o mouse e clique em qualquer elemento para ver, em animação, o que acontece nos
          bastidores.
        </Lead>

        <div className="mt-8">
          <div className="relative mx-auto w-fit">
          <AppFrame width="max-w-[860px]">
            <StoryRow
              me={anaMaria}
              people={[joaoPedro, mariaClara, antonioJose, anaBeatriz, cafeAurora]}
            />

            <div className="grid gap-3.5 bg-bg-alt p-3.5">
              <PostCard
                persona={joaoPedro}
                time="há 12 minutos"
                visibility="público"
                text="Estudos mostram que a gente usa só 10% do cérebro. Se for verdade, é o maior desperdício do corpo humano — e ninguém sente falta do resto."
                media={
                  <img
                    src="/cerebro.jpg"
                    alt="Modelo anatômico de cérebro humano, visto de cima"
                    className="h-56 w-full rounded-xl border border-line object-cover"
                  />
                }
                highlight={
                  <div className="rounded-r-xl border-l-[3px] border-brand bg-brand-soft/70 px-3.5 py-2.5 text-[0.9rem]">
                    <span className="mr-1.5 text-brand-ink">⚖</span>
                    <span className="font-semibold text-brand-ink">Maria Clara</span> — A frase vem
                    de 1907 e falava de potencial, não de uso. Exames de imagem mostram atividade em
                    todas as áreas do cérebro, inclusive dormindo. E não existe lesão que destrua 90%
                    dele com a pessoa seguindo igual.
                  </div>
                }
              >
                <PostActions>
                  <span>♥ 128</span>
                  <span>💬 34</span>
                  <a className="ml-auto font-bold text-brand hover:underline" href="/por-dentro">
                    ver por dentro →
                  </a>
                </PostActions>
              </PostCard>

              <PostCard
                persona={bandaDoBairro}
                time="há 2 dias"
                visibility="só membros"
                text="Ensaio aberto sábado às 16h, no mesmo lugar de sempre. Levem cabo extra — o último queimou."
                tags={[
                  { tone: "group", label: "grupo" },
                  { tone: "private", label: "só membros" },
                ]}
              >
                <a
                  className="block rounded-lg bg-surface-2 px-3 py-2 text-[0.86rem] hover:bg-surface-3"
                  href="/por-dentro"
                >
                  <strong>Ana Maria entrou no grupo</strong> · aprovada por 3 membros
                </a>
                <PostActions>
                  <span>14 respostas</span>
                  <span>3 aguardando aprovação</span>
                  <a className="ml-auto font-bold text-brand hover:underline" href="/por-dentro">
                    ver por dentro →
                  </a>
                </PostActions>
              </PostCard>

              <PostCard
                persona={antonioJose}
                time="há 40 minutos"
                visibility="público"
                text="Voltei a usar a rede depois de anos. Alguém me explica o que mudou nesse tempo?"
              >
                <PostActions>
                  <span>3 respostas</span>
                  <a className="ml-auto font-bold text-brand hover:underline" href="/identidade">
                    por que o selo dele está vermelho →
                  </a>
                </PostActions>
              </PostCard>
            </div>
          </AppFrame>

          <Annotation label="ver por dentro" href="/por-dentro" />
          </div>
        </div>

        <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {legenda.map((item) => (
            <a
              key={item.n}
              href={item.href}
              className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-3 transition hover:-translate-y-px hover:border-line-strong"
            >
              <span className="grid h-5.5 w-5.5 shrink-0 place-items-center rounded-full bg-brand-soft text-[0.72rem] font-extrabold text-brand-ink">
                {item.n}
              </span>
              <span>
                <strong className="block text-[0.9rem] leading-tight">{item.titulo}</strong>
                <span className="text-[0.8rem] text-text-soft">{item.texto}</span>
              </span>
            </a>
          ))}
        </div>
      </Section>

      <Section alt>
        <Kicker>Conversas</Kicker>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          E a tela onde você fala.
        </h2>
        <Lead>
          Uma conversa entre duas pessoas: as bolhas saem trancadas do seu aparelho e só abrem no
          aparelho de quem recebe.
        </Lead>

        <div className="mt-8">
          <div className="relative mx-auto w-fit">
          <div className="w-full max-w-[620px]">
            <ChatWindow
              person={joaoPedro}
              status="online · cifrada de ponta a ponta"
              messages={conversa}
              height="min(400px,54vh)"
            />
          </div>
          <Annotation label="abrir a conversa" href="/conversas" />
          </div>
        </div>
      </Section>

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
              Esta é uma demonstração, não um aplicativo funcionando. As contas, os posts e os
              grupos são inventados para mostrar o desenho da rede — e cada clique abre a explicação
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
