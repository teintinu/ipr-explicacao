import type { ReactNode } from "react";
import type { Persona } from "../../data/personas";
import { Avatar } from "../Avatar";

const tagTone = {
  council: "bg-brand-soft text-brand-ink",
  group: "bg-accent-soft text-accent",
  private: "bg-surface-3 text-text-soft",
  minor: "bg-warn-soft text-warn",
} as const;

function Tag({ tone, children }: { tone: keyof typeof tagTone; children: ReactNode }) {
  return (
    <span className={`rounded-md px-1.5 py-0.5 text-[0.68rem] font-extrabold tracking-wide uppercase ${tagTone[tone]}`}>
      {children}
    </span>
  );
}

export interface PostCardProps {
  persona: Persona;
  time: string;
  visibility: string;
  text: string;
  tags?: Array<{ tone: keyof typeof tagTone; label: string }>;
  media?: ReactNode;
  /** Parecer de conta em que a leitora confia — aparece como destaque. */
  highlight?: ReactNode;
  children?: ReactNode;
}

/**
 * Um post do feed. O componente é o mesmo para conta pessoal, grupo e empresa —
 * o que muda são as etiquetas e o conteúdo.
 */
export function PostCard({
  persona,
  time,
  visibility,
  text,
  tags = [],
  media,
  highlight,
  children,
}: PostCardProps) {
  return (
    <article className="grid gap-3 rounded-2xl border border-line bg-surface p-4">
      <header className="flex items-center gap-3">
        <Avatar persona={persona} />
        <div className="min-w-0">
          <p className="flex flex-wrap items-center gap-1.5 text-[0.95rem] font-bold">
            {persona.name}
            {tags.map((tag) => (
              <Tag key={tag.label} tone={tag.tone}>
                {tag.label}
              </Tag>
            ))}
          </p>
          <p className="text-[0.78rem] text-text-faint">
            {persona.handle} · {time} · {visibility}
          </p>
        </div>
      </header>

      <p className="text-[0.95rem] leading-relaxed">{text}</p>

      {media}

      {highlight}

      {children}
    </article>
  );
}

export function PostActions({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-t border-line pt-2.5 text-[0.84rem] text-text-faint">
      {children}
    </div>
  );
}
