import { Avatar } from "../Avatar";
import { conversasDe, type Conversa } from "../../data/conversas";
import { byId } from "../../data/personas";
import { usarLeitor } from "../../lib/conta";
import { irPara, usarTela, voltar } from "../../lib/navegacao";

/** Lista de conversas e conversa aberta, dentro do celular. */
export function ConversasNoApp() {
  const leitor = byId(usarLeitor());
  const tela = usarTela();
  const minhas = conversasDe(leitor.id);

  if (tela !== "conversas") {
    const conversa = minhas.find((c) => c.id === tela);
    if (!conversa) return <Lista minhas={minhas} />;
    return <Thread conversa={conversa} eu={leitor.id} />;
  }

  return <Lista minhas={minhas} />;
}

function tituloDa(conversa: Conversa, eu: string) {
  if (conversa.grupo) return conversa.grupo;
  const outro = conversa.participantes.find((p) => p !== eu) ?? eu;
  return byId(outro).name;
}

function Lista({ minhas }: { minhas: Conversa[] }) {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto bg-bg-alt">
      <div className="sticky top-0 z-10 flex items-center gap-2 border-b border-line bg-surface px-2 py-2">
        <button
          type="button"
          onClick={voltar}
          aria-label="Voltar ao mural"
          className="grid h-8 w-8 place-items-center rounded-lg text-text-soft hover:bg-surface-2 hover:text-text"
        >
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <span className="text-[0.95rem] font-bold">Conversas</span>
      </div>

      {minhas.length === 0 && (
        <p className="px-4 py-6 text-[0.84rem] text-text-soft">
          Nenhuma conversa nesta demonstração para esta conta. Troque em “Ver como”.
        </p>
      )}

      <ul>
        {minhas.map((c) => {
          const ultima = c.mensagens[c.mensagens.length - 1];
          const autor = byId(ultima.de);
          return (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => irPara(c.id)}
                className="flex w-full items-center gap-3 border-b border-line px-3 py-2.5 text-left hover:bg-surface"
              >
                {c.grupo ? (
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-brand-soft text-[0.7rem] font-extrabold text-brand">
                    {c.grupo.split(" ").filter((w) => w.length > 2).slice(0, 2).map((w) => w[0]).join("").toUpperCase()}
                  </span>
                ) : (
                  <Avatar persona={autor} size="sm" />
                )}
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5">
                    <span className="truncate text-[0.84rem] font-semibold">{tituloDa(c, usarLeitor())}</span>
                    <span className="ml-auto shrink-0 text-[0.66rem] text-text-faint">{ultima.hora}</span>
                  </span>
                  <span className="block truncate text-[0.76rem] text-text-soft">
                    {c.grupo ? `${autor.name.split(" ")[0]}: ` : ""}
                    {ultima.texto}
                  </span>
                </span>
                {c.naoLidas ? (
                  <span className="grid h-4 min-w-4 place-items-center rounded-full bg-brand px-1 text-[0.6rem] font-extrabold text-white">
                    {c.naoLidas}
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      <p className="px-3 py-3 text-[0.72rem] text-text-faint">
        Conversas inventadas para a demonstração. A mensagem em si não é lida pela rede.
      </p>
    </div>
  );
}

function Thread({ conversa, eu }: { conversa: Conversa; eu: string }) {
  const leitor = byId(eu);
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-bg-alt">
      <div className="flex items-center gap-2 border-b border-line bg-surface px-2 py-2">
        <button
          type="button"
          onClick={() => irPara("conversas")}
          aria-label="Voltar para as conversas"
          className="grid h-8 w-8 place-items-center rounded-lg text-text-soft hover:bg-surface-2 hover:text-text"
        >
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <span className="text-[0.9rem] font-bold">{tituloDa(conversa, eu)}</span>
        {conversa.grupo && (
          <span className="ml-auto text-[0.68rem] text-text-faint">
            {conversa.participantes.length} pessoas
          </span>
        )}
      </div>

      <div className="min-h-0 flex-1 space-y-2 overflow-y-auto px-3 py-3">
        {conversa.mensagens.map((m, i) => {
          const meu = m.de === eu;
          const autor = byId(m.de);
          return (
            <div key={i} className={`flex items-end gap-1.5 ${meu ? "justify-end" : "justify-start"}`}>
              {!meu && <Avatar persona={autor} size="sm" showVerification={false} />}
              <div
                className={`max-w-[78%] rounded-2xl px-2.5 py-1.5 text-[0.82rem] leading-snug ${
                  meu ? "bg-brand text-white" : "border border-line bg-surface text-text"
                }`}
              >
                {!meu && !conversa.grupo && null}
                {!meu && conversa.grupo && (
                  <span className="mb-0.5 block text-[0.66rem] font-semibold opacity-70">
                    {autor.name.split(" ")[0]}
                  </span>
                )}
                {m.texto}
                <span className={`ml-1.5 text-[0.6rem] ${meu ? "text-white/70" : "text-text-faint"}`}>{m.hora}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-line bg-surface px-2 py-2">
        <p className="rounded-full border border-line px-3 py-1.5 text-[0.78rem] text-text-faint">
          Escrever para {conversa.grupo ?? byId(conversa.participantes.find((p) => p !== eu) ?? eu).name.split(" ")[0]}…
        </p>
        <p className="mt-1 px-1 text-[0.66rem] text-text-faint">
          {leitor.name} · demonstração, nada é enviado
        </p>
      </div>
    </div>
  );
}
