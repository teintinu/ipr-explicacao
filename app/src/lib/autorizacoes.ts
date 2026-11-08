import { useSyncExternalStore } from "react";

/**
 * Autorizações do responsável para a conta restrita.
 *
 * O pedido que chega para a conta restrita **não aparece para ela**: sobe para
 * o responsável. Só depois do aceite a conversa existe do lado de quem é menor.
 */

const CHAVE = "upr-autorizacoes";

export type Escopo = "conversas" | "conversas+postagens";

type Mapa = Record<string, Record<string, Escopo>>;

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

export function usarAutorizacoes(): Mapa {
  return useSyncExternalStore(assinar, () => mapa, () => mapa);
}

export function usarVersaoAutorizacoes(): number {
  return useSyncExternalStore(assinar, () => versao, () => 0);
}

export function escopoDe(tutelado: string, de: string): Escopo | null {
  return mapa[tutelado]?.[de] ?? null;
}

export function autorizar(tutelado: string, de: string, escopo: Escopo) {
  mapa = { ...mapa, [tutelado]: { ...(mapa[tutelado] ?? {}), [de]: escopo } };
  versao += 1;
  persistir();
}

export function revogarAutorizacao(tutelado: string, de: string) {
  const atual = { ...(mapa[tutelado] ?? {}) };
  delete atual[de];
  mapa = { ...mapa, [tutelado]: atual };
  versao += 1;
  persistir();
}

function persistir() {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(mapa));
  } catch {
    /* modo privado */
  }
  ouvintes.forEach((cb) => cb());
}
