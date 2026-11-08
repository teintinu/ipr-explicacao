import type { Persona, VerificationState } from "../data/personas";

const badgeClass: Record<Exclude<VerificationState, "none">, string> = {
  green: "bg-accent",
  yellow: "bg-warn",
  red: "bg-danger",
};

const sizeClass = {
  sm: "h-8 w-8",
  md: "h-11 w-11",
  lg: "h-14 w-14",
};

const badgeSize = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export interface AvatarProps {
  persona: Persona;
  size?: keyof typeof sizeClass;
  /** Mostra o selo de verificação no canto do avatar. */
  showVerification?: boolean;
  className?: string;
}

/**
 * Avatar com o selo de verificação embutido.
 *
 * O selo fica **no avatar**, não ao lado do nome: a cor diz há quanto tempo a
 * identidade foi conferida (verde < 1 ano, amarelo 1–5, vermelho > 5).
 *
 * Grupo tem canto arredondado em vez de círculo — é o único sinal de que aquela
 * conta não é uma pessoa.
 */
export function Avatar({
  persona,
  size = "md",
  showVerification = true,
  className = "",
}: AvatarProps) {
  const { verification, avatar } = persona;
  const hasBadge = showVerification && verification.state !== "none";
  const shape = persona.kind === "group" ? "rounded-xl" : "rounded-full";

  return (
    <span className={`relative inline-flex shrink-0 ${className}`}>
      <img
        src={avatar.src}
        alt=""
        width={192}
        height={192}
        loading="lazy"
        className={`${sizeClass[size]} ${shape} bg-surface-3 object-cover ring-1 ring-line`}
      />

      {hasBadge && (
        <span
          className={`absolute -right-0.5 -bottom-0.5 grid place-items-center rounded-full ring-2 ring-surface ${badgeClass[verification.state as Exclude<VerificationState, "none">]} ${badgeSize[size]}`}
          title={verification.label}
        >
          <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12.5 4 4 10-10" />
          </svg>
          <span className="sr-only">{verification.label}</span>
        </span>
      )}
    </span>
  );
}

/** Selo textual, para usar quando não há espaço para o avatar. */
export function VerificationTag({ persona }: { persona: Persona }) {
  const { state, label } = persona.verification;
  if (state === "none") {
    return (
      <span className="rounded-md border border-line px-1.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide text-text-faint">
        sem selo
      </span>
    );
  }
  const tone =
    state === "green"
      ? "bg-accent-soft text-accent"
      : state === "yellow"
        ? "bg-warn-soft text-warn"
        : "bg-danger-soft text-danger";

  return (
    <span className={`rounded-md px-1.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide ${tone}`}>
      {label}
    </span>
  );
}
