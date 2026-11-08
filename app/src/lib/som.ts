import { useSyncExternalStore } from "react";

/**
 * Preferência de som do protótipo.
 *
 * Vale para **todos os vídeos** e fica no `localStorage`, então sobrevive ao
 * recarregar a página. O padrão é **ligado**: quem nunca escolheu nada ouve.
 *
 * O navegador não deixa o vídeo começar com som sem um gesto do usuário — por
 * isso o player tenta tocar e, se for bloqueado, mostra o botão de play. O
 * clique liga o áudio e vale como gesto.
 */

const CHAVE = "upr-som";

function ler(): boolean {
  try {
    const v = localStorage.getItem(CHAVE);
    return v === null ? true : v === "1";
  } catch {
    return true;
  }
}

let atual = ler();
const ouvintes = new Set<() => void>();

function assinar(cb: () => void) {
  ouvintes.add(cb);
  return () => ouvintes.delete(cb);
}

export function usarSom(): boolean {
  return useSyncExternalStore(assinar, () => atual, () => true);
}

export function definirSom(ligado: boolean) {
  atual = ligado;
  try {
    localStorage.setItem(CHAVE, ligado ? "1" : "0");
  } catch {
    /* modo privado sem storage: a preferência vale só nesta sessão */
  }
  ouvintes.forEach((cb) => cb());
}

export function alternarSom() {
  definirSom(!atual);
}
