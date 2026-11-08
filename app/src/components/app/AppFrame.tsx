import type { ReactNode } from "react";
import { byId } from "../../data/personas";
import { usarLeitor } from "../../lib/conta";
import { Avatar } from "../Avatar";

/**
 * Moldura do aplicativo: é a "tela" onde os exemplos acontecem.
 *
 * Na página, aparece como um cartão solto. Dentro do protótipo (`bare`), ela
 * perde a borda e passa a ocupar o corpo do celular; em `compact`, o campo de
 * busca vira ícone e sobra espaço para controles extras no cabeçalho.
 */
export function AppFrame({
  children,
  width = "max-w-[1000px]",
  bare = false,
  compact = false,
  extra,
}: {
  children: ReactNode;
  width?: string;
  bare?: boolean;
  compact?: boolean;
  extra?: ReactNode;
}) {
  const leitor = byId(usarLeitor());
  const casca = bare
    ? "flex h-full min-h-0 w-full flex-col"
    : `mx-auto flex w-full flex-col overflow-hidden rounded-[22px] border border-line bg-surface shadow-xl ${width}`;

  return (
    <div className={casca}>
      <div className={`flex shrink-0 items-center gap-2 border-b border-line bg-surface ${compact ? "px-3 py-2" : "px-4 py-3"}`}>

        {compact ? (
          <span className="ml-1 flex flex-1 items-center gap-1.5 text-text-faint">
            <span className="flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[0.72rem]">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              Buscar
            </span>
          </span>
        ) : (
          <span className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-line bg-surface-2 px-3.5 py-1.5 text-[0.9rem] text-text-faint">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            Buscar contas, grupos ou assuntos
          </span>
        )}

        <div className="flex items-center gap-2">
          {extra}

          <a
            href="/conversas"
            className={`relative grid place-items-center rounded-xl border border-line text-text-soft transition hover:bg-surface-2 hover:text-text ${compact ? "h-8 w-8" : "h-9 w-9"}`}
            aria-label="Abrir conversas (2 não lidas)"
          >
            <svg viewBox="0 0 24 24" className={compact ? "h-4 w-4" : "h-4.5 w-4.5"} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.6 9.6 0 0 1-3.2-.6L3 21l1.7-4.9A8.3 8.3 0 0 1 3.6 11.5a8.4 8.4 0 0 1 9-8.4 8.4 8.4 0 0 1 8.4 8.4Z" />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 grid h-4 min-w-4 place-items-center rounded-full border-2 border-surface bg-danger px-1 text-[0.6rem] font-extrabold text-white">
              2
            </span>
          </a>

          <a
            href="/identidade"
            className={`grid place-items-center rounded-xl border border-line text-text-soft transition hover:bg-surface-2 hover:text-text ${compact ? "h-8 w-8" : "h-9 w-9"}`}
            aria-label={`Sua identidade — ${leitor.verification.label}`}
            title={`${leitor.name} — ${leitor.verification.label}`}
          >
            <Avatar persona={leitor} size="sm" showVerification={false} />
          </a>
        </div>
      </div>

      {children}
    </div>
  );
}
