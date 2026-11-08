import { useEffect, useRef, useState } from "react";
import type { Ratio } from "../../data/feed";
import { fecharPip, type PipVideo } from "../../lib/pip";
import { alternarSom, usarSom } from "../../lib/som";

/** Largura da janela por proporção — o altura sai da própria proporção. */
const largura: Record<Ratio, number> = {
  "16:9": 208,
  "9:16": 104,
  "1:1": 138,
  "3:4": 120,
};

const proporcao: Record<Ratio, number> = {
  "16:9": 16 / 9,
  "9:16": 9 / 16,
  "1:1": 1,
  "3:4": 3 / 4,
};

/**
 * Janela flutuante dentro do celular.
 *
 * Sem barra de título: só o vídeo, no formato dele, com um fechar discreto no
 * canto. Arrasta pelo próprio vídeo; toque simples pausa, toque duplo volta
 * para a postagem.
 */
export function PipWindow({ video, onIrPara }: { video: PipVideo; onIrPara: () => void }) {
  const som = usarSom();
  const ref = useRef<HTMLVideoElement>(null);
  const caixa = useRef<HTMLDivElement>(null);
  const arrasto = useRef<{ dx: number; dy: number; moveu: boolean } | null>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [controles, setControles] = useState(false);
  const [tocando, setTocando] = useState(true);

  const larguraJanela = largura[video.ratio];
  const alturaJanela = Math.round(larguraJanela / proporcao[video.ratio]);

  // Canto superior direito, assim que a moldura é medida.
  useEffect(() => {
    if (pos) return;
    const pai = caixa.current?.offsetParent as HTMLElement | null;
    if (!pai) return;
    setPos({ x: pai.clientWidth - larguraJanela - 10, y: 30 });
  }, [pos, larguraJanela]);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = !som;
    const tentar = () => {
      v.play().catch(() => {
        v.muted = true;
        v.play().catch(() => {});
      });
    };
    tentar();
    v.addEventListener("loadeddata", tentar, { once: true });
    return () => v.removeEventListener("loadeddata", tentar);
  }, [som, video.src]);

  const comecar = (e: React.PointerEvent) => {
    const r = caixa.current?.getBoundingClientRect();
    if (!r) return;
    arrasto.current = { dx: e.clientX - r.left, dy: e.clientY - r.top, moveu: false };
  };

  const mover = (e: React.PointerEvent) => {
    if (!arrasto.current) return;
    if (!arrasto.current.moveu) {
      const alvo = caixa.current?.getBoundingClientRect();
      if (!alvo) return;
      if (Math.abs(e.clientX - alvo.left - arrasto.current.dx) < 5 && Math.abs(e.clientY - alvo.top - arrasto.current.dy) < 5) return;
      arrasto.current.moveu = true;
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }
    const pai = caixa.current?.offsetParent as HTMLElement | null;
    const limite = pai?.getBoundingClientRect();
    if (!limite) return;
    const x = Math.min(Math.max(0, e.clientX - limite.left - arrasto.current.dx), limite.width - larguraJanela);
    const y = Math.min(Math.max(0, e.clientY - limite.top - arrasto.current.dy), limite.height - alturaJanela);
    setPos({ x, y });
  };

  /**
   * Toque simples: pausa e mostra os controles (mudo, play e fechar).
   * Arrasto não conta como toque.
   */
  const soltar = () => {
    const moveu = arrasto.current?.moveu;
    arrasto.current = null;
    if (moveu) return;
    const v = ref.current;
    if (!v) return;
    if (!v.paused) {
      v.pause();
      setControles(true);
    } else {
      v.play().catch(() => {});
      setControles(true);
    }
  };

  return (
    <div
      ref={caixa}
      style={{ left: pos?.x ?? 0, top: pos?.y ?? 0, width: larguraJanela, height: alturaJanela }}
      className="group absolute z-40 overflow-hidden rounded-xl border border-white/20 bg-black shadow-2xl"
    >
      <video
        ref={ref}
        src={video.src}
        poster={video.poster}
        muted={!som}
        autoPlay
        loop
        playsInline
        onPointerDown={comecar}
        onPointerMove={mover}
        onPointerUp={soltar}
        onPointerCancel={soltar}
        onDoubleClick={onIrPara}
        onPlay={() => setTocando(true)}
        onPause={() => setTocando(false)}
        className="h-full w-full cursor-grab touch-none object-cover active:cursor-grabbing"
      />

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-end gap-1 bg-gradient-to-t from-black/70 to-transparent p-1.5 transition-opacity ${
          controles ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <button
          type="button"
          onClick={() => {
            const v = ref.current;
            if (!v) return;
            if (v.paused) v.play().catch(() => {});
            else v.pause();
            setControles(true);
          }}
          aria-label={tocando ? "Pausar" : "Tocar"}
          className="pointer-events-auto grid h-6 w-6 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/35"
        >
          {tocando ? (
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" className="ml-0.5 h-3 w-3" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
          )}
        </button>
        <button
          type="button"
          onClick={() => {
            alternarSom();
            setControles(true);
          }}
          aria-label={som ? "Silenciar" : "Ligar som"}
          className="pointer-events-auto grid h-6 w-6 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/35"
        >
          {som ? (
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 9v6h4l5 4V5L8 9H4Z" /><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 9v6h4l5 4V5L8 9H4Z" /><path d="m17 9 4 6M21 9l-4 6" /></svg>
          )}
        </button>
        <button
          type="button"
          onClick={fecharPip}
          aria-label="Fechar janela flutuante"
          className="pointer-events-auto grid h-6 w-6 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/35"
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
      </div>


    </div>
  );
}
