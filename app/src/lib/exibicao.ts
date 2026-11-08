import { useSyncExternalStore } from "react";

/** Modo de exibição do mural. Vale para o mural **e** para o perfil. */
export type FeedLayout = "focado" | "classico" | "resumido";

export const LAYOUTS: FeedLayout[] = ["focado", "classico", "resumido"];

const CHAVE = "upr-exibicao";

/** URL (`?layout=`) para conferir, depois a escolha salva, depois o padrão: focado. */
function inicial(): FeedLayout {
  const pedido = new URLSearchParams(window.location.search).get("layout");
  if (LAYOUTS.includes(pedido as FeedLayout)) return pedido as FeedLayout;
  try {
    const salvo = localStorage.getItem(CHAVE);
    if (LAYOUTS.includes(salvo as FeedLayout)) return salvo as FeedLayout;
  } catch {
    /* modo privado */
  }
  return "focado";
}

let atual: FeedLayout = inicial();
const ouvintes = new Set<() => void>();

function assinar(cb: () => void) {
  ouvintes.add(cb);
  return () => ouvintes.delete(cb);
}

export function usarLayout(): FeedLayout {
  return useSyncExternalStore(assinar, () => atual, () => "focado");
}

export function definirLayout(novo: FeedLayout) {
  atual = novo;
  try {
    localStorage.setItem(CHAVE, novo);
  } catch {
    /* modo privado */
  }
  ouvintes.forEach((cb) => cb());
}
