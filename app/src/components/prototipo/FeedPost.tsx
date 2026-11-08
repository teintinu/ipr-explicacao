import { Avatar } from "../Avatar";
import { usarEleitos } from "../../lib/confianca";
import { abrirPerfil } from "../../lib/navegacao";
import { SeloClassificacao } from "./SeloClassificacao";
import { byId } from "../../data/personas";
import type { FeedPost } from "../../data/feed";
import { ratioClass } from "../../data/feed";
import { VideoPlayer } from "./VideoPlayer";
import type { FeedLayout } from "./LayoutSwitcher";

/** 26.000 → "26K"; 3.400 → "3,4K"; 15.000.000 → "15M". */
export function curto(n: number): string {
  const arredondar = (v: number) => {
    const r = Math.round(v * 10) / 10;
    return Number.isInteger(r) ? String(r) : r.toLocaleString("pt-BR");
  };
  if (n < 1_000) return String(n);
  if (n < 1_000_000) return `${arredondar(n / 1_000)}K`;
  if (n < 1_000_000_000) return `${arredondar(n / 1_000_000)}M`;
  return `${arredondar(n / 1_000_000_000)}B`;
}

function Acoes({ post, compacto = false }: { post: FeedPost; compacto?: boolean }) {
  return (
    <div className={`flex items-center gap-4 text-text-faint ${compacto ? "text-[0.72rem]" : "text-[0.8rem]"}`}>
      <span className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20.3 4.8 13a4.6 4.6 0 0 1 6.5-6.5l.7.7.7-.7A4.6 4.6 0 0 1 19.2 13Z" /></svg>
        {curto(post.likes)}
      </span>
      <a
        href="/por-dentro"
        data-hotspot="audiencia"
        title="Audiência — a rede não tem servidor central"
        className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded transition hover:text-brand"
        aria-label={`${curto(post.views)} pessoas viram. Como a rede funciona`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z" />
          <circle cx="12" cy="12" r="3.2" />
        </svg>
        {curto(post.views)}
      </a>
      <span className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.6 9.6 0 0 1-3.2-.6L3 21l1.7-4.9A8.3 8.3 0 0 1 3.6 11.5a8.4 8.4 0 0 1 9-8.4 8.4 8.4 0 0 1 8.4 8.4Z" /></svg>
        {curto(post.comments.length)}
      </span>
      <span className="ml-auto flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 12v7h16v-7M12 16V3M8 7l4-4 4 4" /></svg>
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 5h14v14l-7-4-7 4z" /></svg>
        <span data-hotspot="classificacao"><SeloClassificacao rating={post.rating} /></span>
      </span>
    </div>
  );
}

/**
 * Só **alerta** de conta confiável sobe para o topo.
 *
 * Um comentário comum da mesma conta — uma pergunta, uma piada, uma opinião —
 * fica na ordem normal, como qualquer outro. É o autor do comentário que
 * decide se aquilo é aviso ou conversa, não o leitor.
 */
/** Marcado como alerta por quem escreveu. */
function ehAlerta(c: { alerta?: boolean }) {
  return c.alerta === true;
}

/** Ícone de alerta — sem palavra, com destaque só se a conta foi eleita. */
function SinalAlerta() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mr-1 inline-block h-3.5 w-3.5 shrink-0 text-warn"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3.5 2.5 20.5h19L12 3.5Z" />
      <path d="M12 10v4.4" />
      <circle cx="12" cy="17.4" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}


function Comentarios({ post, limite = 2 }: { post: FeedPost; limite?: number }) {
  const eleitos = usarEleitos();
  const destaca = (c: { authorId: string; alerta?: boolean }) =>
    ehAlerta(c) && eleitos.includes(c.authorId);

  // Alerta de conta eleita sobe; alerta de quem não foi eleito fica na ordem,
  // só com o ícone. Comentário comum nunca sobe.
  const ordenados = [...post.comments].sort((a, b) => Number(destaca(b)) - Number(destaca(a)));
  const vistos = ordenados.slice(0, limite);

  return (
    <div className="space-y-1.5">
      {vistos.map((c, i) => {
        const autor = byId(c.authorId);
        const alerta = ehAlerta(c);
        const destaque = destaca(c);
        return (
          <div
            key={i}
            data-hotspot="alerta"
            className={`flex items-start gap-2 rounded-lg px-1.5 py-1 ${
              destaque ? "bg-warn-soft/60" : ""
            }`}
          >
            <Avatar persona={autor} size="sm" />
            <div className="min-w-0">
              <p className="text-[0.8rem] leading-snug">
                <button type="button" onClick={() => abrirPerfil(autor.id)} className="font-semibold hover:underline">
                {autor.name.split(" ")[0]}
              </button>{" "}
                {alerta && <SinalAlerta />}
                <span className="text-text-soft">{c.text}</span>
              </p>
            </div>
          </div>
        );
      })}
      {post.comments.length > limite && (
        <p className="text-[0.76rem] font-semibold text-text-faint">
          ver os comentários
        </p>
      )}
    </div>
  );
}

function Midia({ post, onPin, pinned, compacto = false }: { post: FeedPost; onPin: () => void; pinned: boolean; compacto?: boolean }) {
  if (!post.media) return null;
  const { src, poster, ratio, duration } = post.media;

  if (post.kind === "video") {
    return (
      <div className="relative">
        <VideoPlayer postId={post.id} src={src} poster={poster} ratio={ratio} pinned={pinned} onPin={onPin} compact={compacto} />
        {duration && (
          <span className="pointer-events-none absolute top-2 right-2 rounded bg-black/55 px-1.5 py-0.5 text-[0.64rem] font-semibold text-white">
            {duration}s
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={poster}
      alt=""
      loading="lazy"
      className={`w-full object-cover ${ratioClass[ratio]} ${compacto ? "rounded-lg" : "rounded-xl"}`}
    />
  );
}

/* ------------------------------------------------------------------ */

export function FeedPostCard({ post, layout, onPin, pinned }: { post: FeedPost; layout: FeedLayout; onPin: () => void; pinned: boolean }) {
  const autor = byId(post.authorId);
  const somenteTexto = !post.media;

  if (layout === "resumido") {
    return (
      <article className="border-b border-line px-3 py-2.5">
        <div className="flex items-start gap-2.5">
          <Avatar persona={autor} size="sm" />
          <div className="min-w-0 flex-1">
            <div className="flex min-w-0 items-center gap-1.5">
              <button
                type="button"
                onClick={() => abrirPerfil(autor.id)}
                data-hotspot="nome"
                className="truncate text-[0.8rem] font-semibold hover:underline"
              >
                {autor.name}
              </button>
              <span className="shrink-0 text-[0.72rem] text-text-faint">· {post.time}</span>
            </div>
            <p className="mt-0.5 line-clamp-3 text-[0.85rem] leading-snug text-text-soft">{post.text}</p>
            <Acoes post={post} compacto />
          </div>
          {post.media && (
            <img src={post.media.poster} alt="" loading="lazy" className="h-16 w-16 shrink-0 rounded-lg object-cover" />
          )}
        </div>
      </article>
    );
  }

  if (layout === "focado") {
    if (somenteTexto) {
      return (
        <article className="flex min-h-[420px] flex-col justify-center border-b border-line bg-gradient-to-br from-brand-soft/60 to-accent-soft/40 px-5 py-8">
          <p className="text-[1.05rem] leading-snug font-medium">{post.text}</p>
          <div className="mt-4 flex items-center gap-2">
            <Avatar persona={autor} size="sm" />
            <button
              type="button"
              onClick={() => abrirPerfil(autor.id)}
              className="text-[0.8rem] font-semibold hover:underline"
            >
              {autor.name}
            </button>
            <span className="text-[0.74rem] text-text-faint">{post.time}</span>
          </div>
          <div className="mt-3">
            <Acoes post={post} />
          </div>
        </article>
      );
    }
    return (
      <article className="relative border-b border-line bg-black">
        <div className="relative">
          <Midia post={post} onPin={onPin} pinned={pinned} compacto />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-3 pt-10 pb-3">
            <p className="text-[0.86rem] leading-snug text-white">{post.text}</p>
            <div className="mt-2 flex items-center gap-2">
              <Avatar persona={autor} size="sm" />
              <button
                type="button"
                onClick={() => abrirPerfil(autor.id)}
                className="pointer-events-auto text-[0.78rem] font-semibold text-white hover:underline"
              >
                {autor.name}
              </button>
              <span className="text-[0.72rem] text-white/70">{post.time}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-surface px-3 py-2 text-text-faint">
          <span className="flex items-center gap-1 text-[0.8rem]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20.3 4.8 13a4.6 4.6 0 0 1 6.5-6.5l.7.7.7-.7A4.6 4.6 0 0 1 19.2 13Z" /></svg>
            {curto(post.likes)}
          </span>
          <span className="flex items-center gap-1 text-[0.8rem]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.6 9.6 0 0 1-3.2-.6L3 21l1.7-4.9A8.3 8.3 0 0 1 3.6 11.5a8.4 8.4 0 0 1 9-8.4 8.4 8.4 0 0 1 8.4 8.4Z" />
            </svg>
            {curto(post.comments.length)}
          </span>
          <a
            href="/por-dentro"
            data-hotspot="audiencia"
            title="Audiência — a rede não tem servidor central"
            className="flex shrink-0 items-center gap-1 whitespace-nowrap text-[0.8rem] hover:text-brand"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z" />
              <circle cx="12" cy="12" r="3.2" />
            </svg>
            {curto(post.views)}
          </a>
          <span data-hotspot="classificacao"><SeloClassificacao rating={post.rating} /></span>
        </div>
      </article>
    );
  }

  // clássico
  if (somenteTexto) {
    const cor = post.kind === "opinion" ? "from-brand-soft/70 to-brand-soft/20" : post.kind === "news" ? "from-accent-soft/70 to-accent-soft/20" : "from-surface-2 to-surface";
    return (
      <article className={`mx-3 my-2.5 rounded-2xl border border-line bg-gradient-to-br p-4 shadow-sm ${cor}`}>
        <header className="flex items-center gap-2">
          <Avatar persona={autor} size="sm" />
          <div className="min-w-0">
            <p className="flex items-center truncate text-[0.82rem] font-semibold">
              <button type="button" onClick={() => abrirPerfil(autor.id)} className="hover:underline">{autor.name}</button>
            </p>
            <p className="text-[0.7rem] text-text-faint">{post.time}</p>
          </div>
          {post.kind === "news" && (
            <span className="ml-auto rounded bg-accent-soft px-1.5 py-0.5 text-[0.6rem] font-extrabold tracking-wide text-accent uppercase">
              notícia
            </span>
          )}
        </header>
        <p className="mt-2.5 text-[1.02rem] leading-snug font-medium whitespace-pre-line">{post.text}</p>
        <div className="mt-3">
          <Acoes post={post} />
        </div>
        <div className="mt-2.5 border-t border-line/70 pt-2.5">
          <Comentarios post={post} limite={2} />
        </div>
      </article>
    );
  }

  return (
    <article className="mx-3 my-2.5 rounded-2xl border border-line bg-surface shadow-sm">
      <header className="flex items-center gap-2.5 px-3 py-2.5">
        <Avatar persona={autor} size="sm" />
        <div className="min-w-0">
          <p className="flex items-center truncate text-[0.85rem] font-semibold">
            <button type="button" onClick={() => abrirPerfil(autor.id)} className="hover:underline">{autor.name}</button>
          </p>
          <p className="text-[0.72rem] text-text-faint">{post.time} · público</p>
        </div>
      </header>
      <p className="px-3 pb-2.5 text-[0.9rem] leading-snug">{post.text}</p>
      <div className="px-1.5">
        <Midia post={post} onPin={onPin} pinned={pinned} />
      </div>
      <div className="px-3 pt-2">
        <Acoes post={post} />
      </div>
      <div className="border-t border-line/70 px-3 pt-2 pb-3">
        <Comentarios post={post} limite={2} />
      </div>
    </article>
  );
}
