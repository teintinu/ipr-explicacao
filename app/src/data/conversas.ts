/** Conversas de demonstração. Nada aqui é real: são personas inventadas. */
import { conversasGeradas, pedidosGerados } from "./conversas-geradas";
export interface Mensagem {
  de: string;
  texto: string;
  hora: string;
}

export interface Conversa {
  id: string;
  /** Vazio em conversa direta: o título é o nome de quem não é você. */
  grupo?: string;
  participantes: string[];
  mensagens: Mensagem[];
  naoLidas?: number;
}

export const conversas: Conversa[] = [
  {
    id: "c1",
    grupo: "Cozinha da Beatriz",
    participantes: ["beatriz-helena", "fernanda-luisa", "ana-maria", "natalia-cristina"],
    naoLidas: 2,
    mensagens: [
      { de: "beatriz-helena", texto: "Deixei o pão de gengibre na janela. Se ninguém pegar até as duas, é meu.", hora: "08:12" },
      { de: "fernanda-luisa", texto: "Pego. Passo aí depois da consulta.", hora: "08:20" },
      { de: "natalia-cristina", texto: "Alguém tem gengibre em pó? O mercado da esquina acabou.", hora: "08:41" },
      { de: "beatriz-helena", texto: "Tenho. Deixo um potinho com seu nome.", hora: "08:43" },
      { de: "ana-maria", texto: "Vou passar aí no fim da tarde. Guarda um pedaço pra mim?", hora: "09:02" },
    ],
  },
  {
    id: "c2",
    grupo: "Fotos da madrugada",
    participantes: ["luisa-fernanda", "thiago-andre", "helena-cristina"],
    naoLidas: 1,
    mensagens: [
      { de: "luisa-fernanda", texto: "Subi às cinco. A neblina estava baixa, quase no chão.", hora: "06:10" },
      { de: "thiago-andre", texto: "Conseguiu o quadro com as duas pessoas na trilha?", hora: "06:35" },
      { de: "luisa-fernanda", texto: "Consegui. Eles atravessaram sem pressa. Deu medo e ficou bonito.", hora: "06:37" },
      { de: "helena-cristina", texto: "Manda quando revelar. Quero ver o contraste do barro com a cerâmica.", hora: "07:02" },
    ],
  },
  {
    id: "c3",
    grupo: "Checagem: vacina e boato",
    participantes: ["maria-clara", "thiago-andre", "carlos-eduardo", "yara-beatriz"],
    naoLidas: 3,
    mensagens: [
      { de: "maria-clara", texto: "O áudio que circula no grupo do bairro tem três erros. Vou marcar como alerta no comentário.", hora: "10:02" },
      { de: "thiago-andre", texto: "Consegui o documento original do ministério. É de março.", hora: "10:14" },
      { de: "carlos-eduardo", texto: "Se for de março, já foi substituído. Explica isso na correção.", hora: "10:19" },
      { de: "yara-beatriz", texto: "Posso citar no grupo do condomínio? Metade das pessoas acreditou.", hora: "10:26" },
    ],
  },
  {
    id: "c4",
    participantes: ["joao-pedro", "gustavo-henrique"],
    naoLidas: 1,
    mensagens: [
      { de: "joao-pedro", texto: "O show de sábado mudou de lugar. É no galpão, não no bar.", hora: "11:05" },
      { de: "gustavo-henrique", texto: "Valeu. Ainda dá tempo de montar a mesa de som?", hora: "11:09" },
      { de: "joao-pedro", texto: "Dá. Chego às quatro com os cabos.", hora: "11:11" },
    ],
  },
  {
    id: "c5",
    participantes: ["ana-beatriz", "rafael-augusto"],
    naoLidas: 2,
    mensagens: [
      { de: "ana-beatriz", texto: "Pai, posso ir de bicicleta até a casa da Júlia?", hora: "12:30" },
      { de: "rafael-augusto", texto: "Só pelo caminho da praça, não pela avenida.", hora: "12:41" },
      { de: "ana-beatriz", texto: "Tá bom. Volto antes das seis.", hora: "12:42" },
    ],
  },
  {
    id: "c6",
    grupo: "Banda do Bairro",
    participantes: ["banda-do-bairro", "joao-pedro", "sabrina-luiza", "marcelo-antonio"],
    mensagens: [
      { de: "banda-do-bairro", texto: "Ensaio quinta às sete, no galpão. Levar extensão.", hora: "09:00" },
      { de: "sabrina-luiza", texto: "Levo o violão e a caixa.", hora: "09:12" },
      { de: "marcelo-antonio", texto: "Se precisarem de alguém pra carregar, eu vou de carro.", hora: "09:30" },
    ],
  },
  {
    id: "c7",
    participantes: ["helena-cristina", "larissa-naomi"],
    mensagens: [
      { de: "larissa-naomi", texto: "Vi suas peças na feira. A tigela de barro ficou linda.", hora: "14:02" },
      { de: "helena-cristina", texto: "Obrigada! Levei três meses pra acertar o esmalte.", hora: "14:10" },
      { de: "larissa-naomi", texto: "Quero uma pro ateliê. Quanto fica?", hora: "14:11" },
    ],
  },
  {
    id: "c8",
    grupo: "Trilha Norte",
    participantes: ["trilha-norte", "otavio-luis", "kaique-vinicius", "patricia-elaine"],
    naoLidas: 1,
    mensagens: [
      { de: "trilha-norte", texto: "Sábado, saída às seis, trilha do morro. Doze quilômetros.", hora: "07:00" },
      { de: "otavio-luis", texto: "Vou. Levo água pra dois, se alguém esquecer.", hora: "07:22" },
      { de: "kaique-vinicius", texto: "Se eu sair da entrega a tempo, encontro vocês no início.", hora: "07:40" },
      { de: "patricia-elaine", texto: "Só chego depois do plantão. Vou no próximo.", hora: "08:05" },
    ],
  },
  {
    id: "c9",
    participantes: ["vanessa-kelly", "wagner-luis"],
    mensagens: [
      { de: "wagner-luis", texto: "As fotos do desfile ficaram prontas. Separei as suas.", hora: "15:20" },
      { de: "vanessa-kelly", texto: "Manda as três do vestido verde.", hora: "15:31" },
      { de: "wagner-luis", texto: "Enviado. Tem uma de costas que ficou melhor que a da frente.", hora: "15:33" },
    ],
  },
  {
    id: "c10",
    grupo: "Cine Clube Aurora",
    participantes: ["cine-clube-aurora", "fernanda-luisa", "marcelo-antonio", "juliana-rosa"],
    mensagens: [
      { de: "cine-clube-aurora", texto: "Sexta: documentário às 19h, debate às 21h.", hora: "13:00" },
      { de: "juliana-rosa", texto: "Levo bolo. Sobrou da festa de ontem.", hora: "13:15" },
    ],
  },
  {
    id: "c11",
    participantes: ["davi-luiz", "ana-beatriz"],
    naoLidas: 1,
    mensagens: [
      { de: "ana-beatriz", texto: "Davi, a mãe falou que você pode ficar aqui até as cinco.", hora: "13:40" },
      { de: "davi-luiz", texto: "Posso levar o jogo? É de tabuleiro.", hora: "13:44" },
      { de: "ana-beatriz", texto: "Pode. Só não espalha peça pela sala de novo.", hora: "13:45" },
    ],
  },
  {
    id: "c12",
    participantes: ["antonio-jose", "rodrigo-jose", "igor-matheus"],
    mensagens: [
      { de: "rodrigo-jose", texto: "Seu Antônio, o freio do carro está na oficina. Passo aí amanhã.", hora: "16:02" },
      { de: "antonio-jose", texto: "Sem pressa. Enquanto isso eu vou de ônibus, como fiz a vida toda.", hora: "16:15" },
      { de: "igor-matheus", texto: "Se precisar, te levo. Passo na sua rua às sete.", hora: "16:20" },
    ],
  },
  {
    id: "c13",
    participantes: ["ana-maria", "luisa-fernanda"],
    naoLidas: 1,
    mensagens: [
      { de: "luisa-fernanda", texto: "As fotos da neblina ficaram prontas. Tem uma sua no meio das árvores.", hora: "17:02" },
      { de: "ana-maria", texto: "Eu apareço? Achei que tinha saído antes do sol.", hora: "17:10" },
      { de: "luisa-fernanda", texto: "Aparece de costas, pequena. É a melhor da série.", hora: "17:12" },
    ],
  },
  {
    id: "c14",
    participantes: ["ana-maria", "maria-clara"],
    mensagens: [
      { de: "maria-clara", texto: "O boato do grupo do bairro é falso. Vou marcar como alerta no comentário da postagem.", hora: "18:20" },
      { de: "ana-maria", texto: "Marca mesmo. Metade da rua acreditou.", hora: "18:26" },
    ],
  },
  {
    id: "c15",
    grupo: "Ensaio de quinta",
    participantes: ["ana-maria", "joao-pedro", "gustavo-henrique"],
    mensagens: [
      { de: "joao-pedro", texto: "Quinta às sete, no galpão. Alguém leva café?", hora: "19:00" },
      { de: "gustavo-henrique", texto: "Eu levo. E a extensão.", hora: "19:04" },
      { de: "ana-maria", texto: "Chego às sete e meia, saio do trabalho antes.", hora: "19:11" },
    ],
  },
];

// As conversas geradas completam a lista: cada pessoa tem pelo menos 20.
conversas.push(...conversasGeradas);

export function conversasDe(id: string): Conversa[] {
  const minhas = conversas.filter((c) => c.participantes.includes(id));
  // Um destinatário (ou grupo) aparece uma vez só. A junção cria uma conversa
  // nova: nunca escrever no array de origem, senão a cada render as mensagens
  // se multiplicam.
  const porChave = new Map<string, Conversa>();
  for (const c of minhas) {
    const chave = c.grupo ?? c.participantes.filter((p) => p !== id).sort().join("|");
    const existente = porChave.get(chave);
    porChave.set(
      chave,
      existente
        ? { ...existente, mensagens: [...existente.mensagens, ...c.mensagens] }
        : { ...c, mensagens: [...c.mensagens] },
    );
  }
  return [...porChave.values()];
}

export interface Pedido {
  id: string;
  de: string;
  para: string;
  texto: string;
  /** O que quem pediu quer: postagens, conversas, ou os dois. */
  quer: Array<"mural" | "conversas">;
}

export const pedidos: Pedido[] = pedidosGerados as Pedido[];

export function pedidosDe(id: string): Pedido[] {
  return pedidos.filter((p) => p.para === id);
}
