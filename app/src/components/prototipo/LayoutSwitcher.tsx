import type { ReactNode } from "react";

export type { FeedLayout } from "../../lib/exibicao";
import type { FeedLayout } from "../../lib/exibicao";

const opcoes: Array<{ id: FeedLayout; titulo: string; descricao: string; icone: ReactNode }> = [
  {
    id: "focado",
    titulo: "Focado",
    descricao: "uma mídia por vez, tela cheia",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="5" y="2.5" width="14" height="19" rx="3" />
        <path d="M9.5 12.5 12 15l4.5-5" />
      </svg>
    ),
  },
  {
    id: "classico",
    titulo: "Clássico",
    descricao: "cartões grandes, texto vira cartão",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="8" rx="2" />
        <rect x="3" y="14" width="18" height="7" rx="2" />
      </svg>
    ),
  },
  {
    id: "resumido",
    titulo: "Resumido",
    descricao: "texto curto, muitas postagens por tela",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 6h16M4 11h16M4 16h10M4 21h7" />
      </svg>
    ),
  },
];

export function LayoutSwitcher({
  layout,
  onChange,
}: {
  layout: FeedLayout;
  onChange: (l: FeedLayout) => void;
}) {
  return (
    <div className="flex items-center gap-0.5 rounded-full border border-line bg-surface-2 p-0.5">
      {opcoes.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => onChange(o.id)}
          title={`${o.titulo} — ${o.descricao}`}
          aria-label={`Modo ${o.titulo.toLowerCase()}: ${o.descricao}`}
          aria-pressed={layout === o.id}
          className={`grid h-7 w-7 place-items-center rounded-full transition ${
            layout === o.id ? "bg-surface text-brand shadow-sm" : "text-text-faint hover:text-text"
          }`}
        >
          <span className="block h-3.5 w-3.5">{o.icone}</span>
        </button>
      ))}
    </div>
  );
}
