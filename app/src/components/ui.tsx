import type { ReactNode } from "react";

export function Section({
  id,
  alt = false,
  tight = false,
  children,
}: {
  id?: string;
  alt?: boolean;
  tight?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${alt ? "bg-bg-alt" : ""} ${tight ? "py-10 md:py-12" : "py-14 md:py-20"}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5">{children}</div>
    </section>
  );
}

export function Kicker({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <p
      className={`mb-3 flex items-center gap-2.5 text-[0.72rem] font-extrabold tracking-[0.14em] text-brand uppercase ${center ? "justify-center" : ""}`}
    >
      <span className="h-px w-5 bg-brand/60" aria-hidden="true" />
      {children}
    </p>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="max-w-3xl text-lg leading-relaxed text-text-soft md:text-xl">{children}</p>;
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl space-y-4 text-[1.02rem] leading-relaxed text-text-soft [&_strong]:text-text">
      {children}
    </div>
  );
}

type Tone = "info" | "ok" | "warn" | "danger";

const toneClass: Record<Tone, string> = {
  info: "border-brand/30 bg-brand-soft/50",
  ok: "border-accent/30 bg-accent-soft/50",
  warn: "border-warn/30 bg-warn-soft/60",
  danger: "border-danger/30 bg-danger-soft/50",
};

const toneIcon: Record<Tone, ReactNode> = {
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <circle cx="12" cy="7.8" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  ok: <path d="m4.5 12.5 5 5 10-11" />,
  warn: (
    <>
      <path d="M12 3.5 2.5 20.5h19L12 3.5Z" />
      <path d="M12 10v4.5" />
      <circle cx="12" cy="17.6" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  danger: (
    <>
      <path d="M12 4 2.8 20h18.4L12 4Z" />
      <path d="M12 10v4.4" />
      <circle cx="12" cy="17.6" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
};

/** Aviso destacado. O título é opcional; o corpo aceita qualquer conteúdo. */
export function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: Tone;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className={`grid grid-cols-[26px_1fr] gap-4 rounded-2xl border p-5 ${toneClass[tone]}`}>
      <svg
        viewBox="0 0 24 24"
        className="mt-0.5 h-6 w-6 text-text-soft"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {toneIcon[tone]}
      </svg>
      <div className="space-y-2 text-[0.98rem] leading-relaxed text-text-soft [&_strong]:text-text">
        {title && (
          <p className="text-[0.78rem] font-extrabold tracking-[0.08em] text-text uppercase">
            {title}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

export interface TldrItem {
  title: ReactNode;
  note: ReactNode;
}

/** Resumo com a explicação embaixo de cada linha. */
export function Tldr({ title, items }: { title: string; items: TldrItem[] }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface to-surface-2 p-6 shadow-sm md:p-8">
      <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand to-accent" aria-hidden="true" />
      <h2 className="text-[0.8rem] font-extrabold tracking-[0.1em] text-text-faint uppercase">
        {title}
      </h2>
      <ul className="mt-4 space-y-4">
        {items.map((item, i) => (
          <li key={i} className="relative pl-5">
            <span className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            <p className="font-semibold text-text">{item.title}</p>
            <span className="step-note">{item.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Duas caixas lado a lado: o contraste explícito. */
export function Compare({
  left,
  right,
  tone = "bad-good",
}: {
  left: { title: string; items: ReactNode[] };
  right: { title: string; items: ReactNode[] };
  tone?: "bad-good" | "neutral";
}) {
  const leftTone =
    tone === "bad-good" ? "border-danger/25 bg-danger-soft/30" : "border-line bg-surface";
  const rightTone =
    tone === "bad-good" ? "border-accent/25 bg-accent-soft/30" : "border-line bg-surface";

  const Box = ({
    data,
    classe,
  }: {
    data: { title: string; items: ReactNode[] };
    classe: string;
  }) => (
    <div className={`rounded-2xl border p-5 ${classe}`}>
      <h3 className="mb-3 text-[0.95rem] font-bold text-text">{data.title}</h3>
      <ul className="space-y-2 text-[0.95rem] leading-relaxed text-text-soft">
        {data.items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-current opacity-40" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Box data={left} classe={leftTone} />
      <Box data={right} classe={rightTone} />
    </div>
  );
}
