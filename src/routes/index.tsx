import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Car,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Droplets,
  ExternalLink,
  Gauge,
  Paintbrush,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Video,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lava Jato do Diogo | Estrutura do Curso" },
      {
        name: "description",
        content:
          "Estrutura inicial do Curso Lava Jato do Diogo, organizada a partir dos vídeos reais já gravados.",
      },
    ],
  }),
  component: Index,
});

type Lesson = {
  title: string;
  url: string;
  note?: string;
};

type CourseModule = {
  number: string;
  title: string;
  description: string;
  Icon: typeof Wrench;
  lessons: Lesson[];
};

const driveFolder =
  "https://drive.google.com/drive/folders/1QWxvHF4LGyFiPyCHGDZLBCWTyM5_CzPc";

const modules: CourseModule[] = [
  {
    number: "01",
    title: "Visão geral do serviço",
    description:
      "Uma aula para apresentar ao aluno como funciona um serviço completo e o nível de detalhe esperado em um lava jato profissional.",
    Icon: Car,
    lessons: [
      {
        title: "Serviço completo de lavagem e detalhamento",
        url: "https://drive.google.com/file/d/1RVWsJXW2JIVPR5HzHoFizLZitZU74Tvk/view?usp=drivesdk",
        note: "Vídeo comercial que percorre o processo interno e externo.",
      },
    ],
  },
  {
    number: "02",
    title: "Higienização interna",
    description:
      "O maior bloco de conteúdo já gravado: bancos, teto, carpetes, frestas, extração e situações de sujeira pesada.",
    Icon: Droplets,
    lessons: [
      {
        title: "Higienização completa de banco",
        url: "https://drive.google.com/file/d/1dXnJAYEWtpv1jDenG53hMc2H1lG4pfye/view?usp=drivesdk",
      },
      {
        title: "Limpeza do teto do veículo",
        url: "https://drive.google.com/file/d/11BtzaDaLUZmzlw298XY5Y0-i4-GLCJQi/view?usp=drivesdk",
      },
      {
        title: "Limpeza de banco sem compressor",
        url: "https://drive.google.com/file/d/1RuE2Fxvm-CeddFlJyML7LQhBwJRhANNP/view?usp=drivesdk",
      },
      {
        title: "Extração de água e sujeira do banco",
        url: "https://drive.google.com/file/d/1zSD1BzFtWhxL5qhmtPShjxJ8KrFUoCOt/view?usp=drivesdk",
      },
      {
        title: "Tratamento de veículo contaminado por óleo",
        url: "https://drive.google.com/file/d/1hl3vnw--_Wdkj2hFhnpq55-7aXwZMdPr/view?usp=drivesdk",
      },
      {
        title: "Limpeza a vapor do carpete",
        url: "https://drive.google.com/file/d/1ckvlhDef3T_mwU6HSSJH6qtd3Ccq4THL/view?usp=drivesdk",
      },
      {
        title: "Escovação mecânica de carpete",
        url: "https://drive.google.com/file/d/1ySrwEzRHYvkZXI8FMk3WyE7xDpXKHkWK/view?usp=drivesdk",
      },
      {
        title: "Aspiração de frestas do carpete",
        url: "https://drive.google.com/file/d/1ld5JAB79HzeSnK6ItsmfSuSLze4TQLa-/view?usp=drivesdk",
      },
      {
        title: "Limpeza de carpete sob o banco",
        url: "https://drive.google.com/file/d/1cUcYSwm3ImNtPHuxjYWFmAb_OQrHiu0p/view?usp=drivesdk",
      },
    ],
  },
  {
    number: "03",
    title: "Limpeza e acabamento de motor",
    description:
      "Do processo químico até a remoção de barro, secagem e acabamento visual dos plásticos do cofre do motor.",
    Icon: Wrench,
    lessons: [
      {
        title: "Limpeza detalhada de motor",
        url: "https://drive.google.com/file/d/1eG92TiyCPO_j2IdFSvXU25zN2vEPO8aj/view?usp=drivesdk",
      },
      {
        title: "Ação química na limpeza do motor",
        url: "https://drive.google.com/file/d/1OMbbYvqxB-k4n-k-b3l4vGBTOT6szmBP/view?usp=drivesdk",
      },
      {
        title: "Remoção de barro do motor",
        url: "https://drive.google.com/file/d/1s7m8NU4ZoZp8OCxLqTtzKVFS62RVPxBo/view?usp=drivesdk",
      },
      {
        title: "Acabamento de plásticos do motor",
        url: "https://drive.google.com/file/d/16RH0IXYH-XJXeWUg7WTU3C6Osl_fzak3/view?usp=drivesdk",
      },
    ],
  },
  {
    number: "04",
    title: "Polimento e correção de pintura",
    description:
      "Conteúdo de corte, refino, lustro, controle da politriz e preparação da superfície antes do acabamento.",
    Icon: Paintbrush,
    lessons: [
      {
        title: "Polimento técnico em duas etapas",
        url: "https://drive.google.com/file/d/1QuZeaZJYpna_xJAePKNQVT42kzFN9szI/view?usp=drivesdk",
      },
      {
        title: "Treinamento de operador de politriz",
        url: "https://drive.google.com/file/d/1QX01-9NJf-oX2uTtcrUftivCcX1nJ2cg/view?usp=drivesdk",
      },
      {
        title: "Refino e lustro comercial",
        url: "https://drive.google.com/file/d/1QFM5RdpF33iOxD-bWc0EdC_P-dtohW4x/view?usp=drivesdk",
      },
      {
        title: "Preparação da pintura antes do polimento",
        url: "https://drive.google.com/file/d/1-zpnwVrudWsN9PSpEAZgOimWCUl4xrS8/view?usp=drivesdk",
        note: "No relatório, a técnica exata desse clipe não pôde ser confirmada.",
      },
      {
        title: "Polimento comercial — antes e depois",
        url: "https://drive.google.com/file/d/15pqI-6Nt01GwRg4pdhi3sH9SJfe30mML/view?usp=drivesdk",
      },
    ],
  },
  {
    number: "05",
    title: "Proteção e acabamento da pintura",
    description:
      "Vitrificação, descontaminação, enceramento, teste de repelência e acabamento final da proteção.",
    Icon: ShieldCheck,
    lessons: [
      {
        title: "Aplicação de vitrificador na pintura",
        url: "https://drive.google.com/file/d/1LACAJnhaa1S1iJYaesp2ifQGZGtyVDex/view?usp=drivesdk",
      },
      {
        title: "Descontaminação e enceramento",
        url: "https://drive.google.com/file/d/1IhNfu0EylyJZi_Z6lWB_qPM7cIVbdc9E/view?usp=drivesdk",
      },
      {
        title: "Teste de repelência após enceramento",
        url: "https://drive.google.com/file/d/1jMaD2Ff2oyOA5mhMfD50kkz6bm-uyXaK/view?usp=drivesdk",
      },
      {
        title: "Remoção do excesso da vitrificação",
        url: "https://drive.google.com/file/d/15pqI-6Nt01GwRg4pdhi3sH9SJfe30mML/view?usp=drivesdk",
      },
    ],
  },
  {
    number: "06",
    title: "Vidros e repelência de chuva",
    description:
      "Serviços rápidos para aumentar o ticket: cristalização e aplicação de repelente no para-brisa.",
    Icon: Sparkles,
    lessons: [
      {
        title: "Cristalização de vidro",
        url: "https://drive.google.com/file/d/1-eqR8I5jRLkEosSMH9YyYYCswFuvQ1Qi/view?usp=drivesdk",
      },
      {
        title: "Aplicação de repelente de chuva no vidro",
        url: "https://drive.google.com/file/d/1jMaD2Ff2oyOA5mhMfD50kkz6bm-uyXaK/view?usp=drivesdk",
      },
    ],
  },
  {
    number: "07",
    title: "Restauração de faróis",
    description:
      "Uma sequência praticamente pronta: correção do lixamento, progressão das lixas e restauração química final.",
    Icon: Gauge,
    lessons: [
      {
        title: "Correção do lixamento de farol",
        url: "https://drive.google.com/file/d/1TGEwcUuqodVrAxsIvykDiqWNaAq-i-5n/view?usp=drivesdk",
      },
      {
        title: "Progressão de lixas na restauração de farol",
        url: "https://drive.google.com/file/d/18wb6OEZSnQdMqbN_wI5H-oqGkysxoS-w/view?usp=drivesdk",
      },
      {
        title: "Restauração química de farol",
        url: "https://drive.google.com/file/d/1K5XzGrvg7AWXjcStsn1znWvANs4j0lBJ/view?usp=drivesdk",
      },
    ],
  },
];

const missingLessons = [
  "Apresentação do Diogo e visão do curso",
  "Como começar um lava jato em casa",
  "Equipamentos essenciais para começar",
  "Produtos, diluições e cuidados de segurança",
  "Lavagem simples do início ao acabamento",
  "Precificação, adicionais e primeiros clientes",
];

const totalLessons = modules.reduce(
  (total, module) => total + module.lessons.length,
  0,
);

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b12] text-white">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.18),transparent_34%),radial-gradient(circle_at_90%_10%,rgba(14,165,233,0.10),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            <Video className="h-3.5 w-3.5" />
            Estrutura inicial do curso
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-white/45">
                Lava Jato do Diogo
              </p>
              <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Transformando os vídeos já gravados em um{" "}
                <span className="text-blue-400">curso de verdade.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Os vídeos do Drive foram reorganizados por assunto para criar uma
                sequência lógica de aprendizado. Esta página é o esqueleto do curso e
                pode evoluir depois para área de membros, página de apresentação ou
                roteiro de gravação.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#modulos"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-400"
                >
                  <BookOpen className="h-4 w-4" />
                  Ver módulos
                </a>
                <a
                  href={driveFolder}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                >
                  Abrir pasta do Drive
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Stat value="28" label="vídeos únicos" />
              <Stat value="7" label="módulos com material" />
              <Stat value={String(totalLessons)} label="aulas organizadas" />
              <Stat value="6" label="aulas sugeridas" />
            </div>
          </div>
        </div>
      </section>

      <section id="modulos" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-9 max-w-3xl">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-300">
            <CheckCircle2 className="h-4 w-4" />
            Conteúdo que já existe
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Módulos montados com os vídeos do Drive
          </h2>
          <p className="mt-3 leading-7 text-white/55">
            Clique em cada módulo para abrir as aulas. Os botões levam direto ao
            vídeo correspondente no Google Drive.
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((module, moduleIndex) => {
            const Icon = module.Icon;
            return (
              <details
                key={module.number}
                open={moduleIndex === 0}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 p-5 sm:p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                        Módulo {module.number}
                      </span>
                      <span className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] font-medium text-white/45">
                        {module.lessons.length}{" "}
                        {module.lessons.length === 1 ? "aula" : "aulas"}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {module.title}
                    </h3>
                    <p className="mt-1 hidden max-w-3xl text-sm leading-6 text-white/45 sm:block">
                      {module.description}
                    </p>
                  </div>
                  <ChevronDown className="h-5 w-5 shrink-0 text-white/35 transition-transform duration-200 group-open:rotate-180" />
                </summary>

                <div className="border-t border-white/10 px-4 py-3 sm:px-6 sm:py-4">
                  <p className="mb-3 text-sm leading-6 text-white/45 sm:hidden">
                    {module.description}
                  </p>
                  <div className="divide-y divide-white/[0.08]">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lesson.title}
                        className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center"
                      >
                        <div className="flex min-w-0 flex-1 items-start gap-3">
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-xs font-bold text-white/45">
                            {String(lessonIndex + 1).padStart(2, "0")}
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-white/90">
                              {lesson.title}
                            </p>
                            {lesson.note && (
                              <p className="mt-1 text-xs leading-5 text-amber-200/60">
                                {lesson.note}
                              </p>
                            )}
                          </div>
                        </div>
                        <a
                          href={lesson.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/70 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300"
                        >
                          <PlayCircle className="h-4 w-4" />
                          Abrir vídeo
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-amber-300">
                <Video className="h-4 w-4" />
                Próximas gravações
              </div>
              <h2 className="text-3xl font-black tracking-tight">
                O que falta para fechar o curso
              </h2>
              <p className="mt-4 leading-7 text-white/55">
                O material atual é forte na execução prática. Estas aulas de ligação
                deixam o treinamento mais fácil de acompanhar para quem está começando
                do zero.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {missingLessons.map((lesson, index) => (
                <div
                  key={lesson}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#0b111b] p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-xs font-black text-amber-300">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm font-medium leading-5 text-white/75">
                    {lesson}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-white/[0.03] to-transparent p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-300">
                <CircleDollarSign className="h-4 w-4" />
                Próxima etapa
              </div>
              <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
                Depois podemos transformar este esqueleto na página final do curso.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/55">
                A partir daqui dá para separar plano Básico e Profissional, incluir
                benefícios, bônus, preço, provas sociais, checkout e os vídeos de
                apresentação que ainda serão gravados.
              </p>
            </div>
            <a
              href={driveFolder}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#070b12] transition hover:bg-blue-50"
            >
              Conferir vídeos
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs leading-5 text-white/30">
          Estrutura de organização do Curso Lava Jato do Diogo. Antes de publicar
          instruções técnicas, confira diluições, equipamentos de proteção e orientações
          oficiais dos fabricantes.
        </p>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
      <div className="text-2xl font-black tracking-tight text-white sm:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-white/35">
        {label}
      </div>
    </div>
  );
}
