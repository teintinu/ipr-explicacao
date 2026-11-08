import { useMemo, useState } from "react";
import { Kicker, Lead, Section } from "../components/ui";

interface Termo {
  termo: string;
  def: string;
  grupo: string;
}

const termos: Termo[] = [
  { termo: "AC", grupo: "identidade", def: "Autoridade Certificadora. A raiz de confiança: credencia os verificadores e responde pela lista deles." },
  { termo: "AR", grupo: "identidade", def: "Autoridade Registradora. A instituição que confere o documento e emite a credencial — a sua operadora, o seu partido, a sua empresa." },
  { termo: "Verificador de identidade", grupo: "identidade", def: "Quem confere seus documentos uma vez e devolve a credencial. Pode ser um órgão público ou uma empresa." },
  { termo: "Credencial", grupo: "identidade", def: "A prova de que alguém conferiu seus dados. Não leva nome nem CPF — leva a assinatura de quem conferiu." },
  { termo: "Token cego", grupo: "identidade", def: "Credencial que o verificador assina sem ver o número de série. Impede que a rede e os provedores liguem a conta a quem pediu — a AR, que emitiu, mantém o registro dela." },
  { termo: "Nullifier", grupo: "identidade", def: "Código derivado da credencial que impede usar o mesmo token duas vezes, sem revelar qual token é." },
  { termo: "Selo de verificação", grupo: "identidade", def: "O escudo no avatar. A cor indica há quanto tempo o documento foi conferido: verde até 1 ano, amarelo até 5, vermelho acima de 5." },
  { termo: "Conta restrita", grupo: "identidade", def: "Conta de criança ou adolescente. Existe e publica, mas cada nova amizade e cada perfil seguido depende de aprovação do responsável legal — uma a uma, sem aprovar tudo." },
  { termo: "Base da AR", grupo: "identidade", def: "Onde ficam as pessoas (com documento cifrado) e a tabela de contas. É o único lugar do sistema com o vínculo conta↔pessoa." },
  { termo: "Bloqueio judicial", grupo: "identidade", def: "Marca que a justiça põe na pessoa, pela AR. A conta para de operar; a rede não apaga conteúdo por causa disso." },
  { termo: "Ledger selado", grupo: "identidade", def: "O livro público das aberturas. Registra que houve, quando e quantas — nunca para quem." },
  { termo: "Bloco", grupo: "conteúdo", def: "Um pedaço de conteúdo endereçado pelo seu próprio resumo. Muda um byte, muda o endereço." },
  { termo: "Impressão digital (hash)", grupo: "conteúdo", def: "O resumo único de um arquivo. Serve para provar que ninguém alterou o conteúdo." },
  { termo: "Provedor", grupo: "conteúdo", def: "Quem guarda e entrega os blocos. Pode ser uma empresa, uma cooperativa, uma universidade ou um aparelho." },
  { termo: "Réplica", grupo: "conteúdo", def: "Uma cópia a mais do mesmo bloco. O desenho exige pelo menos duas — para que uma queda não apague nada." },
  { termo: "Recibo", grupo: "conteúdo", def: "Lista assinada do que um provedor guarda. A soma dos recibos tem que bater com o total da conta." },
  { termo: "Tombstone", grupo: "conteúdo", def: "O que sobra de um conteúdo removido: o resumo, a data, o motivo e a assinatura. Prova que existiu, sem guardar o conteúdo." },
  { termo: "Remoção", grupo: "conteúdo", def: "Ato de quem publicou: apaga o original e preserva os derivados com aviso. A rede não remove por ordem judicial." },
  { termo: "Momento", grupo: "conteúdo", def: "Postagem com prazo de 24 horas. Depois do prazo, deixa de ser buscada e o provedor apaga o arquivo." },
  { termo: "Corte", grupo: "conteúdo", def: "Trecho derivado de uma transmissão ao vivo. Aponta para o original; se o original sai, o corte avisa." },
  { termo: "Chamada efêmera", grupo: "conteúdo", def: "Chamada de voz ou vídeo que não vira arquivo em lugar nenhum. Fim da chamada, fim da sessão." },
  { termo: "Eleição", grupo: "confiança", def: "Sua escolha por uma conta, guardada no seu aparelho. Não há cadastro, cargo nem chave de conselheiro." },
  { termo: "Selo de conselho", grupo: "confiança", def: "A contagem pública de eleições de uma conta. Diz “há quem confie”, nunca “esta conta é autoridade”." },
  { termo: "Grupo", grupo: "conteúdo", def: "Uma conta com chave e assinatura próprias. Quem entra recebe a chave; quando alguém sai, a chave é trocada." },
];

const grupos = [
  ["todos", "Todos"],
  ["identidade", "Identidade"],
  ["conteúdo", "Conteúdo"],
  ["confiança", "Confiança"],
] as const;

export function Glossario() {
  const [busca, setBusca] = useState("");
  const [grupo, setGrupo] = useState<string>("todos");

  const filtrados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    return termos
      .filter((t) => (grupo === "todos" ? true : t.grupo === grupo))
      .filter((t) => (q ? (t.termo + " " + t.def).toLowerCase().includes(q) : true));
  }, [busca, grupo]);

  return (
    <>
      <Section>
        <Kicker>Vocabulário</Kicker>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Glossário</h1>
        <Lead>
          As palavras que este site usa, em linguagem de gente. Nenhuma definição depende de outra
          para fazer sentido.
        </Lead>
      </Section>

      <Section tight>
        <div className="flex flex-wrap items-center gap-2">
          {grupos.map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setGrupo(id)}
              className={`rounded-full border px-3.5 py-1.5 text-[0.86rem] font-semibold transition ${
                grupo === id
                  ? "border-brand bg-brand text-white"
                  : "border-line-strong bg-surface text-text-soft hover:bg-surface-2"
              }`}
            >
              {label}
            </button>
          ))}
          <input
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar termo…"
            aria-label="Buscar termo no glossário"
            className="ms-auto w-full max-w-64 rounded-full border border-line bg-surface px-4 py-1.5 text-[0.9rem] outline-none focus:border-brand sm:w-64"
          />
        </div>

        <dl className="mt-6 grid gap-3 md:grid-cols-2">
          {filtrados.map((t) => (
            <div key={t.termo} className="rounded-2xl border border-line bg-surface p-4">
              <dt className="font-bold">{t.termo}</dt>
              <dd className="mt-1 text-[0.92rem] leading-relaxed text-text-soft">{t.def}</dd>
            </div>
          ))}
        </dl>

        {filtrados.length === 0 && (
          <p className="mt-6 text-text-soft">Nenhum termo encontrado para “{busca}”.</p>
        )}

        <p className="mt-6 text-[0.9rem] text-text-faint">
          {termos.length} termos. O vocabulário técnico do projeto, com DCP, domain-guard e vetores,
          vive na documentação do repositório — não aqui.
        </p>
      </Section>
    </>
  );
}
