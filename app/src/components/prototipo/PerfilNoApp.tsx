import { Avatar, VerificationTag } from "../Avatar";
import { feedPosts } from "../../data/feed-posts";
import { byId, ehRestrita, personas, tetoPorIdade } from "../../data/personas";
import { alternarEleicao, usarEleitos } from "../../lib/confianca";
import { fecharPerfil } from "../../lib/navegacao";
import { alternarRelacao, relacaoDe, usarVersaoRelacoes } from "../../lib/relacoes";
import { alternarCanal, usarVersaoContatos, vinculoDe } from "../../lib/contatos";
import { usarLeitor } from "../../lib/conta";
import { useState } from "react";
import { usarLayout } from "../../lib/exibicao";
import { FeedPostCard } from "./FeedPost";

/** Tela de perfil dentro do celular, com voltar. */
export function PerfilNoApp({ id }: { id: string }) {
  const eleitos = usarEleitos();
  const leitor = byId(usarLeitor());
  const layout = usarLayout();
  const tutelados = personas.filter((p) => p.guardian === persona.id);
  usarVersaoRelacoes();
  const [menu, setMenu] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  const persona = byId(id);
  const rel = relacaoDe(persona.id);
  usarVersaoContatos();
  const contato = vinculoDe(leitor.id, persona.id);
  const eleita = eleitos.includes(persona.id);
  const restrita = ehRestrita(persona);
  const dela = feedPosts.filter((p) => p.authorId === persona.id);
  // O que o leitor pode ver depende da idade do leitor, não da conta visitada.
  const tetoLeitor = tetoPorIdade(leitor.age);
  const visiveis = dela.filter((p) => p.rating <= tetoLeitor);

  return (
    <div className="min-h-0 flex-1 overflow-y-auto bg-bg-alt">
      <div className="sticky top-0 z-10 flex items-center gap-2 border-b border-line bg-surface px-2 py-2">
        <button
          type="button"
          onClick={fecharPerfil}
          aria-label="Voltar ao mural"
          className="grid h-8 w-8 place-items-center rounded-lg text-text-soft hover:bg-surface-2 hover:text-text"
        >
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <span className="text-[0.95rem] font-bold">{persona.name}</span>
        <span className="ml-auto text-[0.72rem] text-text-faint">
          {dela.length} postagens · {layout}
        </span>

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setMenu((m) => !m);
              setSubmenu(false);
            }}
            aria-haspopup="menu"
            aria-expanded={menu}
            aria-label="Mais opções desta conta"
            className="grid h-8 w-8 place-items-center rounded-lg text-text-soft hover:bg-surface-2 hover:text-text"
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor">
              <circle cx="5" cy="12" r="1.7" />
              <circle cx="12" cy="12" r="1.7" />
              <circle cx="19" cy="12" r="1.7" />
            </svg>
          </button>

          {menu && <div className="fixed inset-0 z-20" onClick={() => setMenu(false)} aria-hidden="true" />}

          {menu && (
            <div
              role="menu"
              className="absolute top-9 right-0 z-30 w-[292px] overflow-hidden rounded-xl border border-line bg-surface shadow-xl"
            >
              <ItemMenu
                rotulo="Ver no mural"
                ativo={!!contato.mural}
                comSwitch
                onClick={() => alternarCanal(leitor.id, persona.id, "mural")}
              />
              <ItemMenu
                rotulo="Conversas"
                ativo={!!contato.conversas}
                comSwitch
                onClick={() => alternarCanal(leitor.id, persona.id, "conversas")}
              />
              <ItemMenu
                rotulo={rel.bloqueado ? "Desbloquear" : "Bloquear"}
                ativo={!!rel.bloqueado}
                perigo
                onClick={() => alternarRelacao(persona.id, "bloqueado")}
              />
              <ItemMenu
                rotulo="Restringir"
                ativo={!!(rel.restringeStory || rel.restringePost)}
                comSeta
                aberto={submenu}
                onClick={() => setSubmenu((v) => !v)}
              />

              {submenu && (
                <div className="border-t border-line bg-bg-alt px-2 py-1.5">
                  <LinhaSwitch
                    rotulo="Restringir story"
                    ativo={!!rel.restringeStory}
                    onClick={() => alternarRelacao(persona.id, "restringeStory")}
                  />
                  <LinhaSwitch
                    rotulo="Restringir post"
                    ativo={!!rel.restringePost}
                    onClick={() => alternarRelacao(persona.id, "restringePost")}
                  />
                </div>
              )}

              <div className="border-t border-line">
                <ItemMenu
                  rotulo="Eleger para checagem de fatos"
                  ativo={eleita}
                  comSwitch
                  onClick={() => alternarEleicao(persona.id)}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="flex items-start gap-3">
          <Avatar persona={persona} size="lg" />
          <div className="min-w-0">
            <p className="text-[1.05rem] leading-tight font-extrabold">{persona.name}</p>
            <p className="text-[0.78rem] text-text-faint">{persona.handle}</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              <VerificationTag persona={persona} />
              {restrita && (
                <span className="rounded bg-warn-soft px-1.5 py-0.5 text-[0.6rem] font-extrabold tracking-wide text-warn uppercase">
                  restrita · {persona.age} anos
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="mt-3 text-[0.84rem] leading-relaxed text-text-soft">{persona.role}</p>

        {tutelados.length > 0 && (
          <div className="mt-3 rounded-xl border border-warn/40 bg-warn-soft/50 p-2.5">
            <p className="text-[0.62rem] font-extrabold tracking-[0.08em] text-warn uppercase">
              Responsável por {tutelados.length === 1 ? "1 conta restrita" : `${tutelados.length} contas restritas`}
            </p>
            <ul className="mt-1 space-y-0.5">
              {tutelados.map((t) => (
                <li key={t.id} className="text-[0.76rem] text-text-soft">
                  <strong className="text-text">{t.name}</strong> · {t.age} anos · cada vínculo novo passa por você
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-3 -mx-4 border-t border-line">
          {visiveis.map((p) => (
            <FeedPostCard key={p.id} post={p} layout={layout} pinned={false} onPin={() => {}} />
          ))}
        </div>

        {visiveis.length < dela.length && (
          <p className="mt-3 px-4 text-[0.72rem] text-warn">
            {dela.length - visiveis.length} postagens desta conta ficam ocultas pela classificação
            indicativa de {leitor.name}.
          </p>
        )}
      </div>
    </div>
  );
}

function ItemMenu({
  rotulo,
  ativo,
  onClick,
  comSeta = false,
  comSwitch = false,
  aberto = false,
  perigo = false,
}: {
  rotulo: string;
  ativo: boolean;
  onClick: () => void;
  comSeta?: boolean;
  comSwitch?: boolean;
  aberto?: boolean;
  perigo?: boolean;
}) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      aria-pressed={comSwitch ? ativo : undefined}
      className={`flex w-full items-center gap-2 px-2.5 py-2 text-left text-[0.8rem] font-semibold transition hover:bg-surface-2 ${
        perigo && ativo ? "text-danger" : "text-text"
      }`}
    >
      <span className="flex-1">{rotulo}</span>
      {comSeta && (
        <svg
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 text-text-faint transition-transform ${aberto ? "rotate-90" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      )}
      {comSwitch && <MiniSwitch ativo={ativo} />}
    </button>
  );
}

function LinhaSwitch({ rotulo, ativo, onClick }: { rotulo: string; ativo: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      role="menuitemcheckbox"
      aria-checked={ativo}
      onClick={onClick}
      className="flex w-full items-center gap-2 rounded-md px-1.5 py-1.5 text-left text-[0.78rem] font-semibold text-text-soft hover:bg-surface"
    >
      <span className="flex-1">{rotulo}</span>
      <MiniSwitch ativo={ativo} pequeno />
    </button>
  );
}

function MiniSwitch({ ativo, pequeno = false }: { ativo: boolean; pequeno?: boolean }) {
  const largura = pequeno ? "h-4 w-7" : "h-5 w-9";
  const bolinha = pequeno ? "h-3 w-3" : "h-4 w-4";
  const desloca = pequeno ? "translate-x-3" : "translate-x-4";
  return (
    <span
      aria-hidden="true"
      className={`relative shrink-0 rounded-full transition-colors ${largura} ${ativo ? "bg-brand" : "bg-line-strong"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 rounded-full bg-white shadow transition-transform ${bolinha} ${
          ativo ? desloca : ""
        }`}
      />
    </span>
  );
}
