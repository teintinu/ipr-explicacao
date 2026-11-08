import type { Persona } from "../../data/personas";
import { Avatar } from "../Avatar";

/**
 * Faixa de momentos no topo do feed. A primeira é sempre a leitora
 * (Ana Maria), com o botão de publicar.
 */
export function StoryRow({ people, me }: { people: Persona[]; me: Persona }) {
  return (
    <div className="flex gap-4 overflow-x-auto border-b border-line bg-surface px-4 py-3.5">
      <button className="grid w-16 shrink-0 justify-items-center gap-1.5" type="button">
        <span className="relative grid h-14 w-14 place-items-center rounded-full bg-line p-[3px]">
          <span className="grid h-12.5 w-12.5 place-items-center rounded-full bg-surface">
            <Avatar persona={me} size="md" />
          </span>
          <span className="absolute right-0 bottom-0 grid h-5 w-5 place-items-center rounded-full border-2 border-surface bg-brand text-xs leading-none font-extrabold text-white">
            +
          </span>
        </span>
        <span className="w-full truncate text-center text-[0.72rem] text-text-soft">novo</span>
      </button>

      {people.map((persona) => (
        <button key={persona.id} className="grid w-16 shrink-0 justify-items-center gap-1.5" type="button">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-[conic-gradient(from_210deg,var(--upr-brand),var(--upr-accent),var(--upr-brand))] p-[3px]">
            <span className="grid h-12.5 w-12.5 place-items-center rounded-full bg-surface">
              <Avatar persona={persona} size="md" showVerification={false} />
            </span>
          </span>
          <span className="w-full truncate text-center text-[0.72rem] text-text-soft">
            {persona.name.split(" ")[0]}
          </span>
        </button>
      ))}
    </div>
  );
}
