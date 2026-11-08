/**
 * Anotação de margem: um balão com linha em zigzag e seta.
 *
 * Regra editorial: anotação **não** é interface. Ela fica fora da moldura do
 * aplicativo, para que ninguém confunda com um botão do produto.
 */
export function Annotation({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="absolute top-6 -right-[196px] hidden w-[186px] items-center text-brand-ink no-underline xl:flex"
    >
      <svg viewBox="0 0 52 26" className="h-6.5 w-13 shrink-0 text-brand" aria-hidden="true">
        <path d="M51 13 H44 L37 3 L30 23 L23 3 L16 13 H11" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 6 L10 13 L18 20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="rounded-full border-[1.5px] border-brand bg-surface px-3 py-1.5 text-[0.8rem] font-bold whitespace-nowrap shadow-sm transition hover:bg-brand hover:text-white">
        {label}
      </span>
    </a>
  );
}
