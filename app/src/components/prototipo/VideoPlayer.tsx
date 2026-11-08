import { useEffect, useRef, useState } from "react";
import type { Ratio } from "../../data/feed";
import { ratioClass } from "../../data/feed";

/**
 * Vídeo do feed.
 *
 * Toca sozinho quando entra na área visível do celular e pausa quando sai —
 * mas continuar rolando nunca interrompe o que já está tocando: o quadro
 * permanece enquanto o vídeo aparece.
 */
export function VideoPlayer({
  src,
  poster,
  ratio,
  pinned,
  onPin,
  compact = false,
}: {
  src: string;
  poster: string;
  ratio: Ratio;
  pinned: boolean;
  onPin: () => void;
  compact?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [tocando, setTocando] = useState(false);
  const [mudo, setMudo] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          v.play().then(() => setTocando(true)).catch(() => setTocando(false));
        } else {
          v.pause();
          setTocando(false);
        }
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const alternar = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setTocando(true)).catch(() => {});
    } else {
      v.pause();
      setTocando(false);
    }
  };

  const pictureInPicture = async () => {
    const v = ref.current;
    if (!v) return;
    try {
      if (document.pictureInPictureElement) await document.exitPictureInPicture();
      else await v.requestPictureInPicture();
    } catch {
      /* navegador sem suporte: o botão não faz nada */
    }
  };

  return (
    <div className={`group relative overflow-hidden bg-surface-3 ${ratioClass[ratio]} ${compact ? "rounded-lg" : "rounded-xl"}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted={mudo}
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onClick={alternar}
      />

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/55 to-transparent p-2 transition md:opacity-0 md:group-hover:opacity-100">
        <button
          type="button"
          onClick={alternar}
          className="grid h-7 w-7 place-items-center rounded-full bg-black/45 text-white backdrop-blur"
          aria-label={tocando ? "Pausar vídeo" : "Tocar vídeo"}
        >
          {tocando ? (
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
          )}
        </button>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setMudo((m) => !m)}
            className="grid h-7 w-7 place-items-center rounded-full bg-black/45 text-white backdrop-blur"
            aria-label={mudo ? "Ativar som" : "Silenciar"}
          >
            {mudo ? (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 9v6h4l5 4V5L8 9H4Z" /><path d="m17 9 4 6M21 9l-4 6" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 9v6h4l5 4V5L8 9H4Z" /><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" /></svg>
            )}
          </button>
          <button
            type="button"
            onClick={pictureInPicture}
            className="grid h-7 w-7 place-items-center rounded-full bg-black/45 text-white backdrop-blur"
            aria-label="Abrir em picture-in-picture"
            title="Picture-in-picture"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.9"><rect x="3" y="4" width="18" height="16" rx="2.5" /><rect x="12" y="12" width="7" height="6" rx="1.5" fill="currentColor" stroke="none" /></svg>
          </button>
          <button
            type="button"
            onClick={onPin}
            aria-pressed={pinned}
            className={`grid h-7 w-7 place-items-center rounded-full backdrop-blur ${pinned ? "bg-brand text-white" : "bg-black/45 text-white"}`}
            aria-label={pinned ? "Desafixar vídeo" : "Fixar vídeo para continuar vendo"}
            title={pinned ? "Desafixar" : "Fixar enquanto rola"}
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill={pinned ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 4h6l-1 5 4 4v2h-6v5l-1 2-1-2v-5H4v-2l4-4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
