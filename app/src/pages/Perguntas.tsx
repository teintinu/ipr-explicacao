import { Kicker, Lead, Section } from "../components/ui";

const perguntas = [
  {
    q: "Se eu quiser sair, perco o que publiquei?",
    a: "Não. O que você publicou é assinado pela sua conta e vive em cópias: sair de um aplicativo não apaga o acervo. O que ainda falta é um endereço estável, para quem te segue continuar te encontrando do outro lado.",
  },
  {
    q: "Alguém pode reduzir o alcance do que eu publico?",
    a: "Não há alcance para reduzir. O mural mostra o que os seus contatos publicaram, em ordem de tempo — não existe ranking, impulso pago nem conteúdo recomendado escolhendo quem aparece.",
  },
  {
    q: "Como sei que um conteúdo é para a minha idade?",
    a: "Cada postagem tem uma classificação: L, 10, 12, 14, 16 ou 18. Quem publica não escolhe a nota — responde o que a postagem contém (violência, drogas, nudez, linguagem imprópria…) e a nota sai do item mais alto marcado. A conta restrita só recebe o que está dentro do teto da idade dela.",
  },
  {
    q: "Como encontro notícia do meu bairro, da minha cidade ou do mundo?",
    a: "Toda notícia carrega uma região — mundo inteiro, país, estado, cidade ou bairro — e uma lista de assuntos. Você filtra pelo que interessa. A região é escolhida por quem publica: a rede nunca descobre onde você está pelo IP, pelo GPS ou pelo fuso.",
  },
  {
    q: "Isso existe hoje?",
    a: "Não. O que existe é o desenho da rede e este site explicando o desenho. A rede em si ainda está em construção — por isso falamos de “proposta” e não de “aplicativo”.",
  },
  {
    q: "Preciso entregar meu CPF para a rede?",
    a: "Não para a rede. Você entrega o documento a um verificador de identidade — pode ser o gov.br, a sua operadora de telefonia, o seu partido político, a empresa em que trabalha, etc. O importante é que alguém confira e devolva uma credencial anônima que garante que você é uma pessoa real. A rede só vê a credencial.",
  },
  {
    q: "Se ninguém vê meu nome, como alguém me encontra?",
    a: "Só por ordem judicial. O mandado vai para a instituição que verificou você — a AR —, que confere a ordem, consulta a própria base e entrega só os campos pedidos. A rede não participa: ela não tem esse vínculo para entregar. E você pode se identificar voluntariamente numa conta, sem abrir mão das outras.",
  },
  {
    q: "Posso ter mais de uma conta?",
    a: "Sim, quantas quiser. Cada conta recebe a própria credencial, emitida numa conversa separada, e nada liga uma à outra",
  },
  {
    q: "O que é o escudo no avatar?",
    a: "É o selo de verificação. A cor diz há quanto tempo o documento foi conferido pela última vez: verde até um ano, amarelo até cinco, vermelho acima de cinco. Não é nota de confiança — é data.",
  },
  {
    q: "Quem pode ser provedor?",
    a: "Qualquer um: empresa, cooperativa, universidade ou uma pessoa com um aparelho ligado. Não há cadastro nem aprovação. Provedor anônimo também é permitido.",
  },
  {
    q: "Quanto o meu celular vai gastar?",
    a: "No máximo 1 GB de disco e 1 GB de envio por dia — e só se você estiver com o aparelho carregado e no wi-fi. Na bateria ou na rede móvel, o compartilhamento pausa.",
  },
  {
    q: "O que é um “momento”?",
    a: "Uma postagem com prazo de 24 horas. Depois do prazo, ninguém busca mais o arquivo, e o provedor apaga quando voltar a se conectar. O que fica é o registro assinado de que ele existiu.",
  },
  {
    q: "Dá para apagar uma postagem?",
    a: "Sim, quem publicou pode remover. O arquivo sai, mas fica um registro com o resumo do que existia — é o que impede que apagar vire impunidade.",
  },
  {
    q: "A rede consegue ler minhas mensagens?",
    a: "Não. A mensagem é trancada no seu aparelho com a chave de quem recebe. O provedor transporta o embrulho e não tem a chave.",
  },
  {
    q: "E se a justiça pedir minhas conversas?",
    a: "A rede não tem o que entregar: ela nunca teve o texto. O conteúdo existe nos dois aparelhos, e só eles podem abrir.",
  },
  {
    q: "Conta de menor de idade: quem aprova os seguidores?",
    a: "O responsável legal, de uma conta própria dele. Cada nova amizade e cada perfil que a conta passa a seguir é um pedido separado — não existe aprovar tudo nem aprovação automática. Ele também pode revogar um vínculo já aprovado.",
  },
  {
    q: "Quem paga a conta?",
    a: "Não há dinheiro dentro do protocolo. Cada provedor cobre o próprio custo — empresa que oferece como serviço, cooperativa que divide, ou pessoa que usa o aparelho que já tem.",
  },
];

export function Perguntas() {
  return (
    <>
      <Section>
        <Kicker>Dúvidas comuns</Kicker>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Perguntas frequentes</h1>
        <Lead>As perguntas que mais aparecem, com respostas curtas.</Lead>
      </Section>

      <Section tight>
        <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface">
          {perguntas.map((item) => (
            <details key={item.q} className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center gap-3 font-semibold">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-soft text-[0.8rem] font-extrabold text-brand-ink transition group-open:rotate-45">
                  +
                </span>
                {item.q}
              </summary>
              <p className="mt-3 pl-9 text-[0.98rem] leading-relaxed text-text-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
