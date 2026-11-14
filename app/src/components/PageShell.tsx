import { useEffect, useState, type ReactNode } from "react";

const nav = [
  { href: "/", label: "Início" },
  { href: "/por-dentro", label: "Por dentro" },
  { href: "/identidade", label: "Identidade" },
  { href: "/seguranca", label: "Segurança" },
  { href: "/conversas", label: "Conversas" },
  { href: "/diario", label: "Diário" },
  { href: "/chamadas", label: "Chamadas" },
  { href: "/confianca", label: "Confiança" },
  { href: "/provedores", label: "Provedores" },
  { href: "/soberania", label: "Soberania" },
];

const footerEntender = [
  { href: "/por-dentro", label: "Por dentro" },
  { href: "/identidade", label: "Identidade" },
  { href: "/seguranca", label: "Segurança" },
  { href: "/conversas", label: "Conversas" },
  { href: "/diario", label: "Diário" },
];

const footerAjuda = [
  { href: "/chamadas", label: "Chamadas" },
  { href: "/confianca", label: "Confiança e remoção" },
  { href: "/provedores", label: "Provedores" },
  { href: "/soberania", label: "Soberania digital" },
  { href: "/perguntas", label: "Perguntas frequentes" },
  { href: "/glossario", label: "Glossário" },
];

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("upr-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("upr-theme", theme);
  }, [theme]);

  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

export function PageShell({ page, children }: { page: string; children: ReactNode }) {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-5 py-3">
          <a href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
            <svg viewBox="0 0 32 32" className="h-7 w-7 text-brand" aria-hidden="true">
              <rect width="32" height="32" rx="9" fill="currentColor" opacity=".12" />
              <circle cx="16" cy="16" r="3.7" fill="currentColor" />
              <circle cx="7.5" cy="8.5" r="2" fill="currentColor" opacity=".6" />
              <circle cx="24.5" cy="8.5" r="2" fill="currentColor" opacity=".6" />
              <circle cx="7.5" cy="23.5" r="2" fill="currentColor" opacity=".6" />
              <circle cx="24.5" cy="23.5" r="2" fill="currentColor" opacity=".6" />
            </svg>
            <span className="leading-none">
              UPR
              <span className="block text-[0.62rem] font-semibold tracking-[0.18em] text-text-faint uppercase">
                a rede explicada
              </span>
            </span>
          </a>

          <nav className="ml-auto hidden items-center gap-0.5 lg:flex" aria-label="Navegação principal">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-lg px-2.5 py-1.5 text-[0.875rem] font-medium transition hover:bg-surface-2 hover:text-text ${
                  page === item.href ? "bg-surface-2 text-text" : "text-text-soft"
                }`}
                aria-current={page === item.href ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggle}
            className="ml-auto grid h-9 w-9 place-items-center rounded-xl border border-line text-text-soft transition hover:bg-surface-2 hover:text-text lg:ml-0"
            aria-label={theme === "dark" ? "Usar tema claro" : "Usar tema escuro"}
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
            </svg>
          </button>
        </div>
      </header>

      <main id="conteudo">{children}</main>

      <footer className="border-t border-line bg-bg-alt">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <p className="text-[0.95rem] leading-relaxed text-text-soft">
              <strong className="text-text">UPR</strong> — uma rede social que tenta conciliar
              duas coisas que costumam se excluir: <em>anonimato para quem age de boa-fé</em> e{" "}
              <em>responsabilidade para quem comete crime</em>.
            </p>
            <p className="mt-2 text-[0.85rem] text-text-faint">
              Explicação em linguagem simples, para quem não é de TI.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[0.8rem] font-extrabold tracking-[0.1em] text-text-faint uppercase">
              Entender
            </h2>
            <ul className="space-y-1.5 text-[0.92rem]">
              {footerEntender.map((i) => (
                <li key={i.href}>
                  <a className="text-text-soft hover:text-brand" href={i.href}>
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-[0.8rem] font-extrabold tracking-[0.1em] text-text-faint uppercase">
              Ajuda
            </h2>
            <ul className="space-y-1.5 text-[0.92rem]">
              {footerAjuda.map((i) => (
                <li key={i.href}>
                  <a className="text-text-soft hover:text-brand" href={i.href}>
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-between gap-2 border-t border-line px-5 py-4 text-[0.8rem] text-text-faint">
          <span>Conteúdo educativo. Não é aconselhamento jurídico.</span>
          <span>© {new Date().getFullYear()} UPR</span>
        </div>
      </footer>
    </div>
  );
}
