import { useSyncExternalStore } from "react";

/**
 * Quem está vendo o protótipo.
 *
 * A demonstração começa como Ana Maria, mas dá para ver como outra pessoa — é o
 * que mostra, na prática, que conta restrita vê menos postagens.
 */

const CHAVE = "upr-quem-ve";
export const LEITOR_PADRAO = "ana-maria";

function ler(): string {
  try {
    return localStorage.getItem(CHAVE) || LEITOR_PADRAO;
  } catch {
    return LEITOR_PADRAO;
  }
}

let atual = ler();
const ouvintes = new Set<() => void>();

function assinar(cb: () => void) {
  ouvintes.add(cb);
  return () => ouvintes.delete(cb);
}

export function usarLeitor(): string {
  return useSyncExternalStore(assinar, () => atual, () => LEITOR_PADRAO);
}

export function definirLeitor(id: string) {
  atual = id;
  try {
    localStorage.setItem(CHAVE, id);
  } catch {
    /* modo privado: vale só na sessão */
  }
  ouvintes.forEach((cb) => cb());
}
