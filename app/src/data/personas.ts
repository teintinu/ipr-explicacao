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
 */

export type VerificationState = "green" | "yellow" | "red" | "none";

export interface Verification {
  state: VerificationState;
  /** Texto curto do selo, ex.: "verificada há 2 meses". */
  label: string;
}

export type AccountKind = "personal" | "business" | "group";

/**
 * De onde vem a imagem do avatar.
 *   photo → retrato, usado nas contas de pessoa (gerados por https://pravatar.cc/)
 *   icon  → ícone de traço, usado em grupo e empresa (não são pessoas)
 */
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

/** A leitora do site: é sempre ela quem está usando a rede nos exemplos. */
export const anaMaria: Persona = {
  id: "ana-maria",
  name: "Ana Maria",
  handle: "@anamaria",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/ana-maria.jpg" },
  verification: { state: "green", label: "verificada há 2 meses" },
  role: "é você nesta demonstração",
};

export const joaoPedro: Persona = {
  id: "joao-pedro",
  name: "João Pedro",
  handle: "@joaopedro",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/joao-pedro.jpg" },
  verification: { state: "green", label: "verificada há 8 meses" },
  role: "publica o post do mito dos 10%",
};

export const mariaClara: Persona = {
  id: "maria-clara",
  name: "Maria Clara",
  handle: "@mariaclara",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/maria-clara.jpg" },
  verification: { state: "yellow", label: "verificada há 2 anos" },
  role: "é a conta em quem Ana Maria confia",
};

export const antonioJose: Persona = {
  id: "antonio-jose",
  name: "Antônio José",
  handle: "@antoniojose",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/antonio-jose.jpg" },
  verification: { state: "red", label: "verificada há 6 anos" },
  role: "exemplo de verificação vencida",
};

export const anaBeatriz: Persona = {
  id: "ana-beatriz",
  name: "Ana Beatriz",
  handle: "@anabeatriz",
  kind: "personal",
  avatar: { kind: "photo", src: "/avatars/ana-beatriz.jpg" },
  verification: { state: "green", label: "verificada há 10 dias" },
  role: "conta recém-criada",
};

export const cafeAurora: Persona = {
  id: "cafe-aurora",
  name: "Café Aurora",
  handle: "@cafeaurora",
  kind: "business",
  avatar: { kind: "photo", src: "/avatars/cafe-aurora.jpg" },
  verification: { state: "green", label: "verificada há 4 meses" },
  role: "conta de empresa (PJ)",
};

export const bandaDoBairro: Persona = {
  id: "banda-do-bairro",
  name: "Banda do Bairro",
  handle: "@bandadobairro",
  kind: "group",
  avatar: { kind: "photo", src: "/avatars/banda-do-bairro.jpg" },
  verification: { state: "green", label: "criada há 1 ano" },
  role: "conta de grupo",
};

export const personas: Persona[] = [
  anaMaria,
  joaoPedro,
  mariaClara,
  antonioJose,
  anaBeatriz,
  cafeAurora,
  bandaDoBairro,
];

export function byHandle(handle: string): Persona {
  const found = personas.find((p) => p.handle === handle);
  if (!found) throw new Error(`persona desconhecida: ${handle}`);
  return found;
}
