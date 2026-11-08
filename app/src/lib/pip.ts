import { useSyncExternalStore } from "react";

/**
 * Vídeo na janela flutuante.
 *
 * A janela é **desenhada dentro do celular**, não é o picture-in-picture do
 * navegador: o protótipo é uma demonstração, e a janela do sistema sairia da
 * moldura e quebraria a ilusão.
 *
 * Enquanto existe uma janela aberta, todos os outros vídeos tocam mudos.
 */

import type { Ratio } from "../data/feed";

export interface PipVideo {
  id: string;
  src: string;
  poster: string;
  /** A janela respeita a proporção do vídeo: retrato, paisagem ou quadrado. */
  ratio: Ratio;
}

let atual: PipVideo | null = null;
const ouvintes = new Set<() => void>();

function assinar(cb: () => void) {
  ouvintes.add(cb);
  return () => ouvintes.delete(cb);
}

export function usarPip(): PipVideo | null {
  return useSyncExternalStore(assinar, () => atual, () => null);
}

export function abrirPip(video: PipVideo) {
  atual = video;
  ouvintes.forEach((cb) => cb());
}

export function fecharPip() {
  atual = null;
  ouvintes.forEach((cb) => cb());
}
