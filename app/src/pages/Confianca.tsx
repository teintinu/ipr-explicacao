import { Callout, Kicker, Lead, Section } from "../components/ui";
import { Scene, type SceneStep } from "../components/scene/Scene";
import { Arrow, Box, CircleNode, Label, Marker } from "../components/scene/parts";

const passosEleicao: SceneStep[] = [
  { at: 0, label: "Qualquer conta pode ser eleita — não existe cadastro.", note: "Não há lista oficial, candidatura nem aprovação. A conta é só uma conta." },
  { at: 1600, label: "Você clica em “Confiar nesta conta”. A escolha fica só com você.", note: "A eleição mora no seu aparelho. Ninguém fica sabendo — nem a conta escolhida." },
  { at: 3200, label: "Ela ganha um selo que mostra que há pessoas que confiam nela.", note: "O selo é uma contagem, não um título: diz “há quem confie”, nunca “esta conta é autoridade”." },
  { at: 4800, label: "Se ela marcar o comentário como alerta, ele aparece primeiro.", note: "Quem marca é ela. Um comentário comum dela continua na ordem normal — e é assim que precisa ser." },
  { at: 6400, label: "Para quem não confiou, nada muda.", note: "A prioridade é sua, não da rede: quem não elegeu vê a conversa na ordem normal." },
];

function CenaEleicao() {
  return (
    <Scene duration={7600} steps={passosEleicao}>
      <svg viewBox="0 0 860 240" role="img" aria-label="Você escolhe confiar numa conta; quando ela marca um comentário como alerta, ele aparece primeiro.">
        <Marker id="m-conf2" />
        <CircleNode cx={90} cy={110} r={40} tone="brand" label="você" at={0} />
        <Arrow d="M136 110 H 244" marker="m-conf2" at={1600} />
        <Label x={190} y={96} at={1600}>confiar</Label>
        <Box x={250} y={82} w={180} h={56} tone="accent" lines={["@checagem", "conta comum"]} at={3200} />
        <CircleNode cx={470} cy={110} r={14} tone="accent" label="✓" at={3200} />
        <Label x={520} y={106} at={3200}>selo discreto</Label>
        <Box x={640} y={52} w={190} h={40} tone="accent" lines={["comentário dela"]} at={4800} />
        <Box x={640} y={102} w={190} h={36} lines={["outros comentários"]} at={4800} />
        <Label x={735} y={170} at={6400}>alerta vem antes;</Label>
        <Label x={735} y={187} at={6400}>o resto segue normal</Label>
      </svg>
    </Scene>
  );
}

export function Confianca() {
  return (
    <>
      <Section>
        <Kicker>Quem fala primeiro</Kicker>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Checagem de fato e remoção</h1>
        <Lead>
          Não existe "autoridade" da rede. Existe a sua escolha de quem checa fatos para você —
          guardada no seu aparelho — e o direito de quem publicou de tirar o que publicou.
        </Lead>
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">A checagem de fato é uma eleição, não um cargo</h2>
        <p className="mt-2 mb-5 max-w-3xl text-lg text-text-soft">
          Qualquer conta pode ser eleita por qualquer leitor para checar fatos. O que se publica é a
          contagem — nunca quem elegeu.
        </p>
        <CenaEleicao />
      </Section>

      <Section alt tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Remover o que você publicou</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface p-5">
            <h3 className="font-bold">Você apaga</h3>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-text-soft">
              O conteúdo sai dos provedores. Os derivados — um corte, uma citação — continuam de pé,
              com o aviso de que o original saiu.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-5">
            <h3 className="font-bold">A justiça bloqueia</h3>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-text-soft">
              A ordem vai para a instituição que verificou a pessoa, que marca a conta como
              bloqueada: ela para de operar. A rede não apaga conteúdo por ordem judicial — quem
              remove é o autor.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <Callout tone="ok" title="O que sobra é prova">
            <p>
              Remover apaga o arquivo, nunca o evento assinado. Fica um registro com o resumo do que
              existia, a data e o motivo — é o que impede que apagar vire impunidade.
            </p>
          </Callout>
          <Callout tone="warn" title="Provedor que não apaga é pego">
            <p>
              Toda remoção gera um recibo por provedor, com a lista do que foi apagado e assinatura.
              Quem não cumpre fica visível — e a divergência é registrada como falha dele.
            </p>
          </Callout>
        </div>
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Alerta é decisão de quem comenta</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface p-5">
            <h3 className="font-bold">Comentário marcado como alerta</h3>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-text-soft">
              Quem escreveu sinalizou que aquilo é aviso — correção, risco, informação que não pode
              passar. Se o leitor confia nessa conta, o comentário sobe para o topo e ganha a
              etiqueta <strong>alerta</strong>.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-5">
            <h3 className="font-bold">Comentário comum</h3>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-text-soft">
              Opinião, pergunta, brincadeira: fica onde foi escrito. Ser uma conta confiável não
              transforma toda fala em aviso — e é isso que impede o filtro de virar palco.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Callout tone="info" title="Por que a marcação é de quem escreve">
            <p>
              Se o leitor pudesse promover qualquer comentário, a prioridade viraria curadoria — e a
              conta eleita viraria só um selo decorativo. Quem sabe se aquilo é alerta é quem
              escreveu. O leitor decide apenas <em>em quem</em> confiar.
            </p>
          </Callout>
        </div>
      </Section>

      <Section tight>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">As três coisas que a eleição não faz</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            ["Não dá acesso", "A conta eleita continua vendo só o que já era visível para ela."],
            ["Não esconde ninguém", "Quem não foi eleito continua aparecendo — só sem destaque."],
            ["Não vira cargo", "Não há registro, chave própria nem status de conselheiro."],
          ].map(([titulo, texto]) => (
            <div key={titulo} className="rounded-2xl border border-line bg-surface p-5">
              <h3 className="font-bold">{titulo}</h3>
              <p className="mt-1.5 text-[0.92rem] leading-relaxed text-text-soft">{texto}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
