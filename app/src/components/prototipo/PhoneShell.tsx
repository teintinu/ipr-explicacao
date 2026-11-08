import type { ReactNode } from "react";

/**
 * Moldura de celular. O aplicativo roda **dentro** dela, com rolagem própria —
 * a página continua rolando fora.
 */
export function PhoneShell({ children, overlay }: { children: ReactNode; overlay?: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[372px] min-[380px]:max-w-[372px]">
      <div className="rounded-[46px] border-[9px] border-[#171d2c] bg-[#171d2c] shadow-[0_30px_70px_-30px_rgba(16,21,43,.55)]">
        <div className="relative overflow-hidden rounded-[37px] bg-surface">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex justify-center">
            <div className="h-[22px] w-28 rounded-b-2xl bg-[#171d2c]" />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-1.5 text-[0.62rem] font-semibold text-text-faint">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor"><path d="M2 17h3v4H2zM7 13h3v8H7zM12 9h3v12h-3zM17 5h3v16h-3z" /></svg>
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor"><path d="M12 18.5 3 9.5a12.7 12.7 0 0 1 18 0z" /></svg>
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="16" height="10" rx="3" /><rect x="3.5" y="8.5" width="11" height="7" rx="1.6" fill="currentColor" stroke="none" /><path d="M20.5 11v2" /></svg>
            </span>
          </div>

          <div className="relative flex h-[min(690px,72vh)] flex-col pt-6 sm:h-[690px]">{children}{overlay}</div>
        </div>
      </div>
    </div>
  );
}
