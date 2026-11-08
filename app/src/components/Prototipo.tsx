import { useEffect, useMemo, useRef, useState } from "react";
import { AppFrame } from "./app/AppFrame";
import { Avatar } from "./Avatar";
import { StoryRow } from "./app/StoryRow";
import { Kicker, Section } from "./ui";
import { Feed } from "./prototipo/Feed";
import { Explanations, type Explicacao } from "./prototipo/Explanations";
import { LayoutSwitcher } from "./prototipo/LayoutSwitcher";
import { MiniPlayer } from "./prototipo/MiniPlayer";
import { PhoneShell } from "./prototipo/PhoneShell";
import { PipWindow } from "./prototipo/PipWindow";
import { PerfilNoApp } from "./prototipo/PerfilNoApp";
import { ConversasNoApp } from "./prototipo/ConversasNoApp";
import { fecharPip, usarPip } from "../lib/pip";
import { feedPosts } from "../data/feed-posts";
import { anaBeatriz, anaMaria, antonioJose, byId, cafeAurora, ehRestrita, joaoPedro, mariaClara, personas, tetoPorIdade } from "../data/personas";
import { definirLeitor, usarLeitor } from "../lib/conta";
import { irPara, usarPerfil, usarTela } from "../lib/navegacao";
import { definirLayout, usarLayout } from "../lib/exibicao";


const stories = [joaoPedro, mariaClara, antonioJose, anaBeatriz, cafeAurora];

export function Prototipo() {
  const layout = usarLayout();
  const trocarLayout = definirLayout;
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [cheio, setCheio] = useState(false);
  const [escolhendo, setEscolhendo] = useState(false);
  const pip = usarPip();
  const leitorId = usarLeitor();
  const perfilId = usarPerfil();
  const tela = usarTela();
  const leitor = personas.find((p) => p.id === leitorId) ?? anaMaria;

  /** Leva o mural até a postagem e fecha a janela flutuante. */
  const irParaPostagem = (id: string) => {
    const feed = document.querySelector<HTMLElement>(".feed-scroll");
    const alvo = document.getElementById(`post-${id}`);
    if (feed && alvo) {
      const fr = feed.getBoundingClientRect();
      const ar = alvo.getBoundingClientRect();
      feed.scrollTop += ar.top - fr.top - 6;
    }
    fecharPip();
  };
  const telefone = useRef<HTMLDivElement>(null);

  const raiz = useRef<HTMLDivElement>(null);

  const restrita = ehRestrita(leitor);
  const tetoLeitor = tetoPorIdade(leitor.age);

  const explicacoes: Explicacao[] = useMemo(() => {
    const lista: Explicacao[] = [
      {
        id: "modo",
        titulo: "Rede social e aplicativo de mensagens em um só lugar",
        texto: "As postagens e mensagens são assinadas conforme quem as publica. O aplicativo não tem dono, e a rede é distribuída: cada aparelho é um nó que transporta conteúdo de um para outro.",
        href: "/por-dentro",
        link: "ver por dentro",
        ancoras: ['button[aria-label^="Modo "]'],
        icone: (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
            <path d="M4 6h16M4 12h16M4 18h10" />
          </svg>
        ),
      },
      {
        id: "marca",
        titulo: "Marca diz há quanto tempo essa pessoa foi verificada",
        texto: "Sem marca, a verificação tem menos de um ano. Laranja passa de um ano; vermelho, de cinco.",
        href: "/seguranca",
        link: "como a verificação funciona",
        ancoras: ['[data-hotspot="marca"]'],
        icone: (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3 5 6v5c0 4.4 3 8.3 7 10 4-1.7 7-5.6 7-10V6Z" />
          </svg>
        ),
      },
      {
        id: "classificacao",
        titulo: "Postagems têm classificação indicativa",
        texto: "Quem publica mar se há — violência, drogas, nudez, linguagem imprópria. E a postagem fica automaticamente ajustada para a idade do leitor. Teste com Ana Beatriz ou Davi.",
        href: "/por-dentro",
        link: "ver os descritores",
        ancoras: ['[data-hotspot="classificacao"]'],
        icone: (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="5" width="16" height="14" rx="2.5" />
            <path d="M9 10h6M9 14h4" />
          </svg>
        ),
      },
      {
        id: "restrita",
        titulo: "Conta restrita vê menos",
        texto: `${leitor.name} tem ${leitor.age} anos, então o mural para em ${tetoLeitor}. O que passa disso não aparece — nem na busca, nem no perfil.`,
        href: "/identidade",
        link: "como a conta restrita funciona",
        ancoras: ['[data-hotspot="perfil"]'],
        quando: restrita,
        posicao: "topo",
        icone: (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="10" width="16" height="10" rx="2.5" />
            <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
          </svg>
        ),
      },
      {
        id: "audiencia",
        titulo: "A audiência consume conteúdo de uma rede distriuida, sem necessidade de datacenter",
        texto:
          "O número é a soma das visualizações, contada pelos próprios aparelhos. A postagem viaja de nó em nó usando a tecnologia WebRTC: não existe datacenter obrigatório nem dono da rede.",
        href: "/por-dentro",
        link: "como a rede funciona",
        ancoras: ['[data-hotspot="audiencia"]'],
        icone: (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        ),
      },
      {
        id: "autorizacao",
        titulo: "Quem decide o contato de conta restrita é o responsável",
        texto: leitor.guardian
          ? `${byId(leitor.guardian).name} é o responsável por esta conta. Para ver o pedido do outro lado, escolha “Ver como” → ${byId(leitor.guardian).name}.`
          : "O pedido que chega para uma conta restrita sobe para o responsável, que escolhe entre só conversar ou também acompanhar as postagens.",
        href: "/identidade",
        link: "como a conta restrita funciona",
        ancoras: ['[data-hotspot="autorizacao"]', '[data-hotspot="responsavel"]'],
        icone: (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3 5 6v5c0 4.4 3 8.3 7 10 4-1.7 7-5.6 7-10V6Z" />
            <path d="M9 12h6" />
          </svg>
        ),
      },
      {
        id: "checagem",
        titulo: "Alerta de checagem de fato",
        texto: "Quem você elegeu para checar aparece destacado. Os outros alertas só mostram o ícone.",
        href: "/confianca",
        link: "como funciona a checagem",
        ancoras: ['[data-hotspot="alerta"]'],
        icone: (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
            <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.6 9.6 0 0 1-3.2-.6L3 21l1.7-4.9A8.3 8.3 0 0 1 3.6 11.5a8.4 8.4 0 0 1 9-8.4 8.4 8.4 0 0 1 8.4 8.4Z" />
          </svg>
        ),
      },
      {
        id: "grupo",
        titulo: "Grupo é uma conta, e a lista fica no grupo",
        texto:
          "Quem entrou e quem saiu é visível para quem já é membro — não para a rede. O grafo social não é publicado em lugar nenhum.",
        href: "/por-dentro",
        link: "como um grupo funciona",
        ancoras: ['[data-hotspot="grupo"]'],
        icone: (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="8.5" r="3" />
            <circle cx="17" cy="10" r="2.2" />
            <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5M15.5 19c0-2.2 1.4-3.6 3.5-3.6s3.5 1.4 3.5 3.6" />
          </svg>
        ),
      },
      {
        id: "mensagem",
        titulo: "O provedor não abre a mensagem",
        texto:
          "A conversa é selada entre os dois aparelhos. O nó que transporta vê de onde veio e para onde vai — não vê o conteúdo.",
        href: "/conversas",
        link: "como a conversa funciona",
        ancoras: ['[data-hotspot="mensagem"]'],
        icone: (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="10.5" width="16" height="9.5" rx="2" />
            <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
          </svg>
        ),
      },
      {
        id: "particular",
        titulo: "Conversa particular: a chave é dos dois aparelhos",
        texto:
          "A mensagem sai cifrada do seu aparelho e só abre no de quem recebe. O nó que transporta vê de onde veio e para onde vai — não tem a chave.",
        href: "/conversas",
        link: "como funciona a criptografia ponta a ponta",
        ancoras: ['[data-hotspot="particular"]'],
        icone: (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="7" width="18" height="12" rx="2.5" />
            <path d="m4 8 8 6 8-6" />
          </svg>
        ),
      },
      {
        id: "perfil",
        titulo: "O nome leva ao perfil",
        texto: "Tocar no nome abre o perfil dentro do app: seguir, bloquear, restringir story e post, e eleger para checagem.",
        href: "/confianca",
        link: "o que dá para fazer no perfil",
        ancoras: ['[data-hotspot="nome"]'],
        icone: (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8.5" r="3.5" />
            <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
          </svg>
        ),
      },
    ];
    return lista;
  }, [leitor, restrita, tetoLeitor]);

  const pinned = useMemo(
    () => (pinnedId ? feedPosts.find((p) => p.id === pinnedId) : undefined),
    [pinnedId],
  );


  /** Abrir empurra uma entrada no histórico, para o back fechar o protótipo. */
  const abrirCheio = () => {
    setCheio(true);
    window.history.pushState({ prototipo: true }, "");
  };

  useEffect(() => {
    const aoVoltar = () => setCheio(false);
    window.addEventListener("popstate", aoVoltar);
    return () => window.removeEventListener("popstate", aoVoltar);
  }, []);

  /** Swipe: para a esquerda mostra o mural, para a direita as conversas. */
  const toque = useRef<{ x: number; y: number } | null>(null);
  const aoIniciar = (ev: React.TouchEvent) => {
    const t = ev.touches[0];
    toque.current = { x: t.clientX, y: t.clientY };
  };
  const aoTerminar = (ev: React.TouchEvent) => {
    const inicio = toque.current;
    toque.current = null;
    if (!inicio) return;
    const t = ev.changedTouches[0];
    const dx = t.clientX - inicio.x;
    const dy = t.clientY - inicio.y;
    if (Math.abs(dx) < 60 || Math.abs(dy) > Math.abs(dx) * 0.7) return;
    irPara(dx < 0 ? "mural" : "conversas");
  };

  const app = (compacto: boolean) => (
    <div className="flex min-h-0 flex-1 flex-col touch-pan-y" onTouchStart={aoIniciar} onTouchEnd={aoTerminar}>
      <AppFrame
      bare
      compact={compacto}
      extra={
        !perfilId ? (
          <LayoutSwitcher
            layout={layout}
            onChange={trocarLayout}
            emConversas={tela !== "mural"}
            aoAlternarConversas={() => irPara(tela === "mural" ? "conversas" : "mural")}
            naoLidas={2}
          />
        ) : undefined
      }
    >
      {perfilId ? (
        <PerfilNoApp id={perfilId} />
      ) : tela !== "mural" ? (
        <ConversasNoApp />
      ) : (
        <>
          <StoryRow me={leitor} people={stories} />
          <Feed
            layout={layout}
            pinnedId={pinnedId}
            onPin={(id) => setPinnedId((atual) => (atual === id ? null : id))}
          />
        </>
      )}
      </AppFrame>
    </div>
  );

  return (
    <Section id="prototipo" tight>
      <div>
        <Kicker>Experimente antes de existir</Kicker>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Esta é a tela de uma conta comum.
        </h2>
        <p className="mt-2 max-w-3xl text-lg leading-relaxed text-text-soft">
          Role o mural, troque a exibição, assista a um vídeo, veja conversas particulares e em grupo. As explicações à direita apontam para o
          que está acontecendo — clique para entender o mecanismo por trás.
        </p>

        <div className="mt-6 lg:hidden">
          <button
            type="button"
            onClick={() => setEscolhendo(true)}
            className="w-full rounded-xl bg-brand px-4 py-3.5 text-[0.95rem] font-bold text-white shadow-sm active:scale-[0.99]"
          >
            Abrir o Protótipo
          </button>

          <p className="mt-2.5 flex items-start gap-1.5 px-1 text-[0.78rem] leading-snug text-text-faint">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="12" rx="2" />
              <path d="M8 20h8M12 16v4" />
            </svg>
            No computador fica mais fácil entender: as explicações aparecem ao lado do protótipo e
            apontam para cada elemento da tela.
          </p>
        </div>

        <div ref={raiz} className="mt-8 hidden items-start gap-10 lg:grid lg:grid-cols-[minmax(0,372px)_minmax(0,1fr)] lg:gap-16">
          <div>
          <div className="mb-3 hidden items-center justify-center gap-2 text-[0.8rem] text-text-soft lg:flex">
            <label htmlFor="ver-como">Ver como</label>
            <select
              id="ver-como"
              value={leitorId}
              onChange={(e) => definirLeitor(e.target.value)}
              className="rounded-lg border border-line bg-surface px-2 py-1 text-[0.82rem] font-semibold text-text outline-none focus:border-brand"
            >
              {personas.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                  {ehRestrita(p) ? ` (${p.age} anos)` : p.kind === "group" ? " — grupo" : p.kind === "business" ? " — empresa" : ""}
                </option>
              ))}
            </select>
          </div>

          <div ref={telefone} className="relative mx-auto w-full max-w-[372px]">
            <PhoneShell
              overlay={
                <>
                  {pip && <PipWindow video={pip} onIrPara={() => irParaPostagem(pip.id)} />}
                  {pinned?.media ? (
                    <MiniPlayer
                      src={pinned.media.src}
                      poster={pinned.media.poster}
                      onClose={() => setPinnedId(null)}
                      onExpand={() => setPinnedId(null)}
                    />
                  ) : null}
                </>
              }
            >
              {app(true)}
            </PhoneShell>

            <p className="mt-3 text-center text-[0.76rem] text-text-faint">
              Vendo como {leitor.name} · contas e histórias inventadas
            </p>
          </div>
          </div>

          <div className="hidden lg:block lg:pt-2">
            <Explanations itens={explicacoes} raiz={raiz} telefone={telefone} />
          </div>
        </div>
      </div>

      {escolhendo && (
        <div className="fixed inset-0 z-[60] flex flex-col justify-end bg-black/40 lg:hidden" onClick={() => setEscolhendo(false)}>
          <div
            className="max-h-[80vh] overflow-y-auto rounded-t-2xl bg-surface p-3"
            onClick={(ev) => ev.stopPropagation()}
          >
            <p className="px-1 pb-2 text-[0.7rem] font-extrabold tracking-[0.08em] text-text-faint uppercase">
              Ver como quem?
            </p>
            <ul className="space-y-1">
              {personas.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => {
                      definirLeitor(p.id);
                      setEscolhendo(false);
                      abrirCheio();
                    }}
                    className="flex w-full items-center gap-2.5 rounded-xl border border-line bg-surface px-2.5 py-2 text-left active:bg-surface-2"
                  >
                    <Avatar persona={p} size="sm" />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[0.86rem] font-semibold">{p.name}</span>
                      <span className="block truncate text-[0.72rem] text-text-faint">
                        {p.kind === "group" ? "grupo" : p.kind === "business" ? "empresa" : "pessoa"}
                        {ehRestrita(p) ? ` · ${p.age} anos · conta restrita` : ""}
                      </span>
                    </span>
                    {p.recebeDenuncias && (
                      <span className="rounded bg-warn-soft px-1.5 py-0.5 text-[0.6rem] font-extrabold text-warn uppercase">
                        ouvidoria
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setEscolhendo(false)}
              className="mt-2 w-full rounded-xl border border-line px-3 py-2.5 text-[0.85rem] font-bold text-text-soft"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {cheio && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg lg:hidden">
          <div className="relative flex min-h-0 flex-1 flex-col">
            {app(false)}
            {pip && <PipWindow video={pip} onIrPara={() => irParaPostagem(pip.id)} />}
            {pinned?.media ? (
              <MiniPlayer
                src={pinned.media.src}
                poster={pinned.media.poster}
                onClose={() => setPinnedId(null)}
                onExpand={() => setPinnedId(null)}
              />
            ) : null}
          </div>
        </div>
      )}
    </Section>
  );
}
