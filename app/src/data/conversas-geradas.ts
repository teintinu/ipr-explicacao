import type { Conversa } from "./conversas";

/**
 * Conversas geradas a partir de afinidades.
 *
 * Cada pessoa tem um ou dois assuntos; conversa com quem compartilha o assunto,
 * sobre cenas daquele assunto. Nada de frase solta: cada cena tem começo, meio
 * e resposta, e o par conversa sobre o que ambos fazem.
 */

const temas: Record<string, string[]> = {
  "ana-maria": ["familia", "bairro"],
  "joao-pedro": ["musica"],
  "maria-clara": ["ciencia"],
  "antonio-jose": ["bairro"],
  "ana-beatriz": ["familia"],
  "luisa-fernanda": ["foto"],
  "rafael-augusto": ["trilha", "bairro"],
  "davi-luiz": ["familia"],
  "beatriz-helena": ["cozinha"],
  "carlos-eduardo": ["ciencia"],
  "fernanda-luisa": ["cozinha"],
  "gustavo-henrique": ["musica"],
  "helena-cristina": ["foto", "cozinha"],
  "igor-matheus": ["ciencia"],
  "juliana-rosa": ["cozinha"],
  "kaique-vinicius": ["trilha"],
  "larissa-naomi": ["foto"],
  "marcelo-antonio": ["bairro", "trilha"],
  "natalia-cristina": ["cozinha"],
  "otavio-luis": ["trilha"],
  "patricia-elaine": ["trilha", "ciencia"],
  "rodrigo-jose": ["bairro"],
  "sabrina-luiza": ["musica"],
  "thiago-andre": ["foto", "bairro"],
  "vanessa-kelly": ["bairro", "foto"],
  "wagner-luis": ["foto"],
  "yara-beatriz": ["ciencia", "bairro"],
};

const cenas: Record<string, string[][]> = {
  cozinha: [
    ["Sobrou massa de ontem. Levo aí?", "Leva. Eu faço o molho.", "Fechado, chego às seis."],
    ["O forno daqui não segura temperatura.", "Assa em duas fornadas então.", "Boa, nem tinha pensado."],
    ["Testei a receita sem açúcar.", "E ficou com gosto de quê?", "De limão. Melhor do que eu esperava."],
    ["Preciso de gengibre e não tem no mercado.", "Tenho aqui, te deixo um potinho.", "Salvou o almoço."],
    ["A feira mudou de dia.", "Agora é quinta?", "Quinta e sábado, pela manhã."],
  ],
  foto: [
    ["A luz de hoje estava absurda.", "Conseguiu o quadro das pessoas na trilha?", "Consegui, e ficou melhor do que eu queria."],
    ["Revelei as fotos do fim de semana.", "Manda as três do fim da tarde.", "Já mandei, confere se abriu."],
    ["O cartão corrompeu metade dos arquivos.", "Consegue recuperar com o programa antigo?", "Tentei, salvou umas nove."],
    ["Vou subir no morro antes do sol.", "Sozinho?", "Com o rapaz da trilha. Volto ao meio-dia."],
    ["A exposição abre na sexta.", "Você vai expor o quê?", "Três da série da neblina."],
  ],
  musica: [
    ["Ensaio quinta às sete, no galpão.", "Levo a extensão?", "Leva, a daqui está ruim."],
    ["Achei um baixo emprestado.", "Dá pra usar no show?", "Dá, mas precisa de corda nova."],
    ["Mudou o horário do som?", "Passou para as oito.", "Então chego oito e meia."],
    ["O show de sábado foi cancelado.", "Cancelaram por quê?", "Chuva. Remarcaram para o dia 20."],
    ["Gravei a base do violão.", "Manda pra eu ouvir.", "Mandando agora, sem metrônomo."],
  ],
  trilha: [
    ["Sábado, saída às seis, trilha do morro.", "Doze quilômetros é bastante.", "Dá, mas voltamos antes do almoço."],
    ["O atalho está fechado.", "Fechado por quê?", "Queda de árvore. Vamos pela estrada."],
    ["Leva água pra dois?", "Levo. E um casaco, esfria lá em cima."],
    ["Encontrei uma trilha nova.", "Dá pra ir de tênis?", "Dá, é curta. Duas horas."],
    ["Meu joelho reclamou na descida.", "Faz o alongamento antes.", "Vou fazer, obrigado pelo lembrete."],
  ],
  ciencia: [
    ["O áudio que circula no grupo tem três erros.", "Consegui o documento original.", "Então já dá pra corrigir com fonte."],
    ["Aquele dado de março foi substituído.", "Substituído por quê?", "Por uma revisão do próprio órgão."],
    ["Você leu o artigo do mês passado?", "Li. A amostra é pequena.", "Pequena, mas o método é honesto."],
    ["Como você checa imagem de print?", "Procuro a fonte primária antes de qualquer coisa.", "É o que eu faço, mas quase ninguém faz."],
    ["O gráfico está errado no eixo.", "Errado como?", "A escala começa em zero e ninguém percebeu."],
  ],
  bairro: [
    ["A rua vai fechar para obra amanhã.", "Fechada o dia todo?", "Das sete às cinco. Desvio pela praça."],
    ["O mercado da esquina trocou de dono.", "Mudou alguma coisa?", "Mudou o preço do pão. Subiu."],
    ["A reunião do bairro é hoje.", "Que horas?", "Sete, na escola. Vou passar aí antes."],
    ["Apareceu uma placa nova na praça.", "Placa de quê?", "Obra. Mas ninguém sabe de quê."],
    ["O ônibus das seis atrasou de novo.", "Atrasou quanto?", "Vinte minutos. Perdi o compromisso."],
  ],
  familia: [
    ["Você chega para o almoço?", "Chego, mas me atraso um pouco.", "Sem problema, a gente espera."],
    ["Precisa de ajuda com o celular novo?", "Preciso. Não acho o botão de desligar.", "É o mesmo lugar de sempre."],
    ["Amanhã eu levo você à escola.", "Pode ser mais cedo?", "Pode, saímos sete e meia."],
    ["Comprou o presente da festa?", "Ainda não. Passo no centro hoje.", "Se achar o livro, leva dois."],
    ["O bolo ficou pronto.", "Já cortou?", "Não, esperei você chegar."],
  ],
};

const horas = ["07:40", "08:12", "09:05", "10:20", "11:47", "12:31", "13:14", "14:02",
  "15:26", "16:08", "17:19", "18:03", "19:22", "20:11", "21:05", "22:18"];

/** Grupos de afinidade, para pedidos de contato mostrarem o que há em comum. */
export const gruposPorTema: Record<string, { id: string; nome: string }> = {
  cozinha: { id: "g-cozinha", nome: "Cozinha do bairro" },
  foto: { id: "g-foto", nome: "Foto de rua" },
  musica: { id: "g-musica", nome: "Ensaio de quinta" },
  trilha: { id: "g-trilha", nome: "Trilha Norte" },
  ciencia: { id: "g-ciencia", nome: "Checagem de fato" },
  bairro: { id: "g-bairro", nome: "Moradores da rua" },
  familia: { id: "g-familia", nome: "Assuntos de casa" },
};


/** Cenas para quem não compartilha assunto: contato de bairro, favor, agenda. */
const cenasGerais: string[][] = [
  ["Oi! Falo com quem publicou sobre a feira?", "Fala comigo sim.", "Boa, queria saber o horário."],
  ["Você ainda tem o contato do eletricista?", "Tenho, mando agora.", "Obrigado, salvou o dia."],
  ["Passa aí na praça hoje?", "Passo às cinco.", "Então te vejo lá."],
  ["Conseguiu resolver o problema da rua?", "Consegui, era o cano mesmo.", "Que bom, estava atrapalhando todo mundo."],
  ["Você vai à reunião do bairro?", "Vou, mesmo horário de sempre.", "Guarda um lugar pra mim."],
  ["Vi sua mensagem no grupo e resolvi chamar.", "Ainda bem, eu ia te chamar também.", "Então combinado."],
  ["Precisa de ajuda com a mudança?", "Preciso, sábado de manhã.", "Chego às oito."],
  ["A encomenda chegou na portaria errada.", "Já vou buscar, obrigado por avisar.", "Sem problema."],
  ["Você sabe se a loja abre amanhã?", "Abre, mas só à tarde.", "Valeu."],
  ["Me indica alguém para pintar a sala?", "Indico o vizinho da esquina.", "Manda o contato."],
];

function gerarConversas(): Conversa[] {
  const pessoas = Object.keys(temas);
  const saida: Conversa[] = [];
  let hora = 0;
  let gc = 0;

  // Uma conversa por par de pessoas: cada destinatário aparece uma vez só.
  for (let i = 0; i < pessoas.length; i++) {
    for (let j = i + 1; j < pessoas.length; j++) {
      const a = pessoas[i];
      const b = pessoas[j];
      const compartilhado = (temas[a] ?? []).find((t) => (temas[b] ?? []).includes(t));
      const cena = compartilhado
        ? cenas[compartilhado][(i + j) % cenas[compartilhado].length]
        : cenasGerais[gc++ % cenasGerais.length];

      saida.push({
        id: `g-${a}-${b}`,
        participantes: [a, b],
        mensagens: cena.map((texto, k) => ({
          de: k % 2 === 0 ? a : b,
          texto,
          hora: horas[hora++ % horas.length],
        })),
      });
    }
  }

  return saida;
}

function gerarGrupos(): Conversa[] {
  const grupos: Array<{
    id: string;
    nome: string;
    membros: string[];
    falas: Array<[string, string]>;
  }> = [
    {
      id: "g-escola",
      nome: "Escola do bairro · turma e famílias",
      membros: ["davi-luiz", "ana-beatriz", "rafael-augusto", "juliana-rosa", "carlos-eduardo"],
      falas: [
        ["carlos-eduardo", "A reunião de pais é quinta, às dezenove."],
        ["juliana-rosa", "Vou levar o Davi, ele tem dúvida na lição."],
        ["rafael-augusto", "A Ana também vai. Chegamos juntos."],
        ["davi-luiz", "Professor, posso entregar o trabalho na sexta?"],
        ["carlos-eduardo", "Pode, mas me avise antes."],
      ],
    },
    {
      id: "g-reforco",
      nome: "Reforço de matemática",
      membros: ["davi-luiz", "ana-beatriz", "carlos-eduardo", "maria-clara"],
      falas: [
        ["maria-clara", "Quem vai no reforço de amanhã?"],
        ["ana-beatriz", "Eu vou. Preciso de ajuda com fração."],
        ["davi-luiz", "Eu também vou, mas levo o caderno errado sempre."],
        ["carlos-eduardo", "Tragam o caderno certo amanhã, por favor."],
      ],
    },
    {
      id: "g-familia",
      nome: "Assuntos de casa",
      membros: ["ana-maria", "rafael-augusto", "juliana-rosa", "ana-beatriz", "davi-luiz"],
      falas: [
        ["ana-maria", "Quem busca as crianças na sexta?"],
        ["rafael-augusto", "Eu busco, saio do trabalho mais cedo."],
        ["juliana-rosa", "Eu levo o Davi de manhã."],
        ["ana-beatriz", "Posso ir sozinha, já sei o caminho."],
        ["rafael-augusto", "Só pelo caminho da praça."],
      ],
    },
    {
      id: "g-futebol",
      nome: "Futebol de sábado",
      membros: ["rodrigo-jose", "marcelo-antonio", "gustavo-henrique", "kaique-vinicius", "antonio-jose"],
      falas: [
        ["rodrigo-jose", "Sábado, oito da manhã, quadra de trás."],
        ["kaique-vinicius", "Se eu sair da entrega a tempo, chego."],
        ["marcelo-antonio", "Levo a bola e a rede."],
        ["antonio-jose", "Eu só assisto, e levo água pra quem corre."],
      ],
    },
    {
      id: "g-vizinhos",
      nome: "Vizinhos da rua de cima",
      membros: ["yara-beatriz", "rodrigo-jose", "rafael-augusto", "thiago-andre", "vanessa-kelly"],
      falas: [
        ["yara-beatriz", "A obra da esquina começa segunda."],
        ["thiago-andre", "Vão fechar a rua toda?"],
        ["rodrigo-jose", "Só um trecho, das sete às cinco."],
        ["vanessa-kelly", "Aviso a loja para entregar de manhã."],
      ],
    },
    {
      id: "g-coral",
      nome: "Coral do bairro",
      membros: ["beatriz-helena", "sabrina-luiza", "natalia-cristina", "marcelo-antonio", "joao-pedro"],
      falas: [
        ["beatriz-helena", "Ensaio hoje às sete, na sala da escola."],
        ["sabrina-luiza", "Levo o violão."],
        ["joao-pedro", "Chego atrasado, saio do trabalho às sete."],
        ["natalia-cristina", "Levo a letra impressa para todo mundo."],
      ],
    },
    {
      id: "g-livro",
      nome: "Clube do livro",
      membros: ["livraria-pagina-viva", "carlos-eduardo", "maria-clara", "juliana-rosa", "larissa-naomi"],
      falas: [
        ["livraria-pagina-viva", "O encontro deste mês é sobre o livro do mês passado."],
        ["maria-clara", "Terminei ontem. O final é melhor que o começo."],
        ["carlos-eduardo", "Discordo, mas vou levar o argumento por escrito."],
        ["larissa-naomi", "Levo o caderno de desenho, para desenhar enquanto ouço."],
      ],
    },
    {
      id: "g-saude",
      nome: "Saúde do bairro",
      membros: ["patricia-elaine", "fernanda-luisa", "juliana-rosa", "maria-clara", "yara-beatriz"],
      falas: [
        ["patricia-elaine", "A campanha de vacinação começa segunda."],
        ["fernanda-luisa", "Aqui na clínica já temos as doses."],
        ["juliana-rosa", "Levo o Davi no primeiro dia."],
        ["maria-clara", "Vou conferir a faixa de idade antes de avisar no grupo maior."],
      ],
    },
    {
      id: "g-trabalho",
      nome: "Escala e plantão",
      membros: ["patricia-elaine", "thiago-andre", "kaique-vinicius", "vanessa-kelly"],
      falas: [
        ["patricia-elaine", "Alguém troca o plantão de sexta?"],
        ["thiago-andre", "Eu troco, mas preciso sair mais cedo na quinta."],
        ["kaique-vinicius", "Minha entrega atrasa na sexta, melhor não contar comigo."],
      ],
    },
    {
      id: "g-foto",
      nome: "Saídas de foto",
      membros: ["luisa-fernanda", "wagner-luis", "larissa-naomi", "thiago-andre", "estudio-farol"],
      falas: [
        ["luisa-fernanda", "Domingo, cinco da manhã, na praça."],
        ["wagner-luis", "Levo a lente longa."],
        ["estudio-farol", "Quem precisar de tripé, passa aqui antes."],
        ["larissa-naomi", "Levo lanterna, a trilha é escura."],
      ],
    },
  ];

  return grupos.map((g, i) => ({
    id: g.id,
    grupo: g.nome,
    participantes: g.membros,
    mensagens: g.falas.map(([de, texto], k) => ({
      de,
      texto,
      hora: horas[(i * 2 + k) % horas.length],
    })),
  }));
}

function gerarPedidos() {
  // Um pedido, no máximo, e só para algumas contas. Vem de organização —
  // as pessoas já se falam por conversa direta, então não pediriam de novo.
  const pedidos: Array<{
    id: string;
    de: string;
    para: string;
    texto: string;
    quer: Array<"mural" | "conversas">;
  }> = [
    {
      id: "p-ana-maria",
      de: "cafe-aurora",
      para: "ana-maria",
      texto: "Oi, Ana! Somos o Café Aurora. Podemos te adicionar para avisar das novidades?",
      quer: ["mural"],
    },
    {
      id: "p-ana-beatriz",
      de: "estudio-farol",
      para: "ana-beatriz",
      texto: "Oi! Vimos seu interesse em fotografia. Podemos conversar?",
      quer: ["conversas"],
    },
    {
      id: "p-davi-luiz",
      de: "livraria-pagina-viva",
      para: "davi-luiz",
      texto: "Olá! Temos um clube de leitura para a sua idade. Podemos falar com você?",
      quer: ["conversas"],
    },
    {
      id: "p-beatriz-helena",
      de: "coletivo-mare",
      para: "beatriz-helena",
      texto: "Oi, Beatriz! Queremos te convidar para a feira de sábado.",
      quer: ["conversas", "mural"],
    },
    {
      id: "p-thiago-andre",
      de: "trilha-norte",
      para: "thiago-andre",
      texto: "Thiago, temos uma saída de foto na trilha. Interessa?",
      quer: ["conversas"],
    },
  ];
  return pedidos;
}

export const conversasGeradas = [...gerarConversas(), ...gerarGrupos()];
export const pedidosGerados = gerarPedidos();

/** Grupos (por tema) de quem também está neles — usado nos pedidos de contato. */
export function gruposDe(id: string): Array<{ id: string; nome: string }> {
  const meus = temas[id] ?? [];
  return meus.map((t) => gruposPorTema[t]).filter(Boolean);
}

export function contatosDe(id: string, todas: Conversa[]): string[] {
  const outros = new Set<string>();
  for (const c of todas) {
    if (!c.participantes.includes(id)) continue;
    for (const p of c.participantes) if (p !== id) outros.add(p);
  }
  return [...outros];
}

export { temas as temasPorPessoa };
