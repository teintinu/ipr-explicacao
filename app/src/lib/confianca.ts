import { useSyncExternalStore } from "react";

/**
 * Contas cuja **checagem de fato** o leitor quer ver em destaque.
 *
 * A eleição mora no aparelho: nada é publicado. Quando uma conta eleita marca
 * um comentário como alerta, o leitor vê o destaque amarelo. Quando quem
 * marcou não é eleito, aparece só o ícone de alerta.
 */

const CHAVE = "upr-checagem";

function ler(): string[] {
  try {
    const bruto = localStorage.getItem(CHAVE);
    return bruto ? (JSON.parse(bruto) as string[]) : [];
  } catch {
    return [];
  }
}

let atuais: string[] = ler();
const ouvintes = new Set<() => void>();

function assinar(cb: () => void) {
  ouvintes.add(cb);
  return () => ouvintes.delete(cb);
}

export function usarEleitos(): string[] {
  return useSyncExternalStore(assinar, () => atuais, () => []);
}

export function eleger(id: string) {
  if (atuais.includes(id)) return;
  atuais = [...atuais, id];
  persistir();
}

export function revogar(id: string) {
  atuais = atuais.filter((x) => x !== id);
  persistir();
}

export function alternarEleicao(id: string) {
  if (atuais.includes(id)) revogar(id);
  else eleger(id);
}

function persistir() {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(atuais));
  } catch {
    /* modo privado */
  }
  ouvintes.forEach((cb) => cb());
}
