import { useCallback, useEffect, useRef, useState } from "react";
import { feedPosts } from "../../data/feed-posts";
import { byId, tetoPorIdade } from "../../data/personas";
import { usarLeitor } from "../../lib/conta";
import { FeedPostCard } from "./FeedPost";
import type { FeedLayout } from "./LayoutSwitcher";

const PASSO = 10;

/** Lista com rolagem própria e carregamento em lotes, como um feed de verdade. */
export function Feed({
  layout,
  pinnedId,
  onPin,
}: {
  layout: FeedLayout;
  pinnedId: string | null;
  onPin: (id: string) => void;
}) {
  const leitor = byId(usarLeitor());
  const teto = tetoPorIdade(leitor.age);
  const permitidas = feedPosts.filter((p) => p.rating <= teto);
  const ocultas = feedPosts.length - permitidas.length;

  const [visiveis, setVisiveis] = useState(PASSO);
  const [carregando, setCarregando] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisiveis(PASSO);
    ref.current?.scrollTo({ top: 0 });
  }, [layout]);

  const aoRolar = useCallback(() => {
    const el = ref.current;
    if (!el || carregando) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 280) {
      if (visiveis >= permitidas.length) return;
      setCarregando(true);
      window.setTimeout(() => {
        setVisiveis((v) => Math.min(v + PASSO, permitidas.length));
        setCarregando(false);
      }, 260);
    }
  }, [carregando, visiveis, permitidas.length]);

  return (
    <div
      ref={ref}
      data-hotspot="feed"
      onScroll={aoRolar}
      className={`feed-scroll min-h-0 flex-1 overflow-y-auto bg-bg-alt ${
        layout === "focado" ? "snap-y snap-mandatory" : ""
      }`}
    >
      {ocultas > 0 && (
        <p className="border-b border-line bg-warn-soft/50 px-3 py-2 text-[0.74rem] leading-snug text-warn">
          {ocultas} postagen{ocultas === 1 ? "" : "s"} acima da classificação de {leitor.name} —
          conta restrita só vê até {teto}.
        </p>
      )}

      <div className={layout === "focado" ? "flex flex-col" : "pb-4"}>
        {permitidas.slice(0, visiveis).map((post) => (
          <div key={post.id} id={`post-${post.id}`} className={layout === "focado" ? "snap-start" : ""}>
            <FeedPostCard
              post={post}
              layout={layout}
              pinned={pinnedId === post.id}
              onPin={() => onPin(post.id)}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 py-5 text-[0.78rem] text-text-faint">
        {visiveis < permitidas.length ? (
          <>
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-line border-t-brand" />
            carregando mais…
          </>
        ) : (
          <span>fim do mural de demonstração · {feedPosts.length} posts</span>
        )}
      </div>
    </div>
  );
}
