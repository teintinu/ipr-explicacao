import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from "react";

/**
 * Explicações ancoradas no protótipo.
 *
 * Cada uma tem id e âncoras (seletores dentro do celular). Ela entra quando a
 * âncora fica visível e sai quando a âncora desaparece — sempre entrando **no
 * fim da lista**, para a coluna não embaralhar. No hover, uma linha liga o
 * cartão à âncora; no clique, vai para a página que explica o caso.
 */
export interface Explicacao {
  id: string;
  titulo: string;
  texto: string;
  href: string;
  link: string;
  icone: ReactNode;
  ancoras: string[];
  quando?: boolean;
  /**
   * Onde a explicação entra na coluna: `topo` fica sempre em cima (antes das
   * outras), `fim` é anexada conforme aparece. Padrão: `fim`.
   */
  posicao?: "topo" | "fim";
}

interface Ponto {
  x: number;
  y: number;
  /** Raio do sonar: metade do elemento, com teto de 50 px (100 de diâmetro). */
  r: number;
}

const SAIDA_MS = 240;

function visivelDe(el: HTMLElement, moldura: DOMRect): DOMRect | null {
  let r = el.getBoundingClientRect();
  const cruzar = (limite: { top: number; bottom: number; left: number; right: number }) => {
    const top = Math.max(r.top, limite.top);
    const bottom = Math.min(r.bottom, limite.bottom);
    const left = Math.max(r.left, limite.left);
    const right = Math.min(r.right, limite.right);
    if (bottom - top < 8 || right - left < 8) return null;
    r = new DOMRect(left, top, right - left, bottom - top);
    return r;
  };

  if (!cruzar(moldura)) return null;

  let pai = el.parentElement;
  while (pai && pai !== document.body) {
    const estilo = getComputedStyle(pai);
    if (estilo.overflowY !== "visible" || estilo.overflowX !== "visible") {
      if (!cruzar(pai.getBoundingClientRect())) return null;
    }
    pai = pai.parentElement;
  }
  return r;
}

export function Explanations({
  itens,
  telefone,
}: {
  itens: Explicacao[];
  raiz?: RefObject<HTMLDivElement | null>;
  telefone: RefObject<HTMLDivElement | null>;
}) {
  const caixa = useRef<HTMLDivElement>(null);
  const cartoes = useRef<Record<string, HTMLAnchorElement | null>>({});
  const pontos = useRef<Record<string, Ponto[]>>({});
  const [ordem, setOrdem] = useState<string[]>([]);
  const [saindo, setSaindo] = useState<string[]>([]);
  const ordemRef = useRef<string[]>([]);
  const saindoRef = useRef<string[]>([]);
  const [ativo, setAtivo] = useState<string | null>(null);
  const [linhas, setLinhas] = useState<string[]>([]);

  const desenhar = useCallback((id: string | null) => {
    const base = caixa.current?.getBoundingClientRect();
    const alvo = id ? cartoes.current[id]?.getBoundingClientRect() : null;
    if (!id || !base || !alvo) {
      setLinhas([]);
      return;
    }
    const origem = { x: alvo.left - base.left, y: alvo.top + 22 - base.top };
    setLinhas(
      // Linha reta, sem cotovelo, apontando para o centro do elemento.
      (pontos.current[id] ?? []).map((p) => `M ${origem.x} ${origem.y} L ${p.x} ${p.y}`),
    );
  }, []);

  useLayoutEffect(() => {
    let quadro = 0;

    const medir = () => {
      const base = caixa.current?.getBoundingClientRect();
      const moldura = telefone.current?.getBoundingClientRect();
      if (!base || !moldura) return;

      const agora: string[] = [];
      const novosPontos: Record<string, Ponto[]> = {};

      for (const item of itens) {
        if (item.quando === false) continue;
        const achados: Ponto[] = [];
        for (const seletor of item.ancoras) {
          for (const el of Array.from(document.querySelectorAll<HTMLElement>(seletor))) {
            const r = visivelDe(el, moldura);
            if (!r) continue;
            achados.push({
              x: Math.round(r.left - base.left),
              y: Math.round(r.top + r.height / 2 - base.top),
              r: Math.round(Math.min(Math.max(r.width, r.height) / 2, 50)),
            });
            break;
          }
        }
        if (achados.length) {
          agora.push(item.id);
          novosPontos[item.id] = achados;
        }
      }
      pontos.current = novosPontos;

      const anterior = ordemRef.current;
      const mantidos = anterior.filter((id) => agora.includes(id));
      const entrando = agora.filter((id) => !anterior.includes(id));
      const proxima = [...mantidos, ...entrando];
      const saindoAgora = anterior.filter((id) => !agora.includes(id));

      if (proxima.join(",") !== anterior.join(",")) {
        ordemRef.current = proxima;
        setOrdem(proxima);
      }

      if (saindoAgora.length && !saindoAgora.every((id) => saindoRef.current.includes(id))) {
        saindoRef.current = Array.from(new Set([...saindoRef.current, ...saindoAgora]));
        setSaindo(saindoRef.current);
        window.setTimeout(() => {
          saindoRef.current = saindoRef.current.filter((id) => !saindoAgora.includes(id));
          ordemRef.current = ordemRef.current.filter((id) => !saindoAgora.includes(id));
          setSaindo(saindoRef.current);
          setOrdem(ordemRef.current);
        }, SAIDA_MS);
      }
    };

    const agendar = () => {
      cancelAnimationFrame(quadro);
      quadro = requestAnimationFrame(medir);
    };

    medir();
    const t = window.setTimeout(medir, 350);
    const feed = document.querySelector(".feed-scroll");
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);
    feed?.addEventListener("scroll", agendar, { passive: true });

    // Trocar de tela (mural, perfil, conversas) muda o que está visível sem
    // disparar rolagem — então observamos o conteúdo do celular.
    const observador = new MutationObserver(agendar);
    if (telefone.current) {
      observador.observe(telefone.current, { childList: true, subtree: true, attributes: true, attributeFilter: ["data-hotspot"] });
    }
    return () => {
      cancelAnimationFrame(quadro);
      window.clearTimeout(t);
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
      feed?.removeEventListener("scroll", agendar);
      observador.disconnect();
    };
  }, [itens, telefone]);

  useEffect(() => {
    if (!ativo) return;
    const desenharDeNovo = () => desenhar(ativo);
    window.addEventListener("scroll", desenharDeNovo, { passive: true });
    window.addEventListener("resize", desenharDeNovo);
    return () => {
      window.removeEventListener("scroll", desenharDeNovo);
      window.removeEventListener("resize", desenharDeNovo);
    };
  }, [ativo, desenhar]);

  const porId = new Map(itens.map((i) => [i.id, i]));
  const todos = Array.from(new Set([...ordem, ...saindo]));
  // No topo ficam as explicações marcadas; o resto é anexado na ordem em que aparece.
  const lista = [
    ...todos.filter((id) => porId.get(id)?.posicao === "topo"),
    ...todos.filter((id) => porId.get(id)?.posicao !== "topo"),
  ];

  return (
    <div ref={caixa} data-explicacoes={ordem.join(',')} className="relative mt-10 lg:mt-0">
      {linhas.length > 0 && (
        <svg className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block" aria-hidden="true">
          {linhas.map((d, i) => {
            const ponto = ativo ? pontos.current[ativo]?.[i] : undefined;
            const r = ponto?.r ?? 12;
            return (
              <g key={i}>
                <path d={d} className="upr-linha" fill="none" stroke="var(--upr-brand)" strokeWidth="1.6" opacity="0.9" />
                {ponto && (
                  <>
                    <circle cx={ponto.x} cy={ponto.y} r={r} className="upr-sonar" />
                    <circle cx={ponto.x} cy={ponto.y} r={r} className="upr-sonar upr-sonar-tarde" />
                    <circle cx={ponto.x} cy={ponto.y} r={2.5} fill="var(--upr-brand)" />
                  </>
                )}
              </g>
            );
          })}
        </svg>
      )}

      <div className="flex flex-col gap-3" onMouseLeave={() => setAtivo(null)}>
        {lista.map((id) => {
          const item = porId.get(id);
          if (!item) return null;
          const indo = saindo.includes(id);
          return (
            <a
              key={id}
              href={item.href}
              ref={(el) => {
                cartoes.current[id] = el;
              }}
              onMouseEnter={() => {
                setAtivo(id);
                desenhar(id);
              }}
              onMouseLeave={() => {
                setAtivo(null);
                setLinhas([]);
              }}
              onFocus={() => {
                setAtivo(id);
                desenhar(id);
              }}
              onBlur={() => {
                setAtivo(null);
                setLinhas([]);
              }}
              className={`block rounded-2xl border bg-surface p-4 shadow-sm transition-colors ${
                indo ? "upr-explica-sai pointer-events-none" : "upr-explica-entra"
              } ${ativo === id ? "border-brand/50" : "border-line"}`}
            >
              <p className="flex items-center gap-2 text-[0.86rem] font-bold">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                  {item.icone}
                </span>
                {item.titulo}
              </p>
              <p className="mt-1.5 text-[0.86rem] leading-relaxed text-text-soft">{item.texto}</p>
              <span className="mt-1.5 inline-block text-[0.82rem] font-semibold text-brand">{item.link} →</span>
            </a>
          );
        })}
      </div>

      {ordem.length === 0 && saindo.length === 0 && (
        <p className="mt-2 text-[0.84rem] text-text-faint">
          Role o mural: as explicações aparecem conforme o que está na tela.
        </p>
      )}
    </div>
  );
}
