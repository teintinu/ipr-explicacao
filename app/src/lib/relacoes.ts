import { useSyncExternalStore } from "react";

/**
 * Relações do leitor com cada conta, guardadas no aparelho.
 *
 * Seguir, bloquear e restringir não são publicados: ficam aqui. O protótipo
 * mostra o efeito, não manda evento para a rede.
 */

const CHAVE = "upr-relacoes";

export interface Relacao {
  segue?: boolean;
  bloqueado?: boolean;
  restringeStory?: boolean;
  restringePost?: boolean;
}

type Mapa = Record<string, Relacao>;

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

export function usarRelacoes(): Mapa {
  return useSyncExternalStore(assinar, () => mapa, () => mapa);
}

/** Versão que muda a cada escrita, para quem só precisa re-renderizar. */
export function usarVersaoRelacoes(): number {
  return useSyncExternalStore(assinar, () => versao, () => 0);
}

export function relacaoDe(id: string): Relacao {
  return mapa[id] ?? {};
}

export function alternarRelacao(id: string, campo: keyof Relacao) {
  const atual = mapa[id] ?? {};
  mapa = { ...mapa, [id]: { ...atual, [campo]: !atual[campo] } };
  versao += 1;
  try {
    localStorage.setItem(CHAVE, JSON.stringify(mapa));
  } catch {
    /* modo privado */
  }
  ouvintes.forEach((cb) => cb());
}
