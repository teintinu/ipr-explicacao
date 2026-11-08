/**
 * Personas do site explicativo.
 *
 * Regra de nomenclatura: sempre **nome duplo, sem sobrenome** — Ana Maria,
 * João Pedro, Maria Clara. Assim ninguém parece uma pessoa real e todas ficam
 * no mesmo registro.
 *
 * A verificação é a cor do selo:
 *   verde  → conferida há menos de 1 ano
 *   amarelo → entre 1 e 5 anos
 *   vermelho → acima de 5 anos
 *   none   → conta sem verificação (não aparece selo)
 *
 * `role` não aparece na tela: é o "tom" de cada conta, para quem escreve o
 * conteúdo de exemplo saber de que assunto ela fala.
 */

export type VerificationState = "green" | "yellow" | "red" | "none";

export interface Verification {
  state: VerificationState;
  /** Texto curto do selo, ex.: "verificada há 2 meses". */
  label: string;
}

export type AccountKind = "personal" | "business" | "group";

/** Imagem do avatar: sempre uma foto, de pessoa, grupo ou empresa. */
export interface AvatarSpec {
  readonly kind: "photo";
  readonly src: string;
}

export interface Persona {
  id: string;
  name: string;
  handle: string;
  kind: AccountKind;
  avatar: AvatarSpec;
  verification: Verification;
  /** Uma linha sobre o papel dela nos exemplos. */
  role: string;
}

export const anaMaria: Persona = {
  id: "ana-maria",
  name: "Ana Maria",
  handle: "@anamaria",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/ana-maria.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 2 meses" },
  role: "é você nesta demonstração",
};

export const joaoPedro: Persona = {
  id: "joao-pedro",
  name: "João Pedro",
  handle: "@joaopedro",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/joao-pedro.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 8 meses" },
  role: "música, tecnologia, shows",
};

export const mariaClara: Persona = {
  id: "maria-clara",
  name: "Maria Clara",
  handle: "@mariaclara",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/maria-clara.jpg" },
  verification: { state: "yellow", label: "essa pessoa foi verificada há 2 anos" },
  role: "checagem de fatos e ciência",
};

export const antonioJose: Persona = {
  id: "antonio-jose",
  name: "Antônio José",
  handle: "@antoniojose",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/antonio-jose.jpg" },
  verification: { state: "red", label: "essa pessoa foi verificada há 6 anos" },
  role: "voltou depois de anos; opinião política",
};

export const anaBeatriz: Persona = {
  id: "ana-beatriz",
  name: "Ana Beatriz",
  handle: "@anabeatriz",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/ana-beatriz.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 10 dias" },
  role: "estudante de jornalismo",
};

export const luisaFernanda: Persona = {
  id: "luisa-fernanda",
  name: "Luísa Fernanda",
  handle: "@luisafernanda",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/luisa-fernanda.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 3 meses" },
  role: "fotógrafa de natureza",
};

export const rafaelAugusto: Persona = {
  id: "rafael-augusto",
  name: "Rafael Augusto",
  handle: "@rafaelaugusto",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/rafael-augusto.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 1 ano" },
  role: "ciclista urbano",
};

export const beatrizHelena: Persona = {
  id: "beatriz-helena",
  name: "Beatriz Helena",
  handle: "@beatrizhelena",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/beatriz-helena.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 5 meses" },
  role: "cozinha e cafés",
};

export const carlosEduardo: Persona = {
  id: "carlos-eduardo",
  name: "Carlos Eduardo",
  handle: "@carloseduardo",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/carlos-eduardo.jpg" },
  verification: { state: "yellow", label: "essa pessoa foi verificada há 3 anos" },
  role: "professor de história",
};

export const fernandaLuisa: Persona = {
  id: "fernanda-luisa",
  name: "Fernanda Luísa",
  handle: "@fernandaluisa",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/fernanda-luisa.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 7 meses" },
  role: "veterinária",
};

export const gustavoHenrique: Persona = {
  id: "gustavo-henrique",
  name: "Gustavo Henrique",
  handle: "@gustavohenrique",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/gustavo-henrique.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 2 meses" },
  role: "programador",
};

export const helenaCristina: Persona = {
  id: "helena-cristina",
  name: "Helena Cristina",
  handle: "@helenacristina",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/helena-cristina.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 9 meses" },
  role: "ceramista",
};

export const igorMatheus: Persona = {
  id: "igor-matheus",
  name: "Igor Matheus",
  handle: "@igormatheus",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/igor-matheus.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 4 meses" },
  role: "estudante de física",
};

export const julianaRosa: Persona = {
  id: "juliana-rosa",
  name: "Juliana Rosa",
  handle: "@julianarosa",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/juliana-rosa.jpg" },
  verification: { state: "yellow", label: "essa pessoa foi verificada há 1 ano e 6 meses" },
  role: "rotina de mãe e trabalho",
};

export const kaiqueVinicius: Persona = {
  id: "kaique-vinicius",
  name: "Kaique Vinícius",
  handle: "@kaiquevinicius",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/kaique-vinicius.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 6 meses" },
  role: "entregador, cidade e trânsito",
};

export const larissaNaomi: Persona = {
  id: "larissa-naomi",
  name: "Larissa Naomi",
  handle: "@larissanaomi",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/larissa-naomi.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 2 meses" },
  role: "ilustradora",
};

export const marceloAntonio: Persona = {
  id: "marcelo-antonio",
  name: "Marcelo Antônio",
  handle: "@marceloantonio",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/marcelo-antonio.jpg" },
  verification: { state: "red", label: "essa pessoa foi verificada há 5 anos" },
  role: "aposentado, pesca e mar",
};

export const nataliaCristina: Persona = {
  id: "natalia-cristina",
  name: "Natália Cristina",
  handle: "@nataliacristina",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/natalia-cristina.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 8 meses" },
  role: "dançarina",
};

export const otavioLuis: Persona = {
  id: "otavio-luis",
  name: "Otávio Luís",
  handle: "@otavioluis",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/otavio-luis.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 1 mês" },
  role: "viajante e trilhas",
};

export const patriciaElaine: Persona = {
  id: "patricia-elaine",
  name: "Patrícia Elaine",
  handle: "@patriciaelaine",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/patricia-elaine.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 1 ano" },
  role: "médica",
};

export const rodrigoJose: Persona = {
  id: "rodrigo-jose",
  name: "Rodrigo José",
  handle: "@rodrigojose",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/rodrigo-jose.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 5 meses" },
  role: "mecânico",
};

export const sabrinaLuiza: Persona = {
  id: "sabrina-luiza",
  name: "Sabrina Luiza",
  handle: "@sabrinaluiza",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/sabrina-luiza.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 3 meses" },
  role: "violão e composição",
};

export const thiagoAndre: Persona = {
  id: "thiago-andre",
  name: "Thiago André",
  handle: "@thiagoandre",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/thiago-andre.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 2 meses" },
  role: "jornalista de cidade",
};

export const vanessaKelly: Persona = {
  id: "vanessa-kelly",
  name: "Vanessa Kelly",
  handle: "@vanessakelly",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/vanessa-kelly.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 7 meses" },
  role: "estilista",
};

export const wagnerLuis: Persona = {
  id: "wagner-luis",
  name: "Wagner Luís",
  handle: "@wagnerluis",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/wagner-luis.jpg" },
  verification: { state: "yellow", label: "essa pessoa foi verificada há 4 anos" },
  role: "fotógrafo de rua",
};

export const yaraBeatriz: Persona = {
  id: "yara-beatriz",
  name: "Yara Beatriz",
  handle: "@yarabeatriz",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/yara-beatriz.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 2 meses" },
  role: "arquiteta",
};

export const cafeAurora: Persona = {
  id: "cafe-aurora",
  name: "Café Aurora",
  handle: "@cafeaurora",
  kind: "business",
  avatar: { kind: "photo", src: "/avatars/cafe-aurora.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 4 meses" },
  role: "cafeteria do bairro",
};

export const bandaDoBairro: Persona = {
  id: "banda-do-bairro",
  name: "Banda do Bairro",
  handle: "@bandadobairro",
  kind: "group",
  avatar: { kind: "photo", src: "/avatars/banda-do-bairro.jpg" },
  verification: { state: "green", label: "criada há 1 ano" },
  role: "grupo de ensaio e shows",
};

export const livrariaPaginaViva: Persona = {
  id: "livraria-pagina-viva",
  name: "Livraria Página Viva",
  handle: "@paginaaviva",
  kind: "business",
  avatar: { kind: "photo", src: "/avatars/livraria-pagina-viva.jpg" },
  verification: { state: "green", label: "essa pessoa foi verificada há 2 anos" },
  role: "livraria e clube de leitura",
};

export const coletivoMare: Persona = {
  id: "coletivo-mare",
  name: "Coletivo Maré",
  handle: "@coletivomare",
  kind: "group",
  avatar: { kind: "photo", src: "/avatars/coletivo-mare.jpg" },
  verification: { state: "green", label: "criada há 3 anos" },
  role: "surfe e limpeza de praia",
};

export const trilhaNorte: Persona = {
  id: "trilha-norte",
  name: "Trilha Norte",
  handle: "@trilhanorte",
  kind: "group",
  avatar: { kind: "photo", src: "/avatars/trilha-norte.jpg" },
  verification: { state: "green", label: "criada há 2 anos" },
  role: "caminhadas e acampamento",
};

export const estudioFarol: Persona = {
  id: "estudio-farol",
  name: "Estúdio Farol",
  handle: "@estudiofarol",
  kind: "business",
  avatar: { kind: "photo", src: "/avatars/estudio-farol.jpg" },
  verification: { state: "yellow", label: "essa pessoa foi verificada há 3 anos" },
  role: "fotografia e vídeo",
};

export const cineClubeAurora: Persona = {
  id: "cine-clube-aurora",
  name: "Cine Clube Aurora",
  handle: "@cineclubeaurora",
  kind: "group",
  avatar: { kind: "photo", src: "/avatars/cine-clube-aurora.jpg" },
  verification: { state: "green", label: "criada há 4 anos" },
  role: "sessões e debate de filmes",
};

export const personas: Persona[] = [
  anaMaria,
  joaoPedro,
  mariaClara,
  antonioJose,
  anaBeatriz,
  luisaFernanda,
  rafaelAugusto,
  beatrizHelena,
  carlosEduardo,
  fernandaLuisa,
  gustavoHenrique,
  helenaCristina,
  igorMatheus,
  julianaRosa,
  kaiqueVinicius,
  larissaNaomi,
  marceloAntonio,
  nataliaCristina,
  otavioLuis,
  patriciaElaine,
  rodrigoJose,
  sabrinaLuiza,
  thiagoAndre,
  vanessaKelly,
  wagnerLuis,
  yaraBeatriz,
  cafeAurora,
  bandaDoBairro,
  livrariaPaginaViva,
  coletivoMare,
  trilhaNorte,
  estudioFarol,
  cineClubeAurora,
];

export function byId(id: string): Persona {
  const found = personas.find((p) => p.id === id);
  if (!found) throw new Error(`persona desconhecida: ${id}`);
  return found;
}

export function byHandle(handle: string): Persona {
  const found = personas.find((p) => p.handle === handle);
  if (!found) throw new Error(`persona desconhecida: ${handle}`);
  return found;
}
