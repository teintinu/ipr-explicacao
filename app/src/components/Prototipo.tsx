import { useEffect, useMemo, useRef, useState } from "react";
import { AppFrame } from "./app/AppFrame";
import { StoryRow } from "./app/StoryRow";
import { Kicker, Section } from "./ui";
import { Feed } from "./prototipo/Feed";
import { Explanations, type Hotspot } from "./prototipo/Explanations";
import { LayoutSwitcher, type FeedLayout } from "./prototipo/LayoutSwitcher";
import { MiniPlayer } from "./prototipo/MiniPlayer";
import { PhoneShell } from "./prototipo/PhoneShell";
import { PipWindow } from "./prototipo/PipWindow";
import { fecharPip, usarPip } from "../lib/pip";
import { SoundButton } from "./prototipo/SoundButton";
import { feedPosts } from "../data/feed-posts";
import { anaBeatriz, anaMaria, antonioJose, cafeAurora, joaoPedro, mariaClara } from "../data/personas";

const LAYOUTS: FeedLayout[] = ["classico", "resumido", "focado"];

/** `?layout=resumido` abre o protótipo já naquele layout (útil para conferir). */
function layoutInicial(): FeedLayout {
  const pedido = new URLSearchParams(window.location.search).get("layout");
  return LAYOUTS.includes(pedido as FeedLayout) ? (pedido as FeedLayout) : "classico";
}

const stories = [joaoPedro, mariaClara, antonioJose, anaBeatriz, cafeAurora];

function cartoes(t: Record<string, number>): Hotspot[] {
  return [
    {
      id: "layout",
      top: t.layout ?? 40,
      titulo: "Três jeitos de ler o mesmo mural",
      texto: "Clássico para imagem grande, resumido para passar rápido, focado para assistir.",
      href: "/perguntas",
      link: "como a rede se organiza",
      icone: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
          <path d="M4 6h16M4 12h16M4 18h10" />
        </svg>
      ),
    },
    {
      id: "momentos",
      top: t.momentos ?? 150,
      titulo: "Momentos: some em 24 horas",
      texto: "A faixa do topo tem prazo: depois de um dia, ninguém busca mais o arquivo.",
      href: "/diario",
      link: "ver os momentos",
      icone: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
    },
    {
      id: "selo",
      top: t.selo ?? 250,
      titulo: "O selo diz a idade da verificação",
      texto: "Verde até um ano, amarelo até cinco, vermelho acima disso. É data, não nota.",
      href: "/identidade",
      link: "como a identidade funciona",
      icone: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3 5 6v5c0 4.4 3 8.3 7 10 4-1.7 7-5.6 7-10V6Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: "video",
      top: t.video ?? 400,
      titulo: "Vídeo que continua enquanto você rola",
      texto: "Fixe no canto ou abra na janela flutuante — e os outros vídeos seguem mudos.",
      href: "/por-dentro",
      link: "ver por dentro",
      icone: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 5.5v13l11-6.5z" />
        </svg>
      ),
    },
    {
      id: "comentarios",
      top: t.comentarios ?? 470,
      titulo: "Alerta de conta confiável vem primeiro",
      texto: "Só se ela marcar o comentário como alerta. Comentário comum fica na ordem normal.",
      href: "/confianca",
      link: "como funciona a confiança",
      icone: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.6 9.6 0 0 1-3.2-.6L3 21l1.7-4.9A8.3 8.3 0 0 1 3.6 11.5a8.4 8.4 0 0 1 9-8.4 8.4 8.4 0 0 1 8.4 8.4Z" />
        </svg>
      ),
    },
  ];
}

export function Prototipo() {
  const [layout, setLayout] = useState<FeedLayout>(layoutInicial);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [tops, setTops] = useState<Record<string, number>>({});
  const pip = usarPip();

  /** Leva o mural até a postagem e fecha a janela flutuante. */
  const irParaPostagem = (id: string) => {
    const feed = document.querySelector<HTMLElement>(".feed-scroll");
    const alvo = document.getElementById(`post-${id}`);
    if (feed && alvo) {
      const fr = feed.getBoundingClientRect();
      const ar = alvo.getBoundingClientRect();
      feed.scrollTop += ar.top - fr.top - 6;
    }
    fecharPip();
  };
  const telefone = useRef<HTMLDivElement>(null);

  // As setas precisam apontar para o elemento, não para um número fixo:
  // mede a posição real de cada âncora dentro da seção.
  useEffect(() => {
    const medir = () => {
      const base = telefone.current?.getBoundingClientRect().top ?? 0;
      const centro = (nome: string, delta = 0) => {
        const el = document.querySelector<HTMLElement>(`[data-hotspot="${nome}"]`);
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        return Math.round(r.top - base + r.height / 2 + delta);
      };
      // O feed é alto: a âncora dele é o topo, não o meio.
      const elFeed = document.querySelector<HTMLElement>('[data-hotspot="feed"]');
      const feed = elFeed ? Math.round(elFeed.getBoundingClientRect().top - base) : 0;
      setTops({
        layout: centro("layout"),
        momentos: centro("momentos"),
        selo: feed + 55,
        video: feed + 200,
        comentarios: feed + 400,
      });
    };

    medir();
    const t = window.setTimeout(medir, 400); // depois de imagens e fontes
    window.addEventListener("resize", medir);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", medir);
    };
  }, []);

  const pinned = useMemo(
    () => (pinnedId ? feedPosts.find((p) => p.id === pinnedId) : undefined),
    [pinnedId],
  );

  const hotspots = useMemo(() => cartoes(tops), [tops]);

  return (
    <Section id="prototipo" tight>
      <div>
        <Kicker>Experimente antes de existir</Kicker>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Esta é a tela de uma conta comum.
        </h2>
        <p className="mt-2 max-w-3xl text-lg leading-relaxed text-text-soft">
          Role o mural, troque a exibição, assista a um vídeo. As explicações à direita apontam para o
          que está acontecendo — clique para entender o mecanismo por trás.
        </p>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,372px)_minmax(0,1fr)] lg:gap-16">
          <div ref={telefone} className="relative mx-auto w-full max-w-[372px]">
            <PhoneShell
              overlay={
                <>
                  {pip && <PipWindow video={pip} onIrPara={() => irParaPostagem(pip.id)} />}
                  {pinned?.media ? (
                  <MiniPlayer
                    src={pinned.media.src}
                    poster={pinned.media.poster}
                    onClose={() => setPinnedId(null)}
                    onExpand={() => setPinnedId(null)}
                  />
                ) : null}
                </>
              }
            >
              <AppFrame
                bare
                compact
                extra={
                  <>
                    <span data-hotspot="layout">
                      <LayoutSwitcher layout={layout} onChange={setLayout} />
                    </span>
                    <SoundButton />
                  </>
                }
              >
                <StoryRow me={anaMaria} people={stories} />
                <Feed
                  layout={layout}
                  pinnedId={pinnedId}
                  onPin={(id) => setPinnedId((atual) => (atual === id ? null : id))}
                />
              </AppFrame>
            </PhoneShell>

            <p className="mt-3 text-center text-[0.76rem] text-text-faint">
              Protótipo · {feedPosts.length} postagens · contas e histórias inventadas
            </p>
          </div>

          <Explanations hotspots={hotspots} />
          <div className="lg:hidden">
            <Explanations hotspots={hotspots} compacto />
          </div>
        </div>
      </div>
    </Section>
  );
}
