import { useSyncExternalStore } from "react";

/**
 * Navegação **dentro do celular** do protótipo.
 *
 * Abrir o perfil não troca de página: o aplicativo dentro da moldura passa a
 * mostrar a tela de perfil, com um botão de voltar. É a experiência de usar a
 * rede, não de navegar num site.
 */

export type Tela = "mural" | "conversas" | string; // string = id de conversa aberta

let atual: string | null = null;
let tela: Tela = "mural";
const ouvintes = new Set<() => void>();

function assinar(cb: () => void) {
  ouvintes.add(cb);
  return () => ouvintes.delete(cb);
}

export function usarPerfil(): string | null {
  return useSyncExternalStore(assinar, () => atual, () => null);
}

export function usarTela(): Tela {
  return useSyncExternalStore(assinar, () => tela, () => "mural");
}

export function irPara(nova: Tela) {
  tela = nova;
  atual = null;
  ouvintes.forEach((cb) => cb());
}

export function voltar() {
  tela = "mural";
  atual = null;
  ouvintes.forEach((cb) => cb());
}

export function abrirPerfil(id: string) {
  tela = "mural";
  atual = id;
  ouvintes.forEach((cb) => cb());
}

export function fecharPerfil() {
  atual = null;
  ouvintes.forEach((cb) => cb());
}
