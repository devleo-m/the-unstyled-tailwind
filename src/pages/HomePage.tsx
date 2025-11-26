import { Link } from 'react-router-dom'

type TagTone = 'purple' | 'pink' | 'white'

type LessonTag = {
    label: string
    tone: TagTone
}

type AulaCard = {
    badgeLabel: string
    title: string
    description: string
    link: string
    badgeClass: string
    arrowClass: string
    tags: LessonTag[]
    useReactLink?: boolean
    innerOverride?: string
}

const tagToneClasses: Record<TagTone, string> = {
    purple: 'bg-purple-600/20 border border-purple-500/30 text-purple-300',
    pink: 'bg-pink-600/20 border border-pink-500/30 text-pink-300',
    white: 'bg-white/20 border border-white/30 text-white',
}

const sharedInnerClasses =
    'gradient-border-inner p-6 bg-gradient-to-br from-slate-800/60 via-slate-800/60 to-slate-900/60 transition-all duration-300 group-hover:from-slate-800/80 group-hover:via-slate-800/80 group-hover:to-slate-900/80'

const lessonCards: AulaCard[] = [
    {
        badgeLabel: 'Aula 1',
        title: 'Introdução ao Tailwind CSS',
        description:
            'Filosofia utility-first, instalação, primeiros passos e comparação com CSS tradicional.',
        link: '/aula-01-introducao/index.html',
        badgeClass:
            'px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold shadow-lg shadow-purple-500/30',
        arrowClass:
            'text-gray-400 group-hover:text-purple-400 transition-colors transform group-hover:translate-x-1',
        tags: [
            { label: 'Utility-First', tone: 'purple' },
            { label: 'Instalação', tone: 'pink' },
            { label: 'Conceitos', tone: 'purple' },
        ],
        useReactLink: true,
    },
    {
        badgeLabel: 'Aula 2',
        title: 'Fundamentos e Classes Utilitárias',
        description:
            'Espaçamento, cores, tipografia, bordas, sombras e sistema de design.',
        link: 'aula-02-fundamentos/index.html',
        badgeClass:
            'px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold shadow-lg shadow-purple-500/30',
        arrowClass:
            'text-gray-400 group-hover:text-purple-400 transition-colors transform group-hover:translate-x-1',
        tags: [
            { label: 'Espaçamento', tone: 'purple' },
            { label: 'Cores', tone: 'pink' },
            { label: 'Tipografia', tone: 'purple' },
        ],
    },
    {
        badgeLabel: 'Aula 3',
        title: 'Layout: Display, Position e Flexbox',
        description: 'Controle de display, posicionamento e Flexbox completo.',
        link: 'aula-03-layout/index.html',
        badgeClass:
            'px-3 py-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg shadow-pink-500/30',
        arrowClass:
            'text-gray-400 group-hover:text-pink-400 transition-colors transform group-hover:translate-x-1',
        tags: [
            { label: 'Display', tone: 'pink' },
            { label: 'Position', tone: 'purple' },
            { label: 'Flexbox', tone: 'pink' },
        ],
    },
    {
        badgeLabel: 'Aula 4',
        title: 'CSS Grid com Tailwind',
        description: 'Layouts bidimensionais, grid-template-areas e grids responsivos.',
        link: 'aula-04-grid/index.html',
        badgeClass:
            'px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold shadow-lg shadow-purple-500/30',
        arrowClass:
            'text-gray-400 group-hover:text-purple-400 transition-colors transform group-hover:translate-x-1',
        tags: [
            { label: 'Grid', tone: 'purple' },
            { label: 'Layouts', tone: 'pink' },
            { label: 'Spanning', tone: 'purple' },
        ],
    },
    {
        badgeLabel: 'Aula 5',
        title: 'Responsividade (Mobile-First)',
        description: 'Breakpoints, mobile-first e layouts adaptativos.',
        link: 'aula-05-responsividade/index.html',
        badgeClass:
            'px-3 py-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg shadow-pink-500/30',
        arrowClass:
            'text-gray-400 group-hover:text-pink-400 transition-colors transform group-hover:translate-x-1',
        tags: [
            { label: 'Breakpoints', tone: 'pink' },
            { label: 'Mobile-First', tone: 'purple' },
            { label: 'Adaptativo', tone: 'pink' },
        ],
    },
    {
        badgeLabel: 'Aula 6',
        title: 'Estados e Interatividade',
        description: 'Hover, focus, active, transições, animações e transforms.',
        link: 'aula-06-estados/index.html',
        badgeClass:
            'px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold shadow-lg shadow-purple-500/30',
        arrowClass:
            'text-gray-400 group-hover:text-purple-400 transition-colors transform group-hover:translate-x-1',
        tags: [
            { label: 'Hover', tone: 'purple' },
            { label: 'Transições', tone: 'pink' },
            { label: 'Animações', tone: 'purple' },
        ],
    },
    {
        badgeLabel: 'Aula 7',
        title: 'Componentes e @apply',
        description: 'Criando componentes reutilizáveis e organizando estilos.',
        link: 'aula-07-componentes/index.html',
        badgeClass:
            'px-3 py-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg shadow-pink-500/30',
        arrowClass:
            'text-gray-400 group-hover:text-pink-400 transition-colors transform group-hover:translate-x-1',
        tags: [
            { label: '@apply', tone: 'pink' },
            { label: 'Componentes', tone: 'purple' },
            { label: 'Reutilização', tone: 'pink' },
        ],
    },
    {
        badgeLabel: 'Aula 8',
        title: 'Customização e Configuração',
        description: 'tailwind.config.js, cores, espaçamentos e breakpoints.',
        link: 'aula-08-customizacao/index.html',
        badgeClass:
            'px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold shadow-lg shadow-purple-500/30',
        arrowClass:
            'text-gray-400 group-hover:text-purple-400 transition-colors transform group-hover:translate-x-1',
        tags: [
            { label: 'Config', tone: 'purple' },
            { label: 'Customização', tone: 'pink' },
            { label: 'Tema', tone: 'purple' },
        ],
    },
    {
        badgeLabel: 'Aula 9',
        title: 'Plugins e Extensões',
        description: 'Plugins oficiais, da comunidade e criação própria.',
        link: 'aula-09-plugins/index.html',
        badgeClass:
            'px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold shadow-lg shadow-purple-500/30',
        arrowClass:
            'text-gray-400 group-hover:text-purple-400 transition-colors transform group-hover:translate-x-1',
        tags: [
            { label: 'Plugins', tone: 'purple' },
            { label: 'Typography', tone: 'pink' },
            { label: 'Forms', tone: 'purple' },
        ],
    },
    {
        badgeLabel: 'Aula 10',
        title: 'Performance e Otimização',
        description: 'PurgeCSS, JIT, tree-shaking e análise de bundle.',
        link: 'aula-10-performance/index.html',
        badgeClass:
            'px-3 py-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg shadow-pink-500/30',
        arrowClass:
            'text-gray-400 group-hover:text-pink-400 transition-colors transform group-hover:translate-x-1',
        tags: [
            { label: 'Performance', tone: 'pink' },
            { label: 'JIT', tone: 'purple' },
            { label: 'Otimização', tone: 'pink' },
        ],
    },
    {
        badgeLabel: 'Aula 11',
        title: 'Boas Práticas e Padrões',
        description: 'Organização de código, nomenclatura e manutenção.',
        link: 'aula-11-boas-praticas/index.html',
        badgeClass:
            'px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold shadow-lg shadow-purple-500/30',
        arrowClass:
            'text-gray-400 group-hover:text-purple-400 transition-colors transform group-hover:translate-x-1',
        tags: [
            { label: 'Padrões', tone: 'purple' },
            { label: 'Organização', tone: 'pink' },
            { label: 'Equipe', tone: 'purple' },
        ],
    },
    {
        badgeLabel: 'Aula 12',
        title: 'Integração com Frameworks',
        description: 'React, Next.js, PostCSS e processo completo de build.',
        link: 'aula-12-integracao/index.html',
        badgeClass:
            'px-3 py-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg shadow-pink-500/30',
        arrowClass:
            'text-gray-400 group-hover:text-pink-400 transition-colors transform group-hover:translate-x-1',
        tags: [
            { label: 'React', tone: 'pink' },
            { label: 'Next.js', tone: 'purple' },
            { label: 'Build Tools', tone: 'pink' },
        ],
    },
    {
        badgeLabel: 'Aula 13',
        title: 'Projeto Prático Completo',
        description: 'Aplicando todos os conceitos aprendidos em um projeto real.',
        link: 'aula-13-projeto-completo/index.html',
        badgeClass:
            'px-3 py-1 bg-white/20 text-white rounded-full text-sm font-bold shadow-lg border border-white/30',
        arrowClass:
            'text-white/80 group-hover:text-yellow-300 transition-colors transform group-hover:translate-x-1',
        tags: [
            { label: 'Projeto Real', tone: 'white' },
            { label: 'Todos Conceitos', tone: 'white' },
            { label: 'Produção', tone: 'white' },
        ],
        innerOverride:
            'group-hover:from-purple-600/40 group-hover:via-pink-600/40 group-hover:to-purple-600/40',
    },
]

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
            <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50 shadow-lg shadow-black/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
                                <span className="text-white font-bold text-xl">T</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">Tailwind CSS</h1>
                                <p className="text-sm text-gray-400">Curso Prático Completo</p>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold shadow-lg shadow-purple-500/30">
                                ✅ 13 Aulas
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold text-white mb-4">
                        Projetos Práticos de <span className="gradient-text-animated">Tailwind CSS</span>
                    </h2>
                    <p className="text-xl text-slate-300 mb-8">
                        Aprenda Tailwind CSS na prática! Cada projeto demonstra todos os conceitos da aula de forma detalhada e didática.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 text-slate-200 rounded-full text-sm font-semibold hover:border-purple-500/50 hover:text-purple-300 transition-colors">
                            🎯 Projetos Práticos
                        </div>
                        <div className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 text-slate-200 rounded-full text-sm font-semibold hover:border-pink-500/50 hover:text-pink-300 transition-colors">
                            📚 13 Aulas Completas
                        </div>
                        <div className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 text-slate-200 rounded-full text-sm font-semibold hover:border-purple-500/50 hover:text-purple-300 transition-colors">
                            💡 Exemplos Detalhados
                        </div>
                    </div>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lessonCards.map((card) => (
                        <LessonCard key={card.badgeLabel + card.title} card={card} />
                    ))}
                </div>
            </main>

            <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-slate-700/50 text-slate-300 py-12 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Curso Prático de Tailwind CSS</h3>
                        <p className="text-slate-400 mb-6">
                            Aprenda Tailwind CSS de forma prática e detalhada. Cada projeto demonstra todos os conceitos da aula.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <a
                                href="demonstracao-completa/index.html"
                                className="text-slate-300 hover:text-purple-400 transition-colors"
                            >
                                Demonstração Completa
                            </a>
                            <span className="text-slate-600">|</span>
                            <a href="curso/README.md" className="text-slate-300 hover:text-pink-400 transition-colors">
                                Roteiro do Curso
                            </a>
                        </div>
                        <p className="mt-8 text-sm text-slate-500">
                            &copy; {new Date().getFullYear()} - Curso Didático Tailwind CSS
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function LessonCard({ card }: { card: AulaCard }) {
    const cardContent = (
        <div className="gradient-border h-full">
            <div className={`${sharedInnerClasses} ${card.innerOverride ?? ''}`}>
                <div className="flex items-center justify-between mb-4">
                    <span className={card.badgeClass}>{card.badgeLabel}</span>
                    <span className={card.arrowClass}>→</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{card.description}</p>
                <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                        <span
                            key={`${card.badgeLabel}-${tag.label}`}
                            className={`px-2 py-1 text-xs rounded ${tagToneClasses[tag.tone]}`}
                        >
                            {tag.label}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )

    if (card.useReactLink) {
        return (
            <Link to={card.link} className="group">
                {cardContent}
            </Link>
        )
    }

    return (
        <a href={card.link} className="group">
            {cardContent}
        </a>
    )
}

