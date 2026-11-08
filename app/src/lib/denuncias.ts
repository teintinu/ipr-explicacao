import { useSyncExternalStore } from "react";

/**
 * Denúncias.
 *
 * A denúncia vai de uma conta (A) para uma **ouvidoria** (C) — um perfil criado
 * para receber denúncias. A ouvidoria vê o ranking de contas mais denunciadas e
 * pode encaminhar à justiça, anexando a lista. A conta denunciada (B) recebe um
 * aviso automático da ouvidoria a cada denúncia.
 */

const CHAVE = "upr-denuncias";

export interface Denuncia {
  id: string;
  de: string;
  alvo: string;
  ouvidoria: string;
  motivo: string;
  hora: string;
  encaminhada?: boolean;
}

const motivos = [
  "Conteúdo ofensivo",
  "Assédio em mensagem",
  "Golpe ou fraude",
  "Perfil falso",
];

function ler(): Denuncia[] {
  try {
    const bruto = localStorage.getItem(CHAVE);
    return bruto ? (JSON.parse(bruto) as Denuncia[]) : [];
  } catch {
    return [];
  }
}

let lista: Denuncia[] = ler();
let versao = 0;
const ouvintes = new Set<() => void>();

function assinar(cb: () => void) {
  ouvintes.add(cb);
  return () => ouvintes.delete(cb);
}

export function usarDenuncias(): Denuncia[] {
  return useSyncExternalStore(assinar, () => lista, () => lista);
}

export function usarVersaoDenuncias(): number {
  return useSyncExternalStore(assinar, () => versao, () => 0);
}

export function denunciar(alvo: string, ouvidoria: string, motivo?: string) {
  const hora = new Date();
  lista = [
    {
      id: `d-${alvo}-${hora.getTime()}`,
      de: "eu",
      alvo,
      ouvidoria,
      motivo: motivo ?? motivos[lista.length % motivos.length],
      hora: `${String(hora.getHours()).padStart(2, "0")}:${String(hora.getMinutes()).padStart(2, "0")}`,
    },
    ...lista,
  ];
  versao += 1;
  persistir();
}

export function ranking(ouvidoria: string): Array<{ alvo: string; total: number }> {
  const contagem = new Map<string, number>();
  for (const d of lista) {
    if (d.ouvidoria !== ouvidoria) continue;
    contagem.set(d.alvo, (contagem.get(d.alvo) ?? 0) + 1);
  }
  return [...contagem.entries()]
    .map(([alvo, total]) => ({ alvo, total }))
    .sort((a, b) => b.total - a.total);
}

export function denunciasContra(alvo: string): Denuncia[] {
  return lista.filter((d) => d.alvo === alvo);
}

export function encaminhar(ouvidoria: string) {
  lista = lista.map((d) => (d.ouvidoria === ouvidoria ? { ...d, encaminhada: true } : d));
  versao += 1;
  persistir();
}

function persistir() {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(lista));
  } catch {
    /* modo privado */
  }
  ouvintes.forEach((cb) => cb());
}
