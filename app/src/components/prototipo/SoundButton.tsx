import { alternarSom, usarSom } from "../../lib/som";

/** Liga e desliga o som de todos os vídeos. O estado fica no localStorage. */
export function SoundButton() {
  const som = usarSom();

  return (
    <button
      type="button"
      onClick={alternarSom}
      aria-pressed={som}
      aria-label={som ? "Silenciar todos os vídeos" : "Ligar som em todos os vídeos"}
      title={som ? "Som ligado em todos os vídeos" : "Som desligado em todos os vídeos"}
      className={`grid h-8 w-8 place-items-center rounded-xl border transition ${
        som
          ? "border-brand/40 bg-brand-soft text-brand-ink"
          : "border-line bg-surface text-text-faint hover:text-text"
      }`}
    >
      {som ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
          <path d="M4 9v6h4l5 4V5L8 9H4Z" />
          <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
          <path d="M4 9v6h4l5 4V5L8 9H4Z" />
          <path d="m17 9 4 6M21 9l-4 6" />
        </svg>
      )}
    </button>
  );
}
