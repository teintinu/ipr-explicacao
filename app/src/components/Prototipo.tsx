import { useMemo, useRef, useState } from "react";
import { AppFrame } from "./app/AppFrame";
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
import { anaBeatriz, anaMaria, antonioJose, cafeAurora, ehRestrita, joaoPedro, mariaClara, personas, tetoPorIdade } from "../data/personas";
import { definirLeitor, usarLeitor } from "../lib/conta";
import { irPara, usarPerfil, usarTela } from "../lib/navegacao";
import { definirLayout, usarLayout } from "../lib/exibicao";


const stories = [joaoPedro, mariaClara, antonioJose, anaBeatriz, cafeAurora];

export function Prototipo() {
  const layout = usarLayout();
  const trocarLayout = definirLayout;
  const [pinnedId, setPinnedId] = useState<string | null>(null);
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


  return (
    <Section id="prototipo" tight>
      <div>
        <Kicker>Experimente antes de existir</Kicker>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Esta é a tela de uma conta comum.
        </h2>
        <p className="mt-2 max-w-3xl text-lg leading-relaxed text-text-soft">
          Role o mural, troque a exibição, assista a um vídeo. As explicações à direita apontam para o
          que está acontecendo — clique para entender o mecanismo por trás.
        </p>

        <div ref={raiz} className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,372px)_minmax(0,1fr)] lg:gap-16">
          <div>
          <div className="mb-3 flex items-center justify-center gap-2 text-[0.8rem] text-text-soft">
            <label htmlFor="ver-como">Ver como</label>
            <select
              id="ver-como"
              value={leitorId}
              onChange={(e) => definirLeitor(e.target.value)}
              className="rounded-lg border border-line bg-surface px-2 py-1 text-[0.82rem] font-semibold text-text outline-none focus:border-brand"
            >
              {personas
                .filter((p) => p.kind === "personal")
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                    {ehRestrita(p) ? ` (${p.age} anos)` : ""}
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
              <AppFrame
                bare
                compact
                extra={
                  // O grupo traz a exibição do mural e a porta das conversas.
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
            </PhoneShell>

            <p className="mt-3 text-center text-[0.76rem] text-text-faint">
              Vendo como {leitor.name} · contas e histórias inventadas
            </p>
          </div>
          </div>

          <div className="lg:pt-2">
            <Explanations itens={explicacoes} raiz={raiz} telefone={telefone} />
          </div>
        </div>
      </div>
    </Section>
  );
}
