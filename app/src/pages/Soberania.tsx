import { Callout, Kicker, Lead, Section } from "../components/ui";

const hoje = [
  {
    titulo: "O número de telefone",
    texto: "Você troca de operadora e leva o número. Quem te liga não precisa saber que você trocou.",
    portatil: true,
  },
  {
    titulo: "A chave Pix",
    texto: "Você troca de banco e a chave continua a mesma. Quem te paga não precisa ser avisado.",
    portatil: true,
  },
  {
    titulo: "O seu perfil",
    texto: "Você sai da rede e perde seguidores, histórico e reputação. Quem te seguia não tem como te achar do outro lado.",
    portatil: false,
  },
];

const mudam = [
  {
    titulo: "A conta tem endereço",
    texto:
      "Um endereço estável, que responde quem é aquela conta e onde estão as cópias do que ela publicou. Trocar de aplicativo não muda o endereço.",
  },
  {
    titulo: "O acervo não vai embora",
    texto:
      "O que você publicou é assinado e vive em cópias. Sair de um aplicativo não apaga o que já existe — a conta continua sendo a mesma chave.",
  },
  {
    titulo: "O mural é o que os contatos publicaram",
    texto:
      "Em ordem de tempo. Não existe ranking, impulso pago nem “conteúdo recomendado” escolhendo quem aparece.",
  },
];

export function Soberania() {
  return (
    <>
      <Section>
        <Kicker>Soberania digital</Kicker>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Sua conta tem endereço — e o endereço não é de ninguém
        </h1>
        <Lead>
          Você troca de banco e leva a chave Pix. Troca de operadora e leva o número. Aqui
          você troca de aplicativo e leva a conta.
        </Lead>
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Hoje, sair custa tudo</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          O que dá para levar e o que não dá.
        </p>

        <div className="grid gap-3 md:grid-cols-3">
          {hoje.map((item) => (
            <div
              key={item.titulo}
              className={`rounded-2xl border p-5 ${
                item.portatil ? "border-line bg-surface" : "border-danger/30 bg-danger-soft/40"
              }`}
            >
              <p className="flex items-center gap-2 text-[0.72rem] font-extrabold tracking-[0.08em] uppercase">
                <span className={item.portatil ? "text-accent" : "text-danger"}>
                  {item.portatil ? "leva" : "fica"}
                </span>
              </p>
              <h3 className="mt-1 font-bold">{item.titulo}</h3>
              <p className="mt-1.5 text-[0.92rem] leading-relaxed text-text-soft">{item.texto}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-text-soft">
          A diferença não é técnica: é de quem fica com o quê. Quando sair custa caro, quem
          fica pode mudar as regras sem perder ninguém — e ninguém tem para onde ir.
        </p>
      </Section>

      <Section alt tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Três coisas que mudam aqui</h2>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {mudam.map((item) => (
            <div key={item.titulo} className="rounded-2xl border border-line bg-surface p-5">
              <h3 className="font-bold">{item.titulo}</h3>
              <p className="mt-1.5 text-[0.92rem] leading-relaxed text-text-soft">{item.texto}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Não existe alcance para ser cortado
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface p-5">
            <p className="text-[0.7rem] font-extrabold tracking-[0.1em] text-text-faint uppercase">
              Na rede que escolhe por você
            </p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-text-soft">
              A plataforma decide o que você vê e quem vê você. Se o seu conteúdo cai de
              alcance, você não fica sabendo — e não há a quem perguntar. O número que ela
              mostra é o número dela.
            </p>
          </div>
          <div className="rounded-2xl border border-brand/30 bg-brand-soft/40 p-5">
            <p className="text-[0.7rem] font-extrabold tracking-[0.1em] text-brand uppercase">
              Aqui
            </p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-text-soft">
              O mural é o que os seus contatos publicaram, em ordem de tempo. Não há ranking
              para mexer, nem alcance para reduzir. Se alguém some do seu mural, foi porque
              deixou de publicar ou porque você deixou de seguir — não porque um sistema
              decidiu.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <Callout tone="info" title="Por que isso importa além de conveniência">
            <p>
              Quem controla o que aparece controla o que é possível. Não é sobre o que você
              vê hoje: é sobre as opções que existem na próxima vez que você precisar
              escolher alguma coisa.
            </p>
          </Callout>
        </div>
      </Section>

      <Section alt tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Hiperescala não é a única engenharia possível
        </h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          Dizem que só existe um caminho: concentrar placas, água e energia num lugar e
          treinar com tudo o que existe. Isso é uma escolha de engenharia — não uma lei da
          natureza, e ninguém consegue demonstrar que seja inevitável.
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface p-5">
            <h3 className="font-bold">Um lugar só</h3>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-text-soft">
              Quanto maior a concentração, mais água para refrigerar, mais energia, mais
              dependência de quem construiu aquele lugar — e menos gente capaz de fazer o
              mesmo.
            </p>
          </div>
          <div className="rounded-2xl border border-brand/30 bg-brand-soft/40 p-5">
            <h3 className="font-bold">Muitos lugares</h3>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-text-soft">
              Rede federada: cada aparelho guarda e serve um pedaço. Não precisa de
              datacenter gigante, não precisa de um endereço único, e dois aparelhos já
              formam rede.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <Callout tone="warn" title="Seus dados não são insumo">
            <p>
              Aqui a rede não lê o que você publica: não há varredura, indexação nem coleta
              para treinar modelo. O que é privado continua privado, e o que é público é
              servido por cópia — não minerado.
            </p>
          </Callout>
        </div>
      </Section>

      <Section alt tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">O que ainda não existe</h2>
        <p className="mt-2 mb-4 max-w-3xl text-lg text-text-soft">
          A parte honesta: nem tudo o que está acima está pronto.
        </p>

        <ul className="max-w-3xl space-y-2.5">
          {[
            "O endereço estável é a próxima peça — hoje a conta é identificada pela chave, e ainda não há um nome que qualquer aplicativo resolva.",
            "A audiência é contada pelos aparelhos. Isso impede um medidor central de mentir, mas também significa que o número é uma estimativa — não há recibo que prove cada visualização.",
            "Falar com outras redes (Mastodon, Bluesky, Nostr) exige uma ponte operada por alguém. A ponte é um servidor, e um servidor é exatamente o que a rede evita.",
            "O cadastro assinado de comércio — horário, endereço, contato, avaliações — ainda não está no desenho.",
          ].map((texto) => (
            <li key={texto} className="flex gap-2.5 text-[0.95rem] leading-relaxed text-text-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" aria-hidden="true" />
              {texto}
            </li>
          ))}
        </ul>

        <p className="mt-5 max-w-3xl text-[0.92rem] leading-relaxed text-text-faint">
          Preferimos listar o que falta a fingir que está resolvido. Cada item acima é uma
          decisão em aberto no projeto, não uma promessa.
        </p>
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Para continuar</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <a
            href="/por-dentro"
            className="rounded-2xl border border-line bg-surface p-5 transition hover:border-brand/40"
          >
            <p className="font-bold">Como a rede funciona</p>
            <p className="mt-1 text-[0.9rem] text-text-soft">
              O caminho de uma postagem, do seu aparelho até quem lê.
            </p>
            <span className="mt-2 inline-block text-[0.85rem] font-semibold text-brand">ver por dentro →</span>
          </a>
          <a
            href="/provedores"
            className="rounded-2xl border border-line bg-surface p-5 transition hover:border-brand/40"
          >
            <p className="font-bold">Quem guarda o conteúdo</p>
            <p className="mt-1 text-[0.9rem] text-text-soft">
              Sem servidor central: cópias em aparelhos diferentes, com recibo.
            </p>
            <span className="mt-2 inline-block text-[0.85rem] font-semibold text-brand">ver provedores →</span>
          </a>
        </div>

        <p className="mt-6 max-w-3xl text-[0.82rem] leading-relaxed text-text-faint">
          Para se aprofundar, duas conferências serviram de base para esta página:{" "}
          <a
            className="font-semibold text-brand hover:underline"
            href="https://www.youtube.com/watch?v=ZUm1UfhoJS4"
            target="_blank"
            rel="noreferrer"
          >
            Soberania digital
          </a>{" "}
          e{" "}
          <a
            className="font-semibold text-brand hover:underline"
            href="https://www.youtube.com/watch?v=bSoKMCcW2UI"
            target="_blank"
            rel="noreferrer"
          >
            A episteme da IA, dados e a perspectiva da hiperescala
          </a>
          .
        </p>
      </Section>
    </>
  );
}
