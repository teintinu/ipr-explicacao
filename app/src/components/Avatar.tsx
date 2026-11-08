import type { Persona } from "../data/personas";

/**
 * Só o que foge do padrão ganha marca.
 *
 * Todo mundo na rede é autenticado — então a verificação recente não vira selo.
 * A bolinha aparece apenas quando há o que sinalizar: laranja para verificação
 * antiga, vermelha para o caso crítico.
 */
const badgeClass: Record<"yellow" | "red", string> = {
  yellow: "bg-[#e8791f]",
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
  const sinal = verification.state === "yellow" || verification.state === "red" ? verification.state : null;
  const hasBadge = showVerification && sinal !== null;
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

      {hasBadge && sinal && (
        <span
          className={`absolute -right-0.5 -bottom-0.5 block rounded-full ring-2 ring-surface ${badgeClass[sinal]} ${badgeSize[size]}`}
          title={verification.label}
        >
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
  // Verificação recente é o padrão da rede: não vira selo.
  if (state === "green") {
    return <span className="text-[0.7rem] text-text-faint">{label}</span>;
  }

  const tone = state === "yellow" ? "bg-[#fdf0dc] text-[#b45309]" : "bg-danger-soft text-danger";

  return (
    <span className={`rounded-md px-1.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide ${tone}`}>
      {label}
    </span>
  );
}
