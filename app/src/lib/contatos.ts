import { useSyncExternalStore } from "react";

/**
 * Duas listas de contato, independentes.
 *
 * - `mural`: ver as postagens daquela conta.
 * - `conversas`: trocar mensagem com ela.
 *
 * Quem adiciona **diz para quê**; quem aceita **diz o que aceita**. As listas não
 * se misturam: aceitar conversas não dá acesso ao mural, e vice-versa.
 */

const CHAVE = "upr-contatos";

export type Canal = "mural" | "conversas";

export interface Vinculo {
  mural?: boolean;
  conversas?: boolean;
}

export interface Pedido {
  id: string;
  de: string;
  para: string;
  /** O que quem pediu quer. */
  quer: Canal[];
}

type Mapa = Record<string, Record<string, Vinculo>>;

function ler(): Mapa {
  try {
    const bruto = localStorage.getItem(CHAVE);
    return bruto ? (JSON.parse(bruto) as Mapa) : {};
  } catch {
    return {};
  }
}

let mapa: Mapa = ler();
let versao = 0;
const ouvintes = new Set<() => void>();

function assinar(cb: () => void) {
  ouvintes.add(cb);
  return () => ouvintes.delete(cb);
}

export function usarContatos(): Mapa {
  return useSyncExternalStore(assinar, () => mapa, () => mapa);
}

export function usarVersaoContatos(): number {
  return useSyncExternalStore(assinar, () => versao, () => 0);
}

/** O que `para` aceitou de `de`. */
export function vinculoDe(para: string, de: string): Vinculo {
  return mapa[para]?.[de] ?? {};
}

export function temCanal(para: string, de: string, canal: Canal): boolean {
  return vinculoDe(para, de)[canal] === true;
}

/** Aceitar registra exatamente os canais escolhidos por quem aceitou. */
export function aceitar(de: string, para: string, canais: Canal[]) {
  mapa = {
    ...mapa,
    [para]: {
      ...(mapa[para] ?? {}),
      [de]: { mural: canais.includes("mural"), conversas: canais.includes("conversas") },
    },
  };
  notificar();
}

export function desfazer(de: string, para: string) {
  const atual = { ...(mapa[para] ?? {}) };
  delete atual[de];
  mapa = { ...mapa, [para]: atual };
  notificar();
}

export function alternarCanal(para: string, de: string, canal: Canal) {
  const atual = vinculoDe(para, de);
  aceitar(de, para, [
    ...(canal === "mural" ? [] : atual.mural ? (["mural"] as Canal[]) : []),
    ...(canal === "conversas" ? [] : atual.conversas ? (["conversas"] as Canal[]) : []),
    ...(atual[canal] ? [] : [canal]),
  ]);
}

function notificar() {
  versao += 1;
  try {
    localStorage.setItem(CHAVE, JSON.stringify(mapa));
  } catch {
    /* modo privado */
  }
  ouvintes.forEach((cb) => cb());
}

export function rotuloCanais(canais: Canal[]): string {
  const tem = (c: Canal) => canais.includes(c);
  if (tem("mural") && tem("conversas")) return "conversas e postagens";
  if (tem("mural")) return "só postagens";
  if (tem("conversas")) return "só conversas";
  return "nada";
}
