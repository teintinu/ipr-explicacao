import type { Persona } from "../../data/personas";
import { Avatar } from "../Avatar";

export interface Message {
  id: string;
  from: "them" | "me" | "system";
  text?: string;
  meta?: string;
  author?: string;
}

/**
 * Tela de conversa. Serve para 1:1 e para grupo — o cabeçalho recebe o
 * destinatário e um rótulo opcional à direita.
 */
export function ChatWindow({
  person,
  status,
  badge,
  messages,
  height = "min(460px,58vh)",
}: {
  person: Persona;
  status: string;
  badge?: string;
  messages: Message[];
  height?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[22px] border border-line bg-surface shadow-xl">
      <div className="flex items-center gap-3 border-b border-line bg-surface px-4 py-3">
        <Avatar persona={person} />
        <div className="min-w-0 flex-1">
          <p className="text-[0.95rem] leading-tight font-bold">{person.name}</p>
          <p className="text-[0.76rem] text-text-faint">{status}</p>
        </div>
        {badge && (
          <span className="rounded-md bg-accent-soft px-2 py-0.5 text-[0.68rem] font-extrabold tracking-wide text-accent uppercase">
            {badge}
          </span>
        )}
      </div>

      <div className="grid bg-bg-alt" style={{ height, gridTemplateRows: "1fr auto" }}>
        <div className="flex flex-col gap-2.5 overflow-y-auto p-4">
          {messages.map((m) =>
            m.from === "system" ? (
              <span key={m.id} className="max-w-[90%] self-center text-center text-[0.78rem] text-text-faint">
                {m.text}
              </span>
            ) : (
              <div
                key={m.id}
                className={`max-w-[78%] rounded-2xl border px-3 py-2.5 text-[0.92rem] leading-snug shadow-sm ${
                  m.from === "me"
                    ? "self-end border-transparent bg-brand text-white"
                    : "self-start border-line bg-surface"
                }`}
              >
                {m.author && <strong>{m.author}: </strong>}
                {m.text}
                <span
                  className={`mt-1 block text-right text-[0.7rem] ${m.from === "me" ? "text-white/75" : "text-text-faint"}`}
                >
                  {m.meta}
                </span>
              </div>
            ),
          )}
        </div>

        <div className="flex items-center gap-2 border-t border-line bg-surface px-4 py-2.5">
          <span className="flex-1 rounded-full border border-line bg-surface-2 px-4 py-2 text-[0.9rem] text-text-faint">
            Escrever uma mensagem…
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12 20 4l-6 16-3-6-7-2Z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
