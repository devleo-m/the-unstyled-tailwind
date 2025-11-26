import CodeBlock from '../components/aula01/CodeBlock'
import ComparisonCard from '../components/aula01/ComparisonCard'

const heroBadges = [
    '🎯 Utility-First',
    '📚 Conceitos Fundamentais',
    '💡 Exemplos Práticos',
]

const frameworkComparison = [
    {
        title: 'Framework Tradicional',
        subtitle: 'Estilos prontos, pouco controle.',
        icon: '❌',
        accent: 'red' as const,
        points: [
            'Componentes pré-construídos com temas fixos.',
            'CSS envolve múltiplos arquivos e nomes específicos.',
            'Customização profunda exige overrides.',
            'Exemplo: Bootstrap, Materialize.',
        ],
    },
    {
        title: 'Tailwind CSS',
        subtitle: 'Classes utilitárias e composição.',
        icon: '✅',
        accent: 'green' as const,
        points: [
            'Classes pequeñas e atômicas para cada propriedade.',
            'Você combina estilos diretamente no HTML/JSX.',
            'Controle total de customização sem sair do markup.',
            'Sem componentes pré-construídos; você monta o design.',
        ],
    },
]

const philosophyComparison = [
    {
        title: 'CSS Tradicional',
        description: 'Construir do zero cada classe e nomear componentes.',
        accent: 'red' as const,
    },
    {
        title: 'Tailwind',
        description: 'Combinar peças reutilizáveis como um kit de LEGO.',
        accent: 'green' as const,
    },
]

const mentalMapping = [
    { cls: 'p-4', property: 'padding', value: '1rem', example: 'Box azul com padding' },
    { cls: 'm-2', property: 'margin', value: '0.5rem', example: 'Margin destacado' },
    { cls: 'bg-blue-500', property: 'background-color', value: 'rgb(59 130 246)', example: 'Botão azul' },
    { cls: 'text-white', property: 'color', value: 'white', example: 'Texto branco' },
    { cls: 'text-xl', property: 'font-size', value: '1.25rem', example: 'Título grande' },
    { cls: 'font-bold', property: 'font-weight', value: '700', example: 'Texto negrito' },
]

const buttonCssLines = [
    <span className="text-green-400">/* HTML */</span>,
    '<button class="btn-primary">Clique aqui</button>',
    <span className="text-green-400 mt-2 block">/* CSS */</span>,
    <span className="ml-4">.btn-primary &#123;</span>,
    <span className="ml-4">  padding: 0.5rem 1rem;</span>,
    <span className="ml-4">  background-color: #3b82f6;</span>,
    <span className="ml-4">  color: white;</span>,
    <span className="ml-4">  border-radius: 0.375rem;</span>,
    <span className="ml-4">  font-weight: 500;</span>,
    <span className="ml-4">&#125;</span>,
]

const tailwindButtonLines = [
    '<button class="px-4 py-2 bg-blue-500 text-white rounded font-medium">',
    '  Clique aqui',
    '</button>',
]

export default function Aula01Page() {
    return (
        <div className="min-h-screen bg-slate-50">
            <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                    <span className="text-xl font-bold text-blue-600">← Voltar</span>
                    <div className="flex items-center gap-3">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                            Aula 1
                        </span>
                        <p className="text-sm text-slate-600">Introdução ao Tailwind CSS</p>
                    </div>
                </div>
            </nav>

            <header className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
                <div className="mx-auto max-w-4xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-semibold sm:text-5xl">Aula 1: Introdução ao Tailwind CSS</h1>
                    <p className="text-lg text-blue-100">
                        Aprenda a filosofia utility-first e os conceitos fundamentais do Tailwind com exemplos práticos e detalhados.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {heroBadges.map((badge) => (
                            <span key={badge} className="rounded-lg bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </header>

            <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
                <section className="space-y-8 rounded-3xl bg-white p-10 shadow-lg shadow-slate-900/10">
                    <div className="space-y-3 text-center">
                        <p className="text-xs uppercase tracking-[0.5em] text-slate-400">O que é Tailwind CSS?</p>
                        <h2 className="text-3xl font-bold text-slate-900">Utility-first para criar tudo com classes</h2>
                        <p className="text-sm text-slate-600">
                            Tailwind é um framework utility-first que dá classes atômicas para montar designs completos sem sair do HTML/JSX.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                        {frameworkComparison.map((card) => (
                            <ComparisonCard key={card.title} {...card} />
                        ))}
                    </div>
                    <div className="space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-8">
                        <h3 className="text-2xl font-semibold text-slate-900">Exemplo prático: botão</h3>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-3">
                                <h4 className="text-lg font-semibold text-slate-800">CSS Tradicional</h4>
                                <CodeBlock lines={buttonCssLines} />
                                <div className="rounded-lg bg-white p-4 shadow">
                                    <button className="rounded-md border-0 bg-blue-500 px-4 py-2 text-white shadow hover:bg-blue-600">
                                        Clique aqui (CSS Tradicional)
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-lg font-semibold text-slate-800">Tailwind CSS</h4>
                                <CodeBlock lines={tailwindButtonLines} caption="Tudo vivo na marcação, sem arquivos extras." />
                                <div className="rounded-lg bg-white p-4 shadow">
                                    <button className="rounded-md bg-blue-500 px-4 py-2 text-white shadow hover:bg-blue-600 transition-colors">
                                        Clique aqui (Tailwind)
                                    </button>
                                </div>
                                <div className="rounded-2xl bg-blue-50 p-4 text-sm text-slate-700">
                                    <strong className="block text-slate-900">Mapeamento das classes:</strong>
                                    <p className="text-xs text-slate-600">
                                        <span className="font-mono">px-4</span> = padding horizontal<br />
                                        <span className="font-mono">py-2</span> = padding vertical<br />
                                        <span className="font-mono">bg-blue-500</span> = fundo azul<br />
                                        <span className="font-mono">text-white</span> = cor branca<br />
                                        <span className="font-mono">rounded</span> = border-radius<br />
                                        <span className="font-mono">font-medium</span> = font-weight 500
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-8 rounded-3xl bg-white p-10 shadow-lg shadow-slate-900/10">
                    <div className="space-y-3 text-center">
                        <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Filosofia utility-first</p>
                        <h2 className="text-3xl font-bold text-slate-900">Combinar peças atômicas como LEGO</h2>
                        <p className="text-sm text-slate-600">
                            A mentalidade utility-first é pensar em cada classe como uma peça pré-fabricada e montar o design como se fosse um kit de LEGO.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {philosophyComparison.map((item) => (
                            <div
                                key={item.title}
                                className={`rounded-2xl border p-6 shadow-sm ${item.accent === 'green' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                                    }`}
                            >
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-sm text-slate-700">{item.description}</p>
                                <CodeBlock lines={['<div class="p-6 bg-white rounded-lg">Conteúdo</div>']} caption="Meta: tudo visível no HTML." />
                            </div>
                        ))}
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600 shadow">
                        <p className="font-semibold text-slate-800">Comparação detalhada: card de produto</p>
                        <p>
                            Tailwind concentra toda a lógica no markup, reduzindo o CSS separado e incentivando consistência visual em um único arquivo.
                        </p>
                    </div>
                </section>

                <section className="space-y-6 rounded-3xl bg-white p-10 shadow-lg shadow-slate-900/10">
                    <div className="space-y-2 text-center">
                        <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Mapeamento mental: CSS → Tailwind</p>
                        <h2 className="text-3xl font-bold text-slate-900">Cada classe representa uma propriedade</h2>
                    </div>
                    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold">Classe Tailwind</th>
                                    <th className="px-6 py-4 font-bold">Propriedade CSS</th>
                                    <th className="px-6 py-4 font-bold">Valor</th>
                                    <th className="px-6 py-4 font-bold">Exemplo</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {mentalMapping.map((row) => (
                                    <tr key={row.cls} className="hover:bg-slate-100">
                                        <td className="px-6 py-4 font-mono text-blue-600">{row.cls}</td>
                                        <td className="px-6 py-4">{row.property}</td>
                                        <td className="px-6 py-4 font-mono text-sm">{row.value}</td>
                                        <td className="px-6 py-4 text-xs text-slate-600">{row.example}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    )
}

