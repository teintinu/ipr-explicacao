import { Kicker, Lead, Section } from "../components/ui";
import { Scene, type SceneStep } from "../components/scene/Scene";
import { Arrow, Box, CircleNode, Label, Marker } from "../components/scene/parts";
import { SeloClassificacao } from "../components/prototipo/SeloClassificacao";

/* ------------------------------------------------------------------ */
/* 1 — Publicar um post                                               */
/* ------------------------------------------------------------------ */

const passosPost: SceneStep[] = [
  { at: 0, label: "Você escreve a postagem no seu aparelho.", note: "Nada sai daqui antes de estar pronto: texto, foto e data viram um pacote só." },
  { at: 1400, label: "O aplicativo monta o conteúdo: texto, foto e a data.", note: "A data entra dentro do pacote — é ela que vai provar depois quando aquilo foi publicado." },
  { at: 2800, label: "Ele assina com a sua chave e calcula a impressão digital.", note: "A assinatura prova que foi você; a impressão digital prova que ninguém alterou." },
  { at: 4600, label: "O bloco vai para vários provedores. Cada um guarda uma cópia.", note: "Se um provedor cair, o bloco continua existindo nos outros — você não depende de nenhum deles." },
  { at: 6000, label: "Quem você autorizou busca o bloco e confere a assinatura.", note: "O aplicativo de quem lê recusa o conteúdo se a assinatura não bater." },
];

function CenaPost() {
  return (
    <Scene duration={7600} steps={passosPost}>
      <svg viewBox="0 0 860 250" role="img" aria-label="A conta assina a postagem, calcula a impressão digital e envia aos provedores.">
        <Marker id="m-post" />
        <path className="edge ghost" d="M150 120 H 250" />
        <path className="edge ghost" d="M420 120 H 500" />
        <path className="edge ghost" d="M690 120 H 740" />
        <CircleNode cx={90} cy={120} r={42} tone="brand" label="você" at={0} />
        <Box x={250} y={88} w={170} h={64} lines={["postagem", "texto + foto"]} at={1400} />
        <Box x={500} y={80} w={190} h={80} tone="accent" mono lines={["assinado", "hash b94f…", "não dá para alterar"]} at={2800} />
        <Box x={740} y={52} w={96} h={42} lines={["provedor"]} at={4600} />
        <Box x={740} y={103} w={96} h={42} lines={["provedor"]} at={4600} />
        <Box x={740} y={154} w={96} h={42} lines={["provedor"]} at={4600} />
        <Arrow d="M150 120 H 246" marker="m-post" at={6000} />
        <Arrow d="M420 120 H 496" marker="m-post" at={6000} />
        <Arrow d="M690 120 H 736" tone="accent" marker="m-post" at={7200} />
      </svg>
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* 2 — Conta em que você confia                                       */
/* ------------------------------------------------------------------ */

const passosConfianca: SceneStep[] = [
  { at: 0, label: "Qualquer conta pode receber essa confiança — não existe cadastro.", note: "Não há lista oficial, nem candidatura, nem aprovação. A conta é só uma conta." },
  { at: 1800, label: "Você clica em “Confiar nesta conta”. A escolha fica só com você.", note: "A eleição mora no seu aparelho. Ninguém fica sabendo que você escolheu — nem a conta escolhida." },
  { at: 3400, label: "Ela ganha um selo que mostra que existem pessoas que confiam nas opiniões dela.", note: "O selo é uma contagem, não um título: diz “há quem confie”, nunca “esta conta é autoridade”." },
  { at: 5200, label: "Quando ela marca um comentário como alerta, ele aparece primeiro.", note: "A marcação é dela, não sua: o leitor não decide o que é aviso. Comentário comum continua na ordem normal." },
  { at: 6600, label: "Para quem não confiou, nada muda.", note: "A prioridade é sua, não da rede: quem não elegeu vê a conversa na ordem normal." },
];

function CenaConfianca() {
  return (
    <Scene duration={8200} steps={passosConfianca}>
      <svg viewBox="0 0 860 240" role="img" aria-label="Você escolhe uma conta; ela ganha um selo e seus comentários passam a aparecer primeiro.">
        <Marker id="m-conf" />
        <CircleNode cx={90} cy={110} r={40} tone="brand" label="você" at={0} />
        <Box x={250} y={82} w={180} h={56} lines={["@checagem", "conta comum"]} at={0} />
        <Arrow d="M136 110 H 244" marker="m-conf" at={1800} />
        <Label x={190} y={96} at={1800}>confiar</Label>
        <Box x={250} y={82} w={180} h={56} tone="accent" lines={["@checagem", "conta comum"]} at={3400} />
        <CircleNode cx={470} cy={110} r={14} tone="accent" label="✓" at={3400} />
        <Label x={520} y={106} at={3400}>selo discreto</Label>
        <Label x={520} y={124} at={3400}>“há quem confie”</Label>
        <Box x={640} y={52} w={190} h={40} tone="accent" lines={["comentário dela"]} at={5200} />
        <Box x={640} y={102} w={190} h={36} lines={["outros comentários"]} at={5200} />
        <Label x={735} y={170} at={6600}>para quem não confiou,</Label>
        <Label x={735} y={187} at={6600}>a ordem é normal</Label>
      </svg>
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* 3 — Comentários sem identificação                                  */
/* ------------------------------------------------------------------ */

const passosComentarios: SceneStep[] = [
  { at: 0, label: "Quem publicou a postagem escolheu comentários sem identificação.", note: "A decisão é da postagem, tomada antes dos comentários. Quem comenta entra na regra que já estava lá." },
  { at: 1600, label: "O assunto é polêmico — e a escolha existe para o debate ficar sobre o assunto.", note: "Quando o nome não está em jogo, fica mais difícil transformar a discussão em ataque pessoal." },
  { at: 2900, label: "A pessoa escreve normalmente: o comentário é assinado como qualquer outro.", note: "A assinatura é a mesma. O que muda é só o que a tela mostra." },
  { at: 4600, label: "A tela mostra os comentários, sem o nome de quem escreveu.", note: "Ninguém é marcado. O comentário aparece como texto, e é ao texto que se responde." },
  { at: 6200, label: "A assinatura continua por baixo — é o que permite moderar abuso.", note: "Se alguém abusa, dá para chegar à conta que escreveu. O público não; a moderação, sim." },
  { at: 7600, label: "O convite: discordar de ideias sem atacar quem as defende.", note: "É a diferença entre dizer “esse dado está errado” e dizer “você é um idiota”." },
];

function CenaComentarios() {
  return (
    <Scene duration={9000} steps={passosComentarios}>
      <svg viewBox="0 0 880 250" role="img" aria-label="A postagem foi publicada sem identificação nos comentários; o comentário segue assinado e a tela mostra só o texto.">
        <Marker id="m-com" />
        <Box x={60} y={70} w={240} h={100} tone="brand" lines={["a postagem", "assunto polêmico", "sem identificação"]} at={0} />
        <Box x={350} y={70} w={180} h={100} lines={["assinatura", "9c21…", "continua lá"]} mono at={2900} />
        <Box x={600} y={60} w={220} h={120} lines={["na tela", "os comentários", "sem o nome de quem escreveu"]} at={4600} />
        <Box x={250} y={200} w={540} h={34} tone="accent" lines={["quem lê vê o argumento, não a pessoa"]} at={6200} />
        <Arrow d="M300 120 H 346" marker="m-com" at={6600} />
        <Arrow d="M530 120 H 596" marker="m-com" at={7400} />
      </svg>
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* 4 — Criar um grupo                                                 */
/* ------------------------------------------------------------------ */

const passosGrupo: SceneStep[] = [
  { at: 0, label: "Alguém funda o grupo.", note: "Quem funda escolhe as regras iniciais: quem entra, como entra, quem modera." },
  { at: 1600, label: "O grupo nasce com chave e assinatura próprias — é como uma conta.", note: "É por isso que o grupo assina o que publica: a postagem é do grupo, não de quem apertou o botão." },
  { at: 3600, label: "A criação é publicada como conteúdo assinado, verificável por qualquer pessoa.", note: "Qualquer um confere que aquele grupo existe e quem o criou. Não há grupo fantasma." },
  { at: 5800, label: "Entradas e saídas ficam registradas para o grupo.", note: "Só quem é membro vê quem entrou e quem saiu. A rede não publica essa lista — o grafo social não fica exposto." },
];

function CenaGrupo() {
  return (
    <Scene duration={7000} steps={passosGrupo}>
      <svg viewBox="0 0 860 250" role="img" aria-label="O fundador cria o grupo, gera uma chave própria e publica o evento de criação.">
        <Marker id="m-grupo" />
        <CircleNode cx={90} cy={120} r={40} tone="brand" label="funda" at={0} />
        <Arrow d="M136 120 H 240" marker="m-grupo" at={1600} />
        <Box x={250} y={80} w={200} h={80} tone="accent" lines={["grupo", "chave própria", "assinatura própria"]} at={1600} />
        <Arrow d="M450 120 H 540" tone="accent" marker="m-grupo" at={3600} />
        <Box x={550} y={70} w={230} h={100} lines={["criação assinada", "“grupo criado”", "o grupo verifica"]} at={3600} />
        <Box x={250} y={196} w={530} h={38} tone="warn" lines={["entrar e sair são eventos — visíveis só para o grupo"]} at={5800} />
      </svg>
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* 5 — Aprovar um membro                                              */
/* ------------------------------------------------------------------ */

const passosAprovacao: SceneStep[] = [
  { at: 0, label: "A pessoa pede entrada. O pedido é assinado.", note: "O pedido carrega a conta que pediu, não um nome. O grupo decide olhando o histórico dela." },
  { at: 1800, label: "Membros aprovam, conforme a regra do grupo.", note: "A regra é do grupo: pode ser um moderador, três membros, ou todos." },
  { at: 3800, label: "A entrada vira um evento, visível para quem já é membro.", note: "Grupo sem registro de entrada é grupo sem confiança — mas o registro não sai do grupo." },
  { at: 6000, label: "A chave do grupo é trocada. Quem não é membro não lê o que vem depois.", note: "Quem ficou de fora não abre o que foi dito depois da troca. O passado, esse, ninguém tira de quem já leu." },
];

function CenaAprovacao() {
  return (
    <Scene duration={7200} steps={passosAprovacao}>
      <svg viewBox="0 0 860 250" role="img" aria-label="Uma pessoa pede entrada, os membros votam e a entrada é registrada.">
        <Marker id="m-aprova" />
        <CircleNode cx={90} cy={120} r={36} label="Ana" at={0} />
        <Arrow d="M130 120 H 230" marker="m-aprova" at={0} />
        <Box x={240} y={92} w={170} h={56} lines={["pedido de entrada", "assinado"]} at={0} />
        <Box x={470} y={92} w={170} h={56} tone="brand" lines={["3 membros", "aprovaram"]} at={1800} />
        <Box x={240} y={170} w={560} h={58} tone="accent" lines={["“Ana entrou no grupo”", "evento assinado, visível para todos os membros"]} at={3800} />
        <Label x={520} y={246} at={6000}>a chave do grupo muda neste instante</Label>
      </svg>
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* 6 — Enviar uma mensagem                                            */
/* ------------------------------------------------------------------ */

const passosMensagem: SceneStep[] = [
  { at: 0, label: "Você escreve.", note: "O texto existe legível só no seu aparelho, e só até ser trancado." },
  { at: 1600, label: "O texto é trancado com a chave do destinatário.", note: "A chave que abre está no aparelho de quem recebe. Não existe cópia dela no servidor." },
  { at: 3200, label: "O provedor guarda o embrulho até a entrega.", note: "Ele sabe que existe um pacote para alguém — não sabe o que está escrito." },
  { at: 4800, label: "Só o destinatário destranca.", note: "Nem o provedor, nem a rede, nem quem desenvolveu o aplicativo conseguem abrir." },
  { at: 6400, label: "Em nenhum ponto o texto existiu legível fora dos dois aparelhos.", note: "É por isso que vazar uma mensagem exige alguém que já a leu, não um servidor comprometido." },
];

function CenaMensagem() {
  return (
    <Scene duration={7800} steps={passosMensagem}>
      <svg viewBox="0 0 860 230" role="img" aria-label="A mensagem é trancada no aparelho, guardada pelo provedor como embrulho fechado e aberta pelo destinatário.">
        <Marker id="m-msg" />
        <Box x={40} y={70} w={150} h={90} tone="brand" lines={["você", "escreve"]} at={0} />
        <Box x={250} y={70} w={220} h={90} tone="accent" mono lines={["embrulho fechado", "a7f3 9c21 …"]} at={1600} />
        <Box x={530} y={70} w={150} h={90} lines={["provedor", "guarda"]} at={3200} />
        <Box x={700} y={70} w={130} h={90} tone="brand" lines={["destino", "abre"]} at={4800} />
        <Arrow d="M190 115 H 246" marker="m-msg" at={6400} />
        <Arrow d="M470 115 H 526" marker="m-msg" at={6400} />
        <Arrow d="M680 115 H 696" marker="m-msg" at={6400} />
        <Label x={430} y={196} at={6400}>o provedor nunca vê o texto</Label>
      </svg>
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* 7 — Provedores de conteúdo                                         */
/* ------------------------------------------------------------------ */

const passosProvedor: SceneStep[] = [
  { at: 0, label: "Sua conta tem arquivos distribuídos entre provedores que você escolheu.", note: "A escolha é sua, e pode mudar: trocar de provedor é copiar os blocos e avisar os outros." },
  { at: 1400, label: "Cada um guarda uma parte — e nenhum precisa conhecer o conjunto.", note: "Nenhum provedor vê o arquivo inteiro, do mesmo jeito que nenhum carteiro lê a carta." },
  { at: 3000, label: "Cada bloco é replicado em mais de um provedor.", note: "Duas cópias no mínimo. Se uma máquina queima, a outra responde." },
  { at: 4600, label: "Cada provedor devolve um recibo com o que guarda.", note: "A soma dos recibos tem que bater com o total. Provedor que infla o uso é pego pela conta." },
  { at: 6200, label: "Quem abre o conteúdo também guarda uma cópia temporária.", note: "Enquanto você assiste, seu aparelho repassa pedaços. Fecha a aba, para de repassar." },
  { at: 8200, label: "O navegador faz isso dentro de limites rígidos: disco, envio e bateria.", note: "1 GB de disco e 1 GB de envio por dia, com pausa na bateria e na rede móvel." },
  { at: 9600, label: "Como há cópias, um provedor pode cair sem derrubar o conteúdo.", note: "Nenhum provedor é obrigatório. É isso que impede a rede de virar refém de uma empresa." },
];

function CenaProvedor() {
  return (
    <Scene duration={10800} steps={passosProvedor}>
      <svg viewBox="0 0 880 390" role="img" aria-label="A conta distribui blocos replicados entre provedores; quem lê também guarda uma cópia temporária.">
        <Marker id="m-prov" />
        <Box x={20} y={130} w={150} h={80} tone="brand" lines={["sua conta", "3,4 GB"]} at={0} />
        <Box x={240} y={30} w={170} h={64} lines={["Provedor A", "1,2 GB"]} mono at={1400} />
        <Box x={240} y={130} w={170} h={64} lines={["Provedor B", "1,9 GB"]} mono at={1400} />
        <Box x={240} y={230} w={170} h={64} lines={["Provedor C", "0,3 GB"]} mono at={1400} />
        <g data-at={3000}>
          <rect x={240} y={30} width={170} height={64} rx={12} fill="none" stroke="var(--upr-accent)" strokeWidth={2} strokeDasharray="6 5" />
          <rect x={240} y={130} width={170} height={64} rx={12} fill="none" stroke="var(--upr-accent)" strokeWidth={2} strokeDasharray="6 5" />
          <rect x={240} y={230} width={170} height={64} rx={12} fill="none" stroke="var(--upr-accent)" strokeWidth={2} strokeDasharray="6 5" />
          <text x={325} y={18} textAnchor="middle" className="lbl-sm">≈ 2 cópias de cada bloco</text>
        </g>
        <Box x={520} y={30} w={330} h={80} tone="accent" lines={["recibo de uso", "lista de arquivos → soma", "conferível por qualquer um"]} at={4600} />
        <Box x={240} y={330} w={610} h={50} tone="warn" lines={["quem está lendo também é provedor", "guarda uma cópia temporária e repassa enquanto assiste"]} at={6200} />
        <Box x={520} y={140} w={330} h={70} lines={["o navegador respeita tetos", "de disco, de envio e de bateria"]} at={8200} />
        <Label x={685} y={248} at={9600}>se um provedor cair,</Label>
        <Label x={685} y={266} at={9600}>as cópias dos outros respondem</Label>
        <Arrow d="M170 155 L 236 62" marker="m-prov" at={5400} />
        <Arrow d="M170 170 H 236" marker="m-prov" at={5400} />
        <Arrow d="M170 185 L 236 262" marker="m-prov" at={5400} />
        <Arrow d="M325 294 V 326" tone="accent" marker="m-prov" at={7000} />
      </svg>
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* 8 — Momentos                                                       */
/* ------------------------------------------------------------------ */

const passosMomentos: SceneStep[] = [
  { at: 0, label: "Você publica um momento, com um prazo escrito junto.", note: "O prazo é público desde o começo: não é uma promessa feita depois." },
  { at: 1600, label: "Ele fica no ar por 24 horas, para quem te segue.", note: "Quem vê é quem te segue, ou a lista que você escolher — não a rede inteira." },
  { at: 3400, label: "Passado o prazo, ninguém busca mais. O provedor apaga quando voltar a se conectar.", note: "Não há recibo: o momento não é apagado na hora, ele deixa de ser procurado." },
  { at: 5200, label: "O que sobra é o registro assinado: existiu, e tinha prazo de um dia.", note: "O registro não guarda o conteúdo — guarda que aquilo existiu e por quanto tempo." },
  { at: 7000, label: "E o prazo não promete que ninguém salvou: print e gravação de tela seguem possíveis.", note: "Nenhuma rede consegue impedir isso, e prometer seria mentira." },
];

function CenaMomentos() {
  return (
    <Scene duration={8200} steps={passosMomentos}>
      <svg viewBox="0 0 880 260" role="img" aria-label="O momento é publicado, fica 24 horas no ar, os provedores apagam o arquivo e resta o registro assinado.">
        <Marker id="m-mom" />
        <Box x={40} y={80} w={170} h={100} tone="brand" lines={["momento", "publicado"]} at={0} />
        <Box x={250} y={80} w={170} h={100} lines={["24 horas", "no ar"]} at={1600} />
        <Box x={460} y={80} w={170} h={100} tone="warn" lines={["apagam", "cada provedor"]} at={3400} />
        <Box x={670} y={80} w={170} h={100} tone="accent" lines={["registro", "assinado", "fica"]} at={5200} />
        <Box x={180} y={206} w={520} h={34} lines={["depois do prazo ninguém busca — e o provedor apaga quando volta"]} at={7000} />
        <Arrow d="M210 130 H 246" marker="m-mom" at={4400} />
        <Arrow d="M420 130 H 456" marker="m-mom" at={4400} />
        <Arrow d="M630 130 H 666" tone="warn" marker="m-mom" at={6200} />
      </svg>
    </Scene>
  );
}

/* ------------------------------------------------------------------ */


/* ------------------------------------------------------------------ */
/* 9 — Antes de publicar: a nota                                      */
/* ------------------------------------------------------------------ */

const passosNota: SceneStep[] = [
  { at: 0, label: "Antes de publicar, o aplicativo pergunta o que a postagem tem.", note: "Não pergunta a idade. Pergunta sobre o conteúdo: tem violência? tem droga? tem nudez?" },
  { at: 1600, label: "Quem publica marca o que existe — e só o que existe.", note: "É uma lista fechada de descritores. Marcar não é confissão: é a informação que calcula a nota." },
  { at: 3200, label: "A nota sai do descritor mais alto marcado.", note: "Sem descritor, a postagem é livre. Com um ou mais, vale o mais alto. Ninguém digita a idade à mão." },
  { at: 4800, label: "A nota vai junto do conteúdo, com os descritores.", note: "Quem lê vê a idade. Quem quiser saber por que vê a lista. O motivo não fica escondido." },
  { at: 6400, label: "Quem tem conta restrita não recebe o que passa do teto.", note: "O autor marcou o conteúdo; quem decide o que aparece é a faixa de quem lê." },
];

function CenaNota() {
  return (
    <Scene duration={8000} steps={passosNota}>
      <svg viewBox="0 0 860 260" role="img" aria-label="O autor marca descritores, o aplicativo calcula a nota e o leitor vê o selo.">
        <Marker id="m-nota" />
        <Box x={20} y={30} w={200} h={150} tone="brand" lines={["o que tem aqui?", "□ violência", "□ drogas", "☑ linguagem imprópria", "☑ violência doméstica"]} at={0} />
        <Box x={300} y={50} w={190} h={110} tone="accent" lines={["maior descritor", "violência doméstica", "→ 14"]} at={3200} />
        <Box x={570} y={40} w={200} h={64} lines={["a postagem", "com a nota dentro"]} at={4800} />
        <Box x={570} y={140} w={200} h={64} tone="warn" lines={["conta restrita", "não recebe acima do teto"]} at={6400} />
        <Arrow d="M224 105 H 296" marker="m-nota" at={1600} />
        <Arrow d="M494 105 H 566" tone="accent" marker="m-nota" at={4000} />
        <Label x={672} y={228} at={6400}>quem tem 12 não vê</Label>
      </svg>
    </Scene>
  );
}

const descritores: Array<[string, string[]]> = [
  ["10", ["Violência Fantasiosa", "Medo", "Linguagem Imprópria"]],
  ["12", ["Atos Criminosos", "Drogas", "Drogas Lícitas", "Procedimentos Médicos", "Temas Sensíveis", "Violência"]],
  ["14", ["Apostas ou Jogos de Azar", "Drogas Ilícitas", "Estigma ou Preconceito", "Nudez", "Violência Contra Vulnerável", "Violência Doméstica"]],
  ["16", ["Autoagressão ou Suicídio", "Conteúdo Sexual", "Transtornos Estéticos", "Violência Extrema"]],
  ["18", ["Sexo Explícito", "Violência Sexual"]],
];

function TabelaDescritores() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {descritores.map(([nota, itens]) => (
        <div key={nota} className="rounded-2xl border border-line bg-surface p-4">
          <p className="mb-2 flex items-center gap-2">
            <SeloClassificacao rating={Number(nota) as 10 | 12 | 14 | 16 | 18} />
            <span className="text-[0.72rem] font-extrabold tracking-[0.1em] text-text-faint uppercase">
              a partir de {nota} anos
            </span>
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {itens.map((item) => (
              <li key={item} className="rounded-md bg-surface-2 px-2 py-0.5 text-[0.78rem] text-text-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Noticia() {
  return (
    <div className="mt-8 rounded-2xl border border-line bg-surface p-5">
      <h3 className="font-bold">Notícia também pede lugar e assunto</h3>
      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-text-soft">
        Toda postagem de notícia carrega uma <strong className="text-text">região</strong> e um
        conjunto de <strong className="text-text">assuntos</strong>. Assim a pessoa vê o que
        interessa a ela — o bairro, a cidade, o país, o mundo — sem que a rede deduza de onde ela
        está ou o que ela gosta.
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["mundo inteiro", "país", "estado", "cidade", "bairro"].map((r) => (
          <span key={r} className="rounded-md bg-brand-soft px-2 py-0.5 text-[0.78rem] font-semibold text-brand">
            {r}
          </span>
        ))}
      </div>
      <p className="mt-3 text-[0.85rem] text-text-faint">
        A região é escolhida por quem publica, nunca detectada por IP, GPS ou fuso. Bairro é
        opcional e grosseiro: bairro identificado é dado de localização.
      </p>
    </div>
  );
}

export function PorDentro() {
  return (
    <>
      <Section>
        <Kicker>Bastidores</Kicker>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Por dentro</h1>
        <Lead>
          Oito animações curtas. Cada uma responde a uma pergunta que a tela do aplicativo não
          mostra.
        </Lead>
      </Section>

      <Section tight>
        <div className="space-y-10">
          {[
            ["Elemento 1", "Publicar uma postagem", "Você escreve, assina e vira um bloco que ninguém consegue alterar.", <CenaPost key="1" />],
            ["Elemento 2", "Alerta de conta confiável", "Por que um aviso marcado por uma conta em que você confia aparece antes de todos.", <CenaConfianca key="2" />],
            ["Elemento 3", "Comentários sem identificação", "Quem publicou escolheu não mostrar quem comenta.", <CenaComentarios key="3" />],
            ["Elemento 4", "Criar um grupo", "Um grupo não é uma lista de pessoas: é uma conta nova, com chave própria.", <CenaGrupo key="4" />],
            ["Elemento 5", "Aprovar um membro", "Pedido, votação e entrada — cada etapa assinada.", <CenaAprovacao key="5" />],
            ["Elemento 6", "Enviar uma mensagem", "O caminho entre o seu aparelho e o do destinatário.", <CenaMensagem key="6" />],
            ["Elemento 7", "Provedores de conteúdo", "Não existe “o servidor da rede”. Existem cópias — e quem lê também guarda uma.", <CenaProvedor key="7" />],
            ["Elemento 8", "Momentos", "Uma postagem com prazo: depois de 24 horas, ninguém busca mais.", <CenaMomentos key="8" />],
            ["Elemento 9", "Antes de publicar: a nota", "A classificação indicativa não é digitada: sai do que a postagem contém.", <CenaNota key="9" />],
          ].map(([kicker, titulo, lead, cena]) => (
            <section key={String(titulo)}>
              <p className="mb-2 flex items-center gap-2 text-[0.72rem] font-extrabold tracking-[0.14em] text-brand uppercase">
                <span className="h-px w-4 bg-brand/60" aria-hidden="true" />
                {kicker}
              </p>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">{titulo}</h2>
              <p className="mt-2 mb-5 max-w-3xl text-lg leading-relaxed text-text-soft">{lead}</p>
              {cena}
            </section>
          ))}
        </div>

        <TabelaDescritores />
        <Noticia />
      </Section>
    </>
  );
}
