import { useEffect, useRef } from "react";
import { usarSom } from "../../lib/som";

/** Vídeo fixado: continua tocando num quadro flutuante enquanto o feed rola. */
export function MiniPlayer({
  src,
  poster,
  onClose,
  onExpand,
}: {
  src: string;
  poster: string;
  onClose: () => void;
  onExpand: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const som = usarSom();

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = !som;
    v.play().catch(() => {});
  }, [src, som]);

  return (
    <div className="absolute inset-x-3 bottom-3 z-30 overflow-hidden rounded-xl border border-line bg-black shadow-xl">
      <video ref={ref} src={src} poster={poster} muted={!som} loop playsInline className="h-32 w-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/70 to-transparent px-2 py-1.5">
        <button type="button" onClick={onExpand} className="rounded-full bg-white/15 px-2 py-0.5 text-[0.68rem] font-semibold text-white backdrop-blur">
          Ir para o post
        </button>
        <button type="button" onClick={onClose} className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-white backdrop-blur" aria-label="Desafixar vídeo">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
      </div>
    </div>
  );
}
