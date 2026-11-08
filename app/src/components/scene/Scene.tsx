import { useEffect, useRef, useState, type ReactNode } from "react";

export interface SceneStep {
  /** Milissegundo em que o passo aparece. */
  at: number;
  label: ReactNode;
  /** Explicação de apoio, no padrão dos resumos. */
  note?: ReactNode;
}

interface SceneProps {
  duration: number;
  steps: SceneStep[];
  children: ReactNode;
  /** Altura mínima da área do desenho, para o layout não pular. */
  artClass?: string;
}

/**
 * Motor das cenas: uma linha do tempo que revela elementos de SVG marcados
 * com `data-at` e sincroniza a legenda. Os elementos nascem invisíveis e
 * entram quando o tempo alcança o seu `at`.
 */
export function Scene({ duration, steps, children, artClass = "" }: SceneProps) {
  const artRef = useRef<HTMLDivElement>(null);
  const [elapsed, setElapsed] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [reduced, setReduced] = useState(false);
  const reduce = useRef(false);

  // Respeita quem pediu menos movimento: mostra tudo, sem animar.
  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce.current) {
      setReduced(true);
      setElapsed(duration);
      setStarted(true);
    }
  }, [duration]);

  // Só começa quando a cena entra na tela.
  useEffect(() => {
    const el = artRef.current;
    if (!el || reduce.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          setPlaying(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Relógio.
  useEffect(() => {
    if (!playing || !started) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      setElapsed((prev) => {
        const next = prev + dt;
        if (next >= duration) return duration;
        return next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, started, duration]);

  useEffect(() => {
    if (elapsed >= duration) setPlaying(false);
  }, [elapsed, duration]);

  // Aplica a visibilidade nos elementos marcados.
  useEffect(() => {
    const root = artRef.current;
    if (!root) return;
    root.querySelectorAll<SVGElement>("[data-at]").forEach((node) => {
      const at = Number(node.dataset.at ?? 0);
      node.classList.toggle("is-on", elapsed >= at);
    });
  }, [elapsed]);

  const finished = elapsed >= duration;
  const activeIndex = steps.reduce((acc, step, i) => (elapsed >= step.at ? i : acc), -1);

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-sm">
      <div ref={artRef} className={`scene px-4 py-6 md:px-8 ${reduced ? "is-reduced" : ""} ${artClass}`}>
        {children}
      </div>

      <div className="border-t border-line bg-surface-2/60 px-4 py-4 md:px-6">
        <ol className="space-y-2.5">
          {steps.map((step, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => {
                  setElapsed(step.at);
                  setPlaying(false);
                }}
                className={`w-full rounded-lg px-2.5 py-1.5 text-left transition ${
                  i === activeIndex
                    ? "bg-brand-soft/70 ring-1 ring-brand/30"
                    : "hover:bg-surface-3/60"
                }`}
              >
                <span className="flex gap-2 text-[0.95rem] leading-snug">
                  <span className="font-bold text-brand">{i + 1}.</span>
                  <span>
                    <span className="text-text">{step.label}</span>
                    {step.note && <span className="step-note">{step.note}</span>}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      {!reduce.current && (
        <div className="flex flex-wrap items-center gap-2 border-t border-line px-4 py-3 text-[0.85rem]">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="rounded-full border border-line-strong bg-surface px-3.5 py-1.5 font-semibold text-text-soft transition hover:bg-surface-3 hover:text-text"
          >
            {finished ? "Recomeçar" : playing ? "Pausar" : "Continuar"}
          </button>
          {finished && (
            <button
              type="button"
              onClick={() => {
                setElapsed(0);
                setStarted(true);
                setPlaying(true);
              }}
              className="rounded-full border border-line-strong bg-surface px-3.5 py-1.5 font-semibold text-text-soft transition hover:bg-surface-3 hover:text-text"
            >
              Do início
            </button>
          )}
          <span className="ml-auto text-[0.8rem] text-text-faint">
            Clique num passo para ir até ele
          </span>
        </div>
      )}
    </div>
  );
}
