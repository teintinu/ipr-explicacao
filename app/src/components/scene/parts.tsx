import type { ReactNode } from "react";

export type Tone = "brand" | "accent" | "warn" | "danger" | "plain";

const toneClass = (tone: Tone) => (tone === "plain" ? "node" : `node node--${tone}`);

export function Marker({ id }: { id: string }) {
  return (
    <defs>
      <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--upr-line-strong)" />
      </marker>
    </defs>
  );
}

export function Box({
  x,
  y,
  w,
  h,
  tone = "plain",
  lines,
  at,
  mono,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  tone?: Tone;
  lines: Array<string | ReactNode>;
  at: number;
  /** Renderiza a última linha como monoespaçada. */
  mono?: boolean;
}) {
  const cx = x + w / 2;
  const total = lines.length;
  const startY = y + h / 2 - ((total - 1) * 19) / 2 + 5;

  return (
    <g data-at={at}>
      <rect x={x} y={y} width={w} height={h} rx={14} className={toneClass(tone)} />
      {lines.map((line, i) => {
        const isLast = i === total - 1;
        const cls = i === 0 && total > 1 ? "lbl" : mono && isLast ? "lbl-mono" : "lbl-sm";
        return (
          <text key={i} x={cx} y={startY + i * 19} textAnchor="middle" className={cls}>
            {line}
          </text>
        );
      })}
    </g>
  );
}

export function CircleNode({
  cx,
  cy,
  r,
  tone = "plain",
  label,
  sub,
  at,
}: {
  cx: number;
  cy: number;
  r: number;
  tone?: Tone;
  label: string;
  sub?: string;
  at: number;
}) {
  return (
    <g data-at={at}>
      <circle cx={cx} cy={cy} r={r} className={toneClass(tone)} />
      <text x={cx} y={cy + (sub ? -2 : 5)} textAnchor="middle" className="lbl">
        {label}
      </text>
      {sub && (
        <text x={cx} y={cy + 15} textAnchor="middle" className="lbl-sm">
          {sub}
        </text>
      )}
    </g>
  );
}

export function Arrow({
  d,
  tone = "brand",
  marker,
  at,
  dashed = false,
}: {
  d: string;
  tone?: "brand" | "accent" | "warn" | "danger";
  marker: string;
  at: number;
  dashed?: boolean;
}) {
  return (
    <g data-at={at}>
      <path
        className={`edge edge--${tone}`}
        d={d}
        markerEnd={`url(#${marker})`}
        strokeDasharray={dashed ? "5 5" : undefined}
      />
    </g>
  );
}

export function Label({
  x,
  y,
  children,
  at,
  mono = false,
}: {
  x: number;
  y: number;
  children: ReactNode;
  at: number;
  mono?: boolean;
}) {
  return (
    <g data-at={at}>
      <text x={x} y={y} textAnchor="middle" className={mono ? "lbl-mono" : "lbl-sm"}>
        {children}
      </text>
    </g>
  );
}
