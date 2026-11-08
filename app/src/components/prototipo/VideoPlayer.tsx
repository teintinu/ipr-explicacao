import { useEffect, useRef, useState } from "react";
import type { Ratio } from "../../data/feed";
import { ratioClass } from "../../data/feed";
import { abrirPip, fecharPip, usarPip } from "../../lib/pip";
import { alternarSom, usarSom } from "../../lib/som";

/**
 * Vídeo do feed.
 *
 * Toca sozinho quando entra na área visível. O som segue a preferência global
 * (localStorage). Se o navegador bloquear o autoplay com som, o vídeo começa
 * mudo assim mesmo — e aparece "toque para ouvir" para liberar o áudio.
 *
 * A janela flutuante é a do protótipo (desenhada dentro do celular), não a do
 * navegador. Enquanto ela está aberta, todos os outros vídeos tocam mudos.
 */
export function VideoPlayer({
  postId,
  src,
  poster,
  ratio,
  pinned,
  onPin,
  compact = false,
}: {
  postId: string;
  src: string;
  poster: string;
  ratio: Ratio;
  pinned: boolean;
  onPin: () => void;
  compact?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const som = usarSom();
  const pip = usarPip();
  const emPip = pip?.id === postId;
  const outroEmPip = pip !== null && !emPip;

  const [tocando, setTocando] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);

  const mudo = !som || outroEmPip;

  useEffect(() => {
    const v = ref.current;
    if (v) v.muted = mudo;
  }, [mudo]);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) {
          v.pause();
          setTocando(false);
          return;
        }
        if (emPip) return; // a janela flutuante é que está tocando
        v.play()
          .then(() => {
            setTocando(true);
            setBloqueado(false);
          })
          .catch(() => {
            // autoplay com som bloqueado: toca mudo e oferece o botão
            v.muted = true;
            v.play()
              .then(() => {
                setTocando(true);
                setBloqueado(true);
              })
              .catch(() => setTocando(false));
          });
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [emPip]);

  // Entrou na janela flutuante: pausa aqui. Saiu: volta a tocar se estiver à vista.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (emPip) {
      v.pause();
      setTocando(false);
      return;
    }
    const r = v.getBoundingClientRect();
    const visivel = r.top < window.innerHeight && r.bottom > 0;
    if (visivel) {
      v.play().then(() => setTocando(true)).catch(() => {});
    }
  }, [emPip]);

  const tocar = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play()
        .then(() => {
          setTocando(true);
          setBloqueado(false);
        })
        .catch(() => {
          v.muted = true;
          v.play().then(() => setTocando(true)).catch(() => {});
        });
    } else {
      v.pause();
      setTocando(false);
    }
  };

  const janela = () => {
    if (emPip) fecharPip();
    else abrirPip({ id: postId, src, poster, ratio });
  };

  return (
    <div
      className={`group relative overflow-hidden bg-surface-3 ${ratioClass[ratio]} ${compact ? "rounded-lg" : "rounded-xl"}`}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted={mudo}
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onClick={tocar}
      />

      {!tocando && !emPip && (
        <button type="button" onClick={tocar} aria-label="Tocar vídeo" className="absolute inset-0 grid place-items-center">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-black/50 text-white shadow-lg backdrop-blur transition hover:scale-105">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        </button>
      )}

      {bloqueado && !emPip && (
        <button
          type="button"
          onClick={() => {
            alternarSom();
            setBloqueado(false);
          }}
          className="absolute bottom-11 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-2.5 py-1 text-[0.68rem] font-semibold text-white"
        >
          toque para ouvir
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
            onClick={janela}
            aria-pressed={emPip}
            className={`grid h-7 w-7 place-items-center rounded-full backdrop-blur ${emPip ? "bg-brand text-white" : "bg-black/45 text-white"}`}
            aria-label={emPip ? "Fechar janela flutuante" : "Abrir em janela flutuante"}
            title={emPip ? "Fechar janela flutuante" : "Janela flutuante"}
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
