import { useState } from 'react'

type Phase = {
  title: string
  summary: string
  steps: string[]
}

const phases: Phase[] = [
  {
    title: 'Aulas existentes',
    summary:
      'Transformar as cinco aulas em componentes React tipados e manter a coerência do layout original.',
    steps: [
      'Extrair hero, cards, grid e footer em componentes reutilizáveis.',
      'Transmitir dados via props e documentar a árvore no App principal.',
      'Aplicar classes utilitárias do Tailwind em cada seção para preservar o visual.',
    ],
  },
  {
    title: 'Hooks & estado',
    summary:
      'Mostrar a diferença entre HTML estático e React com hooks e estado controlado.',
    steps: [
      'Adicionar exemplos simples (`useState`, `useEffect`) para tema ou contador.',
      'Garantir keys no `map` e usar imutabilidade nas atualizações.',
      'Incorporar feedback visual via classes condicionais do Tailwind.',
    ],
  },
  {
    title: 'Rotas & organização',
    summary:
      'Criar rotas como `/aula-01` e `/aula-05` mantendo layout compartilhado.',
    steps: [
      'Instalar `react-router-dom` e dividir a UI em telas distintas.',
      'Manter navbar/footer comuns e trocar apenas o conteúdo principal.',
      'Documentar como o Tailwind se comporta em cada rota.',
    ],
  },
]

const highlights = [
  {
    title: 'Tailwind config',
    detail:
      'Arquivo `tailwind.config.ts` aponta para `./index.html` e `./src/**/*.{ts,tsx,js,jsx}`; cria tokens de cor e espaçamento alinhados ao projeto estático.',
  },
  {
    title: 'Migração incremental',
    detail:
      'A cada aula migrada, registramos o componente correspondente e mantemos as seções organizadas por props.',
  },
  {
    title: 'Padrões de fluxo',
    detail:
      'A “professor rule” guia o fluxo: CLI → Vite → Componentes → Hooks → Rotas → Tailwind.',
  },
  {
    title: 'Documentação viva',
    detail:
      'O plano de aulas novas e o roadmap ficam no `react-migration-plan.md` para garantir visão de longo prazo.',
  },
]

const laneChips = ['CLI Tools', 'Vite', 'Componentes', 'Hooks', 'Rotas', 'Tailwind']

function App() {
  const [activePhase, setActivePhase] = useState(phases[0].title)
  const currentPhase =
    phases.find((phase) => phase.title === activePhase) ?? phases[0]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12">
        <header className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
              professor rule
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              React + Tailwind guiados pelo plano para as 13 aulas
            </h1>
            <p className="text-lg text-slate-300">
              CLI Tools → Vite → Componentes → Hooks → Rotas → Styling. Este projeto
              será o single source of truth para a evolução do conteúdo.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {laneChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300"
              >
                {chip}
              </span>
            ))}
          </div>
        </header>

        <section className="space-y-6 rounded-3xl bg-slate-900/70 p-6 shadow-[0_40px_120px_-40px_rgba(16,185,129,0.8)] shadow-emerald-500/30">
          <div className="flex flex-wrap gap-3">
            {phases.map((phase) => (
              <button
                key={phase.title}
                type="button"
                onClick={() => setActivePhase(phase.title)}
                className={`rounded-full border px-4 py-1 text-sm font-semibold transition ${
                  phase.title === activePhase
                    ? 'border-emerald-400 bg-emerald-500/10 text-emerald-200'
                    : 'border-slate-800 text-slate-300 hover:border-slate-600 hover:text-white'
                }`}
              >
                {phase.title}
              </button>
            ))}
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
            <h2 className="text-2xl font-semibold text-white">{currentPhase.title}</h2>
            <p className="text-sm text-slate-400">{currentPhase.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {currentPhase.steps.map((step) => (
                <li
                  key={`${currentPhase.title}-${step}`}
                  className="flex items-start gap-2"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-slate-800/60 bg-slate-900/60 p-6 sm:grid-cols-2">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="space-y-3 rounded-2xl border border-slate-800/40 bg-slate-950/60 p-5"
            >
              <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
              <p className="text-sm text-slate-300">{highlight.detail}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}

export default App
