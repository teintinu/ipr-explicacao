import type { ReactNode } from "react";
import { anaMaria } from "../../data/personas";
import { Avatar } from "../Avatar";

/**
 * Moldura do aplicativo: é o "celular" onde os exemplos acontecem.
 * Tudo dentro dela é interface; o que está fora é explicação.
 */
export function AppFrame({
  children,
  width = "max-w-[1000px]",
}: {
  children: ReactNode;
  width?: string;
}) {
  return (
    <div
      className={`mx-auto w-full overflow-hidden rounded-[22px] border border-line bg-surface shadow-xl ${width}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface px-4 py-3">
        <span className="inline-flex items-center gap-2 text-[1.02rem] font-extrabold tracking-tight">
          <i className="h-5 w-5 rounded-lg bg-gradient-to-br from-brand to-accent" aria-hidden="true" />
          UPR
        </span>

        <span className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-line bg-surface-2 px-3.5 py-1.5 text-[0.9rem] text-text-faint">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          Buscar contas, grupos ou assuntos
        </span>

        <div className="flex items-center gap-2">
          <a
            href="/conversas"
            className="relative grid h-9 w-9 place-items-center rounded-xl border border-line text-text-soft transition hover:bg-surface-2 hover:text-text"
            aria-label="Abrir conversas (2 não lidas)"
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.6 9.6 0 0 1-3.2-.6L3 21l1.7-4.9A8.3 8.3 0 0 1 3.6 11.5a8.4 8.4 0 0 1 9-8.4 8.4 8.4 0 0 1 8.4 8.4Z" />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 grid h-4.5 min-w-4.5 place-items-center rounded-full border-2 border-surface bg-danger px-1 text-[0.66rem] font-extrabold text-white">
              2
            </span>
          </a>

          <a
            href="/identidade"
            className="grid h-9 w-9 place-items-center rounded-xl border border-line text-text-soft transition hover:bg-surface-2 hover:text-text"
            aria-label={`Sua identidade — ${anaMaria.verification.label}`}
            title={`${anaMaria.name} — ${anaMaria.verification.label}`}
          >
            <Avatar persona={anaMaria} size="sm" />
          </a>
        </div>
      </div>

      {children}
    </div>
  );
}
