import { useLocation } from "react-router-dom";
import { Kicker, Section } from "../components/ui";

/** Placeholder das páginas ainda não migradas. Não vai para produção. */
export function Soon() {
  const { pathname } = useLocation();
  return (
    <Section>
      <Kicker>em migração</Kicker>
      <h1 className="text-3xl font-extrabold tracking-tight">Esta página ainda não foi migrada</h1>
      <p className="mt-3 max-w-2xl text-lg text-text-soft">
        A rota <code className="rounded bg-surface-2 px-1.5 py-0.5 text-text">{pathname}</code>{" "}
        existe na versão antiga em HTML e será portada para React na próxima etapa. O site
        publicado continua sendo o antigo até a migração fechar.
      </p>
      <p className="mt-6">
        <a className="font-semibold text-brand hover:underline" href="/">
          ← Voltar para a página inicial
        </a>
      </p>
    </Section>
  );
}
