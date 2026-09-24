import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Circle,
  Droplets,
  Gauge,
  ListVideo,
  Menu,
  Paintbrush,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Video,
  Wrench,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lava Jato do Diogo | Área de Membros" },
      {
        name: "description",
        content:
          "Área de membros do Lava Jato do Diogo com os vídeos organizados por processo.",
      },
    ],
  }),
  component: Index,
});

type Lesson = {
  key: string;
  title: string;
  fileName: string;
  driveId: string;
  description: string;
  duplicate?: boolean;
};

type Module = {
  key: string;
  number: string;
  title: string;
  description: string;
  icon: typeof Wrench;
  lessons: Lesson[];
};

const modules: Module[] = [
  {
    key: "visao-geral",
    number: "01",
    title: "Visão geral do serviço",
    description:
      "Uma visão do atendimento completo para o aluno entender a sequência geral antes de entrar nos processos específicos.",
    icon: BookOpen,
    lessons: [
      {
        key: "servico-completo",
        title: "Serviço completo de lavagem e detalhamento",
        fileName: "b2f547b2-aa9c-42ff-990d-e195e39d795c.mp4",
        driveId: "1RVWsJXW2JIVPR5HzHoFizLZitZU74Tvk",
        description:
          "Vídeo de apresentação de um serviço completo, mostrando etapas internas e externas e o nível de detalhe do atendimento.",
      },
    ],
  },
  {
    key: "produtos-diluicoes",
    number: "02",
    title: "Produtos e diluições",
    description:
      "Apresentação dos produtos utilizados no dia a dia, para que o aluno entenda o que cada produto faz antes de partir para a execução dos serviços.",
    icon: Sparkles,
    lessons: [
      {
        key: "produtos-01",
        title: "Produtos e diluições — Parte 1",
        fileName: "produtos 01.mp4",
        driveId: "1Yj6gJHuaFXn7iAIIV2inNshCUwYxwtnW",
        description:
          "Primeira parte da explicação dos produtos utilizados no processo de limpeza e detalhamento.",
      },
      {
        key: "produtos-02",
        title: "Produtos e diluições — Parte 2",
        fileName: "produtos 02.mp4",
        driveId: "1bStEPp5bCYHtgx0wBVKpRx7cF_d2mQ7B",
        description:
          "Continuação da apresentação dos produtos e de suas aplicações no serviço.",
      },
      {
        key: "produtos-03",
        title: "Produtos e diluições — Parte 3",
        fileName: "produtos 03.mp4",
        driveId: "1j9u5nyw-IQ7_kVMgT81XgNb0MODCuG8Q",
        description:
          "Terceira parte da explicação prática sobre os produtos usados no lava jato.",
      },
      {
        key: "produtos-04",
        title: "Produtos e diluições — Parte 4",
        fileName: "produtos 04.mp4",
        driveId: "1vJiCGE3i3vj8loGOt74sSpD9yOaMKg31",
        description:
          "Fechamento do módulo de produtos, complementando a apresentação dos itens usados nos demais processos.",
      },
    ],
  },
  {
    key: "limpeza-externa",
    number: "03",
    title: "Limpeza externa detalhada",
    description:
      "Limpeza externa por partes, começando pelas caixas de roda e chegando aos detalhes de grade e acabamento frontal.",
    icon: Droplets,
    lessons: [
      {
        key: "caixa-roda-01",
        title: "Limpeza da caixa de roda — Parte 1",
        fileName: "limpeza externa 01  + caixa de roda.mp4",
        driveId: "1wErLfLg-6nxMyE0EzFqU3vxLKONIdUzL",
        description:
          "Primeira etapa da limpeza externa com foco na caixa de roda e remoção da sujeira acumulada.",
      },
      {
        key: "caixa-roda-02",
        title: "Limpeza da caixa de roda — Parte 2",
        fileName: "limpeza externa 02  + caixa de roda.mp4",
        driveId: "1nzHxsbau4leiAKzLzF_O-Yblc31Z8cqM",
        description:
          "Continuação da limpeza da caixa de roda e do processo externo ao redor da roda.",
      },
      {
        key: "grade-frontal",
        title: "Limpeza detalhada da grade frontal",
        fileName: "limpeza externa detalhada, grade frontal.mp4",
        driveId: "12FqRZ3g4pqg0AUE9YFQLKvngCMIia3td",
        description:
          "Limpeza detalhada da região frontal do veículo, trabalhando grade, cantos e áreas que exigem atenção manual.",
      },
    ],
  },
  {
    key: "higienizacao-interna",
    number: "04",
    title: "Higienização interna",
    description:
      "Bancos, teto, portas, cintos, painel, carpetes, frestas, extração, sujeira pesada e formas diferentes de executar a limpeza interna.",
    icon: Droplets,
    lessons: [
      {
        key: "banco-etapa-completa",
        title: "Limpeza completa do banco de pano — etapa completa",
        fileName: "Vídeo de Ryan Pena.mp4",
        driveId: "1gyRiwbeCapSPK-I8XRWeF474rbYC01I1",
        description:
          "Aula longa com o processo completo de limpeza de banco de tecido, reunindo as etapas em uma única execução.",
      },
      {
        key: "banco-completo",
        title: "Higienização completa de banco",
        fileName: "7167b98f-6702-4a99-8d80-963b5fb2857e.mp4",
        driveId: "1dXnJAYEWtpv1jDenG53hMc2H1lG4pfye",
        description:
          "Aplicação do produto, escovação mecânica, extração e acabamento do banco removido do veículo.",
      },
      {
        key: "banco-sem-compressor",
        title: "Limpeza de banco sem compressor",
        fileName: "332b3c3d-f6b2-4b04-b206-99863ffb0dbf.mp4",
        driveId: "1RuE2Fxvm-CeddFlJyML7LQhBwJRhANNP",
        description:
          "Alternativa de higienização para quem ainda não possui compressor, usando borrifador manual e escovação.",
      },
      {
        key: "extracao-banco",
        title: "Extração de água e sujeira do banco",
        fileName: "9cd14fc9-a287-4603-afda-b0a6a53a24a9.mp4",
        driveId: "1zSD1BzFtWhxL5qhmtPShjxJ8KrFUoCOt",
        description:
          "Demonstração prática da extração por partes para retirar sujeira e reduzir excesso de água na espuma.",
      },
      {
        key: "teto",
        title: "Limpeza do teto do veículo",
        fileName: "13635d6d-b4a9-4f05-a53c-3096b6fb45eb.mp4",
        driveId: "11BtzaDaLUZmzlw298XY5Y0-i4-GLCJQi",
        description:
          "Higienização do forro do teto com aplicação controlada e cuidado para não danificar ou descolar o tecido.",
      },
      {
        key: "porta-cinto",
        title: "Limpeza do forro da porta e cinto",
        fileName: "limpeza interna porta + cinto.mp4",
        driveId: "12g0uVDIrysVEu3_WEnD8KK9Sr04HVYKs",
        description:
          "Limpeza detalhada do forro da porta e do cinto como parte da higienização interna do veículo.",
      },
      {
        key: "painel-detalhes",
        title: "Limpeza do painel e detalhes internos",
        fileName: "limpeza interna detalhes.mp4",
        driveId: "1fdv4Bt0QUZ164H_4ooc0JB1uL_hsFQ8q",
        description:
          "Limpeza de painel, comandos, cantos e detalhes internos com trabalho manual de acabamento.",
      },
      {
        key: "oleo-interno",
        title: "Tratamento de interior contaminado por óleo",
        fileName: "f3a65698-e2ed-457c-8d3b-16262ed26516.mp4",
        driveId: "1hl3vnw--_Wdkj2hFhnpq55-7aXwZMdPr",
        description:
          "Diagnóstico de um interior contaminado por óleo, com plano de aspiração, desengraxe, limpeza e tratamento do odor.",
      },
      {
        key: "vapor-carpete",
        title: "Limpeza a vapor do carpete",
        fileName: "0b16206e-5a62-44e0-9a8a-0fd1c5575b9f.mp4",
        driveId: "1ckvlhDef3T_mwU6HSSJH6qtd3Ccq4THL",
        description:
          "Demonstração visual da limpeza de carpete com vapor ou espuma e o resultado final da superfície.",
      },
      {
        key: "escovacao-carpete",
        title: "Escovação mecânica de carpete",
        fileName: "962c6669-3b45-4859-bc9b-7aee1e7a8f54.mp4",
        driveId: "1ySrwEzRHYvkZXI8FMk3WyE7xDpXKHkWK",
        description:
          "Uso de furadeira com escova circular para soltar sujeira incrustada antes da aspiração ou extração.",
      },
      {
        key: "aspiracao-frestas",
        title: "Aspiração de frestas do carpete",
        fileName: "a5507a09-5bd0-4a2f-a871-3cab14c9420d.mp4",
        driveId: "1ld5JAB79HzeSnK6ItsmfSuSLze4TQLa-",
        description:
          "Limpeza com bocal fino entre trilhos, cantos e áreas de difícil acesso do assoalho.",
      },
      {
        key: "carpete-sob-banco",
        title: "Limpeza de carpete sob o banco",
        fileName: "34ecad5c-b9ce-43da-8831-7b14742014a1.mp4",
        driveId: "1cUcYSwm3ImNtPHuxjYWFmAb_OQrHiu0p",
        description:
          "Combinação de ação mecânica e química em uma área estreita e normalmente esquecida.",
      },
    ],
  },
  {
    key: "motor",
    number: "05",
    title: "Limpeza e acabamento de motor",
    description:
      "O processo completo de limpeza do compartimento do motor: aplicação, ação química, escovação, sujeira pesada, enxágue, secagem e acabamento.",
    icon: Wrench,
    lessons: [
      {
        key: "motor-novo-01",
        title: "Limpeza de motor — Etapa 1",
        fileName: "limpezza motor 01.mp4",
        driveId: "1sbV7TAZOHA3a1xDUXCciz9j20MMn61jc",
        description:
          "Primeira etapa prática da nova sequência de limpeza de motor enviada para o curso.",
      },
      {
        key: "motor-novo-02",
        title: "Limpeza de motor — Etapa 2",
        fileName: "limpezza motor 02.mp4",
        driveId: "1UoiEOoQRnqpuCZI3ZlZB7wXG5QWVJZ0d",
        description:
          "Continuação do processo de limpeza do motor e das áreas próximas ao compartimento.",
      },
      {
        key: "motor-novo-03",
        title: "Limpeza de motor — Etapa 3",
        fileName: "limpezza motor 03.mp4",
        driveId: "1nI6U6XN-cNpxq22GECTBY_9gbgLOqu7o",
        description:
          "Terceira etapa da sequência prática de limpeza e acabamento do compartimento do motor.",
      },
      {
        key: "motor-detalhado",
        title: "Limpeza detalhada de motor",
        fileName: "3ee47e99-9988-4249-bae3-3c4efa20d0a5.mp4",
        driveId: "1eG92TiyCPO_j2IdFSvXU25zN2vEPO8aj",
        description:
          "Sequência completa com produtos, tempo de ação, escovação dos pontos difíceis, enxágue e secagem.",
      },
      {
        key: "acao-quimica",
        title: "Ação química na limpeza do motor",
        fileName: "598c4db8-1ad1-4d29-96d3-fd5b0b49b171.mp4",
        driveId: "1OMbbYvqxB-k4n-k-b3l4vGBTOT6szmBP",
        description:
          "Demonstração da reação entre os produtos aplicados e a sujeira no compartimento do motor.",
      },
      {
        key: "barro-motor",
        title: "Remoção de barro do motor",
        fileName: "e6d015d0-c4b6-4a47-a603-ff9a7e9616f2.mp4",
        driveId: "1s7m8NU4ZoZp8OCxLqTtzKVFS62RVPxBo",
        description:
          "Aplicação e escovação para desprender barro e sujeira pesada do compartimento do motor.",
      },
      {
        key: "acabamento-plasticos",
        title: "Acabamento de plásticos do motor",
        fileName: "919e7923-aa50-44e1-a1ec-aae97c5a831f.mp4",
        driveId: "16RH0IXYH-XJXeWUg7WTU3C6Osl_fzak3",
        description:
          "Etapa de acabamento para renovar visualmente plásticos, reservatórios e áreas próximas ao para-brisa.",
      },
    ],
  },
  {
    key: "polimento",
    number: "06",
    title: "Polimento e correção de pintura",
    description:
      "Treino de politriz, corte, refino, lustro, preparação da superfície e demonstrações de antes e depois reunidos no mesmo processo.",
    icon: Paintbrush,
    lessons: [
      {
        key: "polimento-duas-etapas",
        title: "Polimento técnico em duas etapas",
        fileName: "88ecf91f-e92a-4d9e-be44-1c0bab0964f3.mp4",
        driveId: "1QuZeaZJYpna_xJAePKNQVT42kzFN9szI",
        description:
          "Corte com politriz rotativa seguido de acabamento com roto-orbital e conferência de hologramas.",
      },
      {
        key: "treino-politriz",
        title: "Treinamento de operador de politriz",
        fileName: "cea76b93-6976-4a14-a19f-44e6fa5069de.mp4",
        driveId: "1QX01-9NJf-oX2uTtcrUftivCcX1nJ2cg",
        description:
          "Treinamento prático de um iniciante no controle da politriz rotativa, velocidade e passadas.",
      },
      {
        key: "refino-lustro",
        title: "Refino e lustro comercial",
        fileName: "6381753f-a6a6-4613-888b-ea79f24ec618.mp4",
        driveId: "1QFM5RdpF33iOxD-bWc0EdC_P-dtohW4x",
        description:
          "Continuação do processo com boina de espuma, refino, lustro e comparação do brilho final.",
      },
      {
        key: "preparacao-tampa",
        title: "Preparação da superfície para polimento",
        fileName: "16286bfd-1f1f-4200-948c-6e1a7e1bd956.mp4",
        driveId: "1-zpnwVrudWsN9PSpEAZgOimWCUl4xrS8",
        description:
          "Vídeo de preparação da tampa traseira. O relatório não confirma com segurança se a técnica mostrada é lixamento ou descontaminação.",
      },
      {
        key: "preparacao-tampa-copia",
        title: "Preparação da superfície — cópia 2",
        fileName: "16286bfd-1f1f-4200-948c-6e1a7e1bd956.mp4",
        driveId: "12rF5dsuiJXXLj1Fog6YJ9whIQCFItmL2",
        description:
          "Segundo arquivo do Drive com o mesmo nome, duração, tamanho e conteúdo visual da aula anterior.",
        duplicate: true,
      },
      {
        key: "polimento-comercial",
        title: "Polimento comercial — antes e depois",
        fileName: "303a5206-8428-47dc-9354-84981e3ee99b.mp4",
        driveId: "15pqI-6Nt01GwRg4pdhi3sH9SJfe30mML",
        description:
          "Demonstração visual do polimento comercial com área delimitada, aplicação do composto e contraste final.",
      },
    ],
  },
  {
    key: "protecao-pintura",
    number: "07",
    title: "Proteção e acabamento da pintura",
    description:
      "Descontaminação, enceramento, vitrificação, remoção do excesso e prova visual da repelência.",
    icon: ShieldCheck,
    lessons: [
      {
        key: "vitrificador",
        title: "Aplicação de vitrificador na pintura",
        fileName: "aa643e67-0cdf-42f7-8904-ae77a56af195.mp4",
        driveId: "1LACAJnhaa1S1iJYaesp2ifQGZGtyVDex",
        description:
          "Aplicação uniforme do vitrificador e orientação de tempo de espera antes da remoção.",
      },
      {
        key: "descontaminacao-enceramento",
        title: "Descontaminação e enceramento",
        fileName: "f0596d0d-d255-4f22-ab6a-b8f06102b325.mp4",
        driveId: "1IhNfu0EylyJZi_Z6lWB_qPM7cIVbdc9E",
        description:
          "Descontaminação da pintura seguida de aplicação de cera e acabamento com microfibra.",
      },
      {
        key: "repelencia-enceramento",
        title: "Teste de repelência após enceramento",
        fileName: "bdb89b40-f749-4cbb-b78b-6abc6ae7002e.mp4",
        driveId: "1A7_NXsfzx6Wc3PM_H8fBeNB4eJK3HDcI",
        description:
          "Comparação visual entre uma área tratada e outra sem tratamento para mostrar o efeito hidrofóbico.",
      },
      {
        key: "remocao-vitrificacao",
        title: "Remoção do excesso da vitrificação",
        fileName: "baecb6f2-1bc1-4f6f-b6f6-6f9396f3d0e9.mp4",
        driveId: "1frDvk8EUh2Rttow-e4FSBu5vnD424zQ2",
        description:
          "Etapa final da vitrificação com toalha úmida, microfibra seca e demonstração do brilho final.",
      },
    ],
  },
  {
    key: "vidros",
    number: "08",
    title: "Vidros e repelência de chuva",
    description:
      "Aplicações específicas para o para-brisa que funcionam como serviço adicional dentro do lava jato.",
    icon: Sparkles,
    lessons: [
      {
        key: "cristalizacao-vidro",
        title: "Cristalização de vidro",
        fileName: "d9831137-61ad-4ae7-ba0b-18f226a1a859.mp4",
        driveId: "1-eqR8I5jRLkEosSMH9YyYYCswFuvQ1Qi",
        description:
          "Aplicação do produto no para-brisa, movimentos cruzados, tempo de espera e remoção do excesso.",
      },
      {
        key: "repelente-chuva",
        title: "Aplicação de repelente de chuva no vidro",
        fileName: "2bca220e-1852-48e3-9988-84bf6b710778.mp4",
        driveId: "1jMaD2Ff2oyOA5mhMfD50kkz6bm-uyXaK",
        description:
          "Aplicação de repelente de chuva no para-brisa com demonstração do procedimento e do valor do serviço.",
      },
    ],
  },
  {
    key: "farois",
    number: "09",
    title: "Restauração de faróis",
    description:
      "A sequência completa de correção: remoção das marcas, progressão das lixas e restauração química final.",
    icon: Gauge,
    lessons: [
      {
        key: "correcao-lixamento",
        title: "Correção do lixamento de farol",
        fileName: "bb77d21d-396d-4329-bca6-20ec4a555998.mp4",
        driveId: "1TGEwcUuqodVrAxsIvykDiqWNaAq-i-5n",
        description:
          "Correção das marcas do lixamento anterior com mudança de sentido e acabamento das áreas estreitas.",
      },
      {
        key: "progressao-lixas",
        title: "Progressão de lixas na restauração de farol",
        fileName: "f4cb3371-6b80-43ca-8144-1e0d340e792f.mp4",
        driveId: "18wb6OEZSnQdMqbN_wI5H-oqGkysxoS-w",
        description:
          "Evolução do lixamento para deixar a lente uniforme antes da aplicação do polímero.",
      },
      {
        key: "restauracao-quimica",
        title: "Restauração química de farol",
        fileName: "c6e25da1-cf6d-4037-abcd-065592b4d5a5.mp4",
        driveId: "1K5XzGrvg7AWXjcStsn1znWvANs4j0lBJ",
        description:
          "Aplicação do vapor de polímero sobre a lente para recuperar a transparência do farol.",
      },
    ],
  },
]

const allLessons = modules.flatMap((module) =>
  module.lessons.map((lesson) => ({ ...lesson, moduleKey: module.key })),
);

function getPreviewUrl(driveId: string) {
  return `https://drive.google.com/file/d/${driveId}/preview`;
}

function Index() {
  const [selectedKey, setSelectedKey] = useState(allLessons[0].key);
  const [openModules, setOpenModules] = useState<string[]>([
    modules[0].key,
    modules[1].key,
  ]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [completed, setCompleted] = useState<string[]>([]);

  const selectedLesson = useMemo(
    () => allLessons.find((lesson) => lesson.key === selectedKey) ?? allLessons[0],
    [selectedKey],
  );

  const selectedModule = useMemo(
    () => modules.find((module) => module.key === selectedLesson.moduleKey) ?? modules[0],
    [selectedLesson.moduleKey],
  );

  const lessonNumber =
    selectedModule.lessons.findIndex((lesson) => lesson.key === selectedLesson.key) + 1;

  const completedCount = completed.length;
  const progress = Math.round((completedCount / allLessons.length) * 100);

  function toggleModule(moduleKey: string) {
    setOpenModules((current) =>
      current.includes(moduleKey)
        ? current.filter((key) => key !== moduleKey)
        : [...current, moduleKey],
    );
  }

  function selectLesson(lessonKey: string) {
    setSelectedKey(lessonKey);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleCompleted() {
    setCompleted((current) =>
      current.includes(selectedLesson.key)
        ? current.filter((key) => key !== selectedLesson.key)
        : [...current, selectedLesson.key],
    );
  }

  return (
    <main className="min-h-screen bg-[#070b12] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b12]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-4 px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:hidden"
            aria-label="Abrir aulas"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white">
              <Video className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-black tracking-tight sm:text-base">
                Lava Jato do Diogo
              </p>
              <p className="truncate text-[11px] uppercase tracking-[0.16em] text-white/35">
                Área de membros
              </p>
            </div>
          </div>

          <div className="ml-auto hidden min-w-[220px] items-center gap-3 sm:flex">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-blue-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-white/45">{progress}%</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[360px_minmax(0,1fr)]">
        <aside className="hidden border-r border-white/10 bg-[#090e16] lg:block">
          <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto p-4">
            <CourseSidebar
              selectedKey={selectedKey}
              openModules={openModules}
              completed={completed}
              onSelect={selectLesson}
              onToggleModule={toggleModule}
            />
          </div>
        </aside>

        <section className="min-w-0 px-4 py-5 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-blue-300">
                Módulo {selectedModule.number}
              </span>
              <span className="text-white/30">•</span>
              <span className="text-white/45">{selectedModule.title}</span>
              {selectedLesson.duplicate && (
                <span className="rounded-full bg-amber-400/10 px-3 py-1.5 text-amber-300">
                  arquivo duplicado
                </span>
              )}
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/30">
              <div className="aspect-video w-full">
                <iframe
                  key={selectedLesson.driveId}
                  src={getPreviewUrl(selectedLesson.driveId)}
                  title={selectedLesson.title}
                  className="h-full w-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                  Aula {String(lessonNumber).padStart(2, "0")}
                </p>
                <h1 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl">
                  {selectedLesson.title}
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                  {selectedLesson.description}
                </p>
              </div>

              <button
                type="button"
                onClick={toggleCompleted}
                className={
                  completed.includes(selectedLesson.key)
                    ? "inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm font-bold text-emerald-300"
                    : "inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white/70 transition hover:bg-white/10"
                }
              >
                {completed.includes(selectedLesson.key) ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <Circle className="h-4 w-4" />
                )}
                {completed.includes(selectedLesson.key)
                  ? "Aula concluída"
                  : "Marcar como concluída"}
              </button>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <div className="mb-2 flex items-center gap-2 text-sm font-bold text-white/85">
                <ListVideo className="h-4 w-4 text-blue-400" />
                Sobre este módulo
              </div>
              <p className="text-sm leading-6 text-white/50">
                {selectedModule.description}
              </p>
            </div>

            <div className="mt-8 lg:hidden">
              <h2 className="mb-4 text-lg font-black">Aulas deste módulo</h2>
              <div className="space-y-2">
                {selectedModule.lessons.map((lesson, index) => (
                  <LessonButton
                    key={lesson.key}
                    lesson={lesson}
                    index={index}
                    active={lesson.key === selectedKey}
                    completed={completed.includes(lesson.key)}
                    onClick={() => selectLesson(lesson.key)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fechar menu"
          />
          <aside className="absolute inset-y-0 left-0 w-[min(92vw,380px)] overflow-y-auto border-r border-white/10 bg-[#090e16] p-4 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="font-black">Conteúdo do curso</p>
                <p className="mt-0.5 text-xs text-white/35">
                  {allLessons.length} vídeos • {modules.length} módulos
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5"
                aria-label="Fechar aulas"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <CourseSidebar
              selectedKey={selectedKey}
              openModules={openModules}
              completed={completed}
              onSelect={selectLesson}
              onToggleModule={toggleModule}
            />
          </aside>
        </div>
      )}
    </main>
  );
}

function CourseSidebar({
  selectedKey,
  openModules,
  completed,
  onSelect,
  onToggleModule,
}: {
  selectedKey: string;
  openModules: string[];
  completed: string[];
  onSelect: (lessonKey: string) => void;
  onToggleModule: (moduleKey: string) => void;
}) {
  return (
    <div>
      <div className="space-y-2">
        {modules.map((module) => {
          const Icon = module.icon;
          const isOpen = openModules.includes(module.key);
          const doneInModule = module.lessons.filter((lesson) =>
            completed.includes(lesson.key),
          ).length;

          return (
            <div
              key={module.key}
              className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025]"
            >
              <button
                type="button"
                onClick={() => onToggleModule(module.key)}
                className="flex w-full items-center gap-3 px-3 py-3.5 text-left"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">
                    Módulo {module.number}
                  </p>
                  <p className="truncate text-sm font-bold text-white/85">
                    {module.title}
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/30">
                    {doneInModule}/{module.lessons.length} concluídas
                  </p>
                </div>
                <ChevronDown
                  className={
                    isOpen
                      ? "h-4 w-4 shrink-0 rotate-180 text-white/35 transition-transform"
                      : "h-4 w-4 shrink-0 text-white/35 transition-transform"
                  }
                />
              </button>

              {isOpen && (
                <div className="border-t border-white/[0.08] p-2">
                  <div className="space-y-1.5">
                    {module.lessons.map((lesson, index) => (
                      <LessonButton
                        key={lesson.key}
                        lesson={lesson}
                        index={index}
                        active={lesson.key === selectedKey}
                        completed={completed.includes(lesson.key)}
                        onClick={() => onSelect(lesson.key)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LessonButton({
  lesson,
  index,
  active,
  completed,
  onClick,
}: {
  lesson: Lesson;
  index: number;
  active: boolean;
  completed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "flex w-full items-start gap-3 rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-3 text-left"
          : "flex w-full items-start gap-3 rounded-lg border border-transparent px-3 py-3 text-left transition hover:bg-white/[0.04]"
      }
    >
      <div
        className={
          active
            ? "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-500 text-[10px] font-black text-white"
            : "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/5 text-[10px] font-black text-white/35"
        }
      >
        {completed ? <CheckCircle2 className="h-3.5 w-3.5" /> : index + 1}
      </div>

      <div className="min-w-0 flex-1">
        <p
          className={
            active
              ? "text-xs font-bold leading-5 text-white"
              : "text-xs font-semibold leading-5 text-white/65"
          }
        >
          {lesson.title}
        </p>
        {lesson.duplicate && (
          <span className="mt-1 inline-block rounded bg-amber-400/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-amber-300">
            duplicado
          </span>
        )}
      </div>
    </button>
  );
}
