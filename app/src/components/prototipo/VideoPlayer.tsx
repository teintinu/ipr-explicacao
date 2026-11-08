import { useEffect, useRef, useState } from "react";
import type { Ratio } from "../../data/feed";
import { ratioClass } from "../../data/feed";
import { alternarSom, usarSom } from "../../lib/som";

/**
 * Vídeo do feed.
 *
 * Toca sozinho quando entra na área visível do celular e pausa quando sai.
 * O som segue a preferência global (localStorage): se estiver ligado, tenta
 * tocar com áudio; se o navegador bloquear, mostra o botão de play — o clique
 * conta como gesto e libera o som.
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
  const som = usarSom();
  const [tocando, setTocando] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = !som;
  }, [som]);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          v.play()
            .then(() => {
              setTocando(true);
              setBloqueado(false);
            })
            .catch(() => {
              setTocando(false);
              setBloqueado(!v.muted); // só é bloqueio quando havia som para tocar
            });
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

  const tocar = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !som;
    if (v.paused) {
      v.play()
        .then(() => {
          setTocando(true);
          setBloqueado(false);
        })
        .catch(() => setBloqueado(!v.muted));
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
      /* navegador sem suporte */
    }
  };

  return (
    <div
      className={`group relative overflow-hidden bg-surface-3 ${ratioClass[ratio]} ${compact ? "rounded-lg" : "rounded-xl"}`}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted={!som}
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onClick={tocar}
      />

      {!tocando && (
        <button
          type="button"
          onClick={tocar}
          aria-label={bloqueado ? "Tocar com som" : "Tocar vídeo"}
          className="absolute inset-0 grid place-items-center"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-black/50 text-white shadow-lg backdrop-blur transition hover:scale-105">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
          {bloqueado && (
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-2.5 py-1 text-[0.68rem] font-semibold text-white">
              toque para ouvir
            </span>
          )}
        </button>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/55 to-transparent p-2 transition md:opacity-0 md:group-hover:opacity-100">
        <button
          type="button"
          onClick={tocar}
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
            onClick={alternarSom}
            className={`grid h-7 w-7 place-items-center rounded-full backdrop-blur ${som ? "bg-brand text-white" : "bg-black/45 text-white"}`}
            aria-label={som ? "Silenciar todos os vídeos" : "Ligar som em todos os vídeos"}
            title={som ? "Som ligado (vale para todos)" : "Som desligado (vale para todos)"}
          >
            {som ? (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 9v6h4l5 4V5L8 9H4Z" /><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 9v6h4l5 4V5L8 9H4Z" /><path d="m17 9 4 6M21 9l-4 6" /></svg>
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
