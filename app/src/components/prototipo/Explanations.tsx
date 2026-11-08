import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

export interface Hotspot {
  id: string;
  /** Distância em px do topo da moldura até a altura do elemento explicado. */
  top: number;
  titulo: string;
  texto: string;
  href: string;
  link: string;
  icone: ReactNode;
}

/**
 * Coluna de explicações.
 *
 * Cada cartão fica na mesma altura do elemento que explica e uma linha em
 * zigzag atravessa a margem até a borda do celular.
 */
export function Explanations({ hotspots, compacto = false }: { hotspots: Hotspot[]; compacto?: boolean }) {
  const refs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [alturas, setAlturas] = useState<Record<string, number>>({});

  useLayoutEffect(() => {
    const medidas: Record<string, number> = {};
    for (const [id, el] of Object.entries(refs.current)) {
      if (el) medidas[id] = el.offsetHeight;
    }
    setAlturas((anterior) =>
      JSON.stringify(anterior) === JSON.stringify(medidas) ? anterior : medidas,
    );
  }, [hotspots, compacto]);

  // Duas âncoras próximas gerariam cartões sobrepostos: empurra o de baixo
  // só o suficiente para não encostar, mantendo a ordem.
  const finais: number[] = [];
  hotspots.forEach((h, i) => {
    if (i === 0) {
      finais.push(h.top);
      return;
    }
    const anterior = hotspots[i - 1];
    const fimAnterior = finais[i - 1] + (alturas[anterior.id] ?? 104) + 14;
    finais.push(Math.max(h.top, fimAnterior));
  });

  if (compacto) {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {hotspots.map((h) => (
          <a key={h.id} href={h.href} className="rounded-2xl border border-line bg-surface p-4 transition hover:border-line-strong">
            <p className="flex items-center gap-2 text-[0.8rem] font-bold text-brand">
              {h.icone}
              {h.titulo}
            </p>
            <p className="mt-1.5 text-[0.88rem] leading-relaxed text-text-soft">{h.texto}</p>
            <span className="mt-2 inline-block text-[0.82rem] font-semibold text-brand">{h.link} →</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="relative hidden min-h-[690px] lg:block">
      {hotspots.map((h, i) => (
        <a
          key={h.id}
          href={h.href}
          ref={(el) => {
            refs.current[h.id] = el;
          }}
          style={{ top: finais[i] }}
          className="group absolute -left-2 flex w-full max-w-[420px] items-start gap-3 rounded-2xl border border-line bg-surface p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
        >
          <span
            className="pointer-events-none absolute top-1/2 -left-11 hidden h-[26px] w-11 -translate-y-1/2 text-brand md:block"
            aria-hidden="true"
          >
            <svg viewBox="0 0 44 26" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 13h8l6-9 6 18 6-9h8" />
              <path d="m13 6-9 7 9 7" />
            </svg>
          </span>

          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">{h.icone}</span>
          <span className="min-w-0">
            <span className="block text-[0.86rem] font-bold">{h.titulo}</span>
            <span className="mt-0.5 block text-[0.86rem] leading-relaxed text-text-soft">{h.texto}</span>
            <span className="mt-1.5 inline-block text-[0.82rem] font-semibold text-brand">{h.link} →</span>
          </span>
        </a>
      ))}
    </div>
  );
}
