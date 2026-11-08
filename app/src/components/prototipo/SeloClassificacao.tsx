import type { Rating } from "../../data/feed";

/**
 * Classificação indicativa, discreta: a idade escrita na cor da classificação,
 * sem caixa nem fundo. Livre é o "L" em verde.
 */
const cor: Record<Rating, string> = {
  0: "text-[#2e9e4f]", // L
  10: "text-[#1f6fd0]", // azul
  12: "text-[#b07d1a]", // âmbar
  14: "text-[#e8791f]", // laranja
  16: "text-[#d32f2f]", // vermelho
  18: "text-text", // preto (branco no tema escuro)
};

export function SeloClassificacao({ rating, className = "" }: { rating: Rating; className?: string }) {
  // Livre é o padrão: não ocupa espaço com um "L" verde.
  if (rating === 0) return null;
  return (
    <span
      className={`shrink-0 text-[0.68rem] leading-none font-extrabold ${cor[rating]} ${className}`}
      title={`Classificação indicativa: ${rating} anos`}
      aria-label={`Classificação ${rating} anos`}
    >
      {rating}
    </span>
  );
}
