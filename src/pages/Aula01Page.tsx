import { Link } from 'react-router-dom'

export default function Aula01Page() {
    return (
    <div className="bg-gray-50 min-h-screen text-slate-800">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              ← Voltar
            </Link>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                            Aula 1
                        </span>
              <span className="text-sm text-gray-600">Introdução ao Tailwind CSS</span>
            </div>
                    </div>
                </div>
            </nav>

      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-5xl font-bold">Aula 1: Introdução ao Tailwind CSS</h1>
          <p className="text-xl text-blue-100">
            Aprenda a filosofia utility-first e os conceitos fundamentais do Tailwind CSS através de
            exemplos práticos e detalhados.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg">
              <span className="font-semibold">🎯 Utility-First</span>
            </div>
            <div className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg">
              <span className="font-semibold">📚 Conceitos Fundamentais</span>
            </div>
            <div className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg">
              <span className="font-semibold">💡 Exemplos Práticos</span>
            </div>
                    </div>
                </div>
      </section>

      <main className="space-y-12 px-4 py-16 sm:px-6 lg:px-8">
        <section id="o-que-e" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">O que é Tailwind CSS?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tailwind CSS é um framework utility-first que fornece classes de baixo nível para
                construir designs customizados rapidamente.
                        </p>
                    </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <span>❌</span> Framework Tradicional
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-red-500">•</span>
                    <span>Componentes pré-construídos (botões, cards, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-red-500">•</span>
                    <span>Estilos fixos e limitados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-red-500">•</span>
                    <span>Difícil de customizar profundamente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-red-500">•</span>
                    <span>Exemplo: Bootstrap, Materialize</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <span>✅</span> Tailwind CSS (Utility-First)
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">•</span>
                    <span>Classes utilitárias pequenas e atômicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">•</span>
                    <span>Você combina classes para criar designs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">•</span>
                    <span>Flexibilidade total de customização</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">•</span>
                    <span>Sem componentes pré-construídos</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Exemplo Prático: Criando um Botão</h3>
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Abordagem CSS Tradicional:</h4>
                <div className="code-block mb-4">
                  <div className="text-green-400 mb-2">/* HTML */</div>
                  <div>
                    &lt;button class="<span className="text-yellow-300">btn-primary</span>"&gt;Clique
                    aqui&lt;/button&gt;
                  </div>
                  <div className="text-green-400 mt-4 mb-2">/* CSS */</div>
                  <div>.<span className="text-yellow-300">btn-primary</span> &#123;</div>
                  <div className="ml-4">padding: 0.5rem 1rem;</div>
                  <div className="ml-4">background-color: #3b82f6;</div>
                  <div className="ml-4">color: white;</div>
                  <div className="ml-4">border-radius: 0.375rem;</div>
                  <div className="ml-4">font-weight: 500;</div>
                  <div>&#125;</div>
                    </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                                        Clique aqui (CSS Tradicional)
                                    </button>
                                </div>
                            </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Abordagem Tailwind CSS:</h4>
                <div className="code-block mb-4">
                  <div>
                    &lt;button class="<span className="text-yellow-300">px-4 py-2 bg-blue-500 text-white rounded font-medium</span>"&gt;
                  </div>
                  <div className="ml-4">Clique aqui</div>
                  <div>&lt;/button&gt;</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow mb-4">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-colors">
                                        Clique aqui (Tailwind)
                                    </button>
                                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong className="block text-gray-900">Mapeamento das classes:</strong>
                    <span className="font-mono">px-4</span> = padding horizontal
                    <br />
                    <span className="font-mono">py-2</span> = padding vertical
                    <br />
                    <span className="font-mono">bg-blue-500</span> = background color azul
                    <br />
                    <span className="font-mono">text-white</span> = cor branca
                    <br />
                    <span className="font-mono">rounded</span> = border-radius
                    <br />
                                        <span className="font-mono">font-medium</span> = font-weight 500
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

        <section id="filosofia" className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Filosofia Utility-First</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Pense em cada classe como uma peça de LEGO: você combina utilitários pequenos para
                montar qualquer interface.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-xl border border-red-200 p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  CSS Tradicional: Construir do Zero
                </h3>
                <div className="code-block text-sm">
                  <div>.card &#123;</div>
                  <div className="ml-4">padding: 1.5rem;</div>
                  <div className="ml-4">background: white;</div>
                  <div className="ml-4">border-radius: 0.5rem;</div>
                  <div>&#125;</div>
                </div>
                <p className="text-sm text-red-700 mt-3">
                  Você precisa criar e nomear cada componente do zero.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl border border-green-200 p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Tailwind: Combinar Peças Prontas
                </h3>
                <div className="code-block text-sm">
                  <div>
                    &lt;div class="<span className="text-yellow-300">p-6 bg-white rounded-lg</span>"&gt;
                  </div>
                  <div className="ml-4">Conteúdo</div>
                  <div>&lt;/div&gt;</div>
                </div>
                <p className="text-sm text-green-700 mt-3">
                  Você combina peças (classes) prontas para criar o que precisa.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Comparação Detalhada: Card de Produto
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">
                    CSS Tradicional (40+ linhas):
                  </h4>
                  <div className="code-block text-sm mb-4">
                    <div className="text-green-400">/* HTML */</div>
                    <div>&lt;div class="card"&gt;</div>
                    <div className="ml-4">&lt;h2 class="card-title"&gt;Produto&lt;/h2&gt;</div>
                    <div className="ml-4">&lt;p class="card-text"&gt;Descrição&lt;/p&gt;</div>
                    <div className="ml-4">&lt;button class="card-button"&gt;Comprar&lt;/button&gt;</div>
                    <div>&lt;/div&gt;</div>
                    <div className="text-green-400 mt-4">/* CSS */</div>
                    <div>.card &#123; padding: 1.5rem; background: white; ... &#125;</div>
                    <div>.card-title &#123; font-size: 1.5rem; ... &#125;</div>
                    <div>.card-text &#123; color: #666; ... &#125;</div>
                    <div>.card-button &#123; background: blue; ... &#125;</div>
                  </div>
                  <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-sm">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-2">Produto</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">Descrição do produto aqui.</p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                      Comprar
                    </button>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">
                    Tailwind CSS (Tudo no HTML):
                  </h4>
                  <div className="code-block text-sm mb-4">
                    <div>
                      &lt;div class="<span className="text-yellow-300">p-6 bg-white rounded-lg shadow-md max-w-sm</span>"&gt;
                    </div>
                    <div className="ml-4">
                      &lt;h2 class="<span className="text-yellow-300">text-2xl font-semibold mb-2 text-gray-800</span>"&gt;Produto&lt;/h2&gt;
                    </div>
                    <div className="ml-4">
                      &lt;p class="<span className="text-yellow-300">text-gray-500 mb-4 leading-relaxed</span>"&gt;Descrição&lt;/p&gt;
                    </div>
                    <div className="ml-4">
                      &lt;button class="<span className="text-yellow-300">bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600</span>"&gt;
                    </div>
                    <div className="ml-4">Comprar</div>
                    <div className="ml-4">&lt;/button&gt;</div>
                    <div>&lt;/div&gt;</div>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-md max-w-sm">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Produto</h2>
                    <p className="text-gray-500 mb-4 leading-relaxed">Descrição do produto aqui.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                      Comprar
                    </button>
                  </div>
                  <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong className="block text-slate-900">Vantagens:</strong>
                      ✅ Tudo visível no HTML (não precisa alternar arquivos)
                      <br />
                      ✅ Classes autoexplicativas
                      <br />
                      ✅ Menos código total
                      <br />
                      ✅ Consistência forçada pelo sistema
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mapeamento" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Mapeamento Mental: CSS → Tailwind</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A chave é mapear mentalmente cada classe para sua propriedade CSS equivalente.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold">Classe Tailwind</th>
                                    <th className="px-6 py-4 font-bold">Propriedade CSS</th>
                                    <th className="px-6 py-4 font-bold">Valor</th>
                                    <th className="px-6 py-4 font-bold">Exemplo</th>
                                </tr>
                            </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-mono text-blue-600">p-4</td>
                      <td className="px-6 py-4">padding</td>
                      <td className="px-6 py-4 font-mono text-sm">1rem</td>
                      <td className="px-6 py-4">
                        <div className="bg-blue-100 p-4 border-2 border-blue-500 rounded inline-block">
                          Padding
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-mono text-blue-600">m-2</td>
                      <td className="px-6 py-4">margin</td>
                      <td className="px-6 py-4 font-mono text-sm">0.5rem</td>
                      <td className="px-6 py-4">
                        <div className="bg-gray-200 inline-block">
                          <div className="bg-blue-100 m-2 border-2 border-blue-500 rounded inline-block">
                            Margin
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-mono text-blue-600">bg-blue-500</td>
                      <td className="px-6 py-4">background-color</td>
                      <td className="px-6 py-4 font-mono text-sm">rgb(59 130 246)</td>
                      <td className="px-6 py-4">
                        <div className="bg-blue-500 text-white px-4 py-2 rounded inline-block">
                          Azul
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-mono text-blue-600">text-white</td>
                      <td className="px-6 py-4">color</td>
                      <td className="px-6 py-4 font-mono text-sm">white</td>
                      <td className="px-6 py-4">
                        <div className="bg-gray-800 text-white px-4 py-2 rounded inline-block">
                          Texto Branco
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-mono text-blue-600">text-xl</td>
                      <td className="px-6 py-4">font-size</td>
                      <td className="px-6 py-4 font-mono text-sm">1.25rem</td>
                      <td className="px-6 py-4">
                        <span className="text-xl font-semibold">Texto Grande</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-mono text-blue-600">font-bold</td>
                      <td className="px-6 py-4">font-weight</td>
                      <td className="px-6 py-4 font-mono text-sm">700</td>
                      <td className="px-6 py-4">
                        <span className="font-bold">Texto Negrito</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-mono text-blue-600">flex</td>
                      <td className="px-6 py-4">display</td>
                      <td className="px-6 py-4 font-mono text-sm">flex</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <div className="bg-blue-500 text-white px-2 py-1 rounded text-sm">1</div>
                          <div className="bg-blue-500 text-white px-2 py-1 rounded text-sm">2</div>
                          <div className="bg-blue-500 text-white px-2 py-1 rounded text-sm">3</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-mono text-blue-600">rounded-lg</td>
                      <td className="px-6 py-4">border-radius</td>
                      <td className="px-6 py-4 font-mono text-sm">0.5rem</td>
                      <td className="px-6 py-4">
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block">
                          Bordas Arredondadas
                        </div>
                      </td>
                                    </tr>
                            </tbody>
                        </table>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                🎯 Exercício: Traduza CSS para Tailwind
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">CSS que você conhece:</h4>
                  <div className="code-block text-sm">
                    <div>.elemento &#123;</div>
                    <div className="ml-4">padding: 1rem;</div>
                    <div className="ml-4">background-color: rgb(59 130 246);</div>
                    <div className="ml-4">color: white;</div>
                    <div className="ml-4">border-radius: 0.5rem;</div>
                    <div>&#125;</div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Tradução Tailwind:</h4>
                  <div className="code-block text-sm">
                    <div>
                      &lt;div class="<span className="text-yellow-300">p-4 bg-blue-500 text-white rounded-lg</span>"&gt;
                    </div>
                    <div>Elemento</div>
                    <div>&lt;/div&gt;</div>
                  </div>
                  <div className="mt-4">
                    <div className="p-4 bg-blue-500 text-white rounded-lg inline-block">Elemento</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="instalacao" className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Instalação e Configuração</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Existem duas formas principais de usar Tailwind: Play CDN para aprendizado e Build
                Process para produção.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🚀</span>
                  <h3 className="text-2xl font-bold text-gray-900">Play CDN (Para Aprendizado)</h3>
                </div>
                <p className="text-gray-600">
                  Perfeito para aprender, prototipar e testar rapidamente. <strong>NÃO use em produção!</strong>
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-800">
                  ⚠️ Atenção: Play CDN inclui TODO o CSS (3MB+). Use apenas para aprendizado!
                </div>
                <div className="code-block text-sm">
                  <div>&lt;!DOCTYPE html&gt;</div>
                  <div>&lt;html&gt;</div>
                  <div>&lt;head&gt;</div>
                  <div className="ml-4">
                    &lt;script src="<span className="text-yellow-300">https://cdn.tailwindcss.com</span>"&gt;&lt;/script&gt;
                  </div>
                  <div>&lt;/head&gt;</div>
                  <div>&lt;body&gt;</div>
                  <div className="ml-4">
                    &lt;div class="<span className="text-yellow-300">p-4 bg-blue-500 text-white</span>"&gt;
                  </div>
                  <div className="ml-8">Olá, Tailwind!</div>
                  <div className="ml-4">&lt;/div&gt;</div>
                  <div>&lt;/body&gt;</div>
                  <div>&lt;/html&gt;</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700 space-y-2">
                  <p>
                    <strong>✅ Vantagens:</strong> Configuração zero, funciona imediatamente e ideal
                    para aprender.
                  </p>
                  <p>
                    <strong>❌ Desvantagens:</strong> Não otimizado (3MB+), sem customização avançada
                    e não recomendado para produção.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">⚙️</span>
                  <h3 className="text-2xl font-bold text-gray-900">Build Process (Para Produção)</h3>
                </div>
                <p className="text-gray-600">
                  Instalação via npm/yarn com processamento via PostCSS. Use em projetos reais!
                </p>
                <div className="code-block text-sm">
                  <div className="text-green-400"># 1. Inicializar projeto</div>
                  <div>npm init -y</div>
                  <div className="text-green-400 mt-2"># 2. Instalar Tailwind</div>
                  <div>npm install -D tailwindcss</div>
                  <div className="text-green-400 mt-2"># 3. Criar config</div>
                  <div>npx tailwindcss init</div>
                  <div className="text-green-400 mt-2"># 4. Processar CSS</div>
                  <div>npx tailwindcss -i input.css -o output.css</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-sm text-gray-700 space-y-2">
                  <p>
                    <strong>✅ Vantagens:</strong> CSS otimizado, customização completa, excelente
                    performance e tamanho controlado (10-50KB).
                  </p>
                  <p>
                    <strong>❌ Desvantagens:</strong> Requer setup inicial e mais trabalho no começo.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comparação: Tamanho do CSS</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 rounded-lg p-6 mb-4">
                    <div className="text-4xl font-bold text-red-600">3MB+</div>
                    <div className="text-sm text-gray-600 mt-2">Play CDN</div>
                  </div>
                  <p className="text-sm text-gray-600">❌ Não otimizado</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-lg p-6 mb-4">
                    <div className="text-4xl font-bold text-green-600">10-50KB</div>
                    <div className="text-sm text-gray-600 mt-2">Build Process</div>
                  </div>
                  <p className="text-sm text-gray-600">✅ Otimizado</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-lg p-6 mb-4">
                    <div className="text-4xl font-bold text-blue-600">20-50KB</div>
                    <div className="text-sm text-gray-600 mt-2">CSS Tradicional</div>
                  </div>
                  <p className="text-sm text-gray-600">Comparável</p>
                </div>
              </div>
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>💡 Conclusão:</strong> Tailwind otimizado (Build Process) é comparável ou
                  menor que CSS tradicional, mas só se configurado corretamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="primeiros-passos" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Primeiros Passos Práticos</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Vamos criar componentes reais passo a passo para entender como Tailwind funciona.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Exemplo 1: Card Simples</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Pensamento passo a passo:</h4>
                  <ol className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">1.</span>
                      <span>"Preciso de um card branco" → <code className="bg-white px-2 py-1 rounded">bg-white</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">2.</span>
                      <span>"Com espaçamento interno" → <code className="bg-white px-2 py-1 rounded">p-6</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">3.</span>
                      <span>"Com bordas arredondadas" → <code className="bg-white px-2 py-1 rounded">rounded-lg</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">4.</span>
                      <span>"Com sombra" → <code className="bg-white px-2 py-1 rounded">shadow-md</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">5.</span>
                      <span>"Com largura máxima" → <code className="bg-white px-2 py-1 rounded">max-w-md</code></span>
                    </li>
                  </ol>
                </div>
                <div>
                  <div className="code-block text-sm mb-4">
                    <div>
                      &lt;div class="<span className="text-yellow-300">bg-white p-6 rounded-lg shadow-md max-w-md</span>"&gt;
                    </div>
                    <div className="ml-4">
                      &lt;h3 class="<span className="text-yellow-300">text-xl font-semibold mb-2</span>"&gt;Título&lt;/h3&gt;
                    </div>
                    <div className="ml-4">
                      &lt;p class="<span className="text-yellow-300">text-gray-600</span>"&gt;Conteúdo do card&lt;/p&gt;
                    </div>
                    <div>&lt;/div&gt;</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Título do Card</h3>
                    <p className="text-gray-600">
                      Conteúdo do card aqui. Este é um exemplo prático de como combinar classes Tailwind.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Exemplo 2: Botão com Estados Hover</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Classes utilizadas:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><code className="bg-white px-2 py-1 rounded">px-6</code> = padding horizontal</li>
                    <li><code className="bg-white px-2 py-1 rounded">py-3</code> = padding vertical</li>
                    <li><code className="bg-white px-2 py-1 rounded">bg-blue-500</code> = cor de fundo azul</li>
                    <li><code className="bg-white px-2 py-1 rounded">text-white</code> = texto branco</li>
                    <li><code className="bg-white px-2 py-1 rounded">rounded-lg</code> = bordas arredondadas</li>
                    <li><code className="bg-white px-2 py-1 rounded">hover:bg-blue-600</code> = hover mais escuro</li>
                    <li><code className="bg-white px-2 py-1 rounded">transition-colors</code> = transição suave</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="code-block text-sm mb-4">
                    <div>
                      &lt;button class="<span className="text-yellow-300">px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors</span>"&gt;
                    </div>
                    <div> Clique aqui</div>
                    <div>&lt;/button&gt;</div>
                  </div>
                  <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow">
                    Clique aqui (passe o mouse)
                  </button>
                  <p className="text-sm text-gray-600">
                    💡 Passe o mouse sobre o botão para ver o efeito hover!
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Exemplo 3: Layout com Flexbox</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Mapeamento Flexbox:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><code className="bg-white px-2 py-1 rounded">flex</code> = display: flex</li>
                    <li><code className="bg-white px-2 py-1 rounded">items-center</code> = align-items: center</li>
                    <li><code className="bg-white px-2 py-1 rounded">justify-between</code> = justify-content: space-between</li>
                    <li><code className="bg-white px-2 py-1 rounded">gap-4</code> = gap: 1rem</li>
                  </ul>
                </div>
                <div>
                  <div className="code-block text-sm mb-4">
                    <div>
                      &lt;div class="<span className="text-yellow-300">flex items-center justify-between gap-4 p-4 bg-gray-100 rounded</span>"&gt;
                    </div>
                    <div className="ml-4">&lt;div&gt;Item 1&lt;/div&gt;</div>
                    <div className="ml-4">&lt;div&gt;Item 2&lt;/div&gt;</div>
                    <div className="ml-4">&lt;div&gt;Item 3&lt;/div&gt;</div>
                    <div>&lt;/div&gt;</div>
                  </div>
                  <div className="flex items-center justify-between gap-4 p-4 bg-gray-100 rounded">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded">Item 1</div>
                    <div className="bg-blue-500 text-white px-4 py-2 rounded">Item 2</div>
                    <div className="bg-blue-500 text-white px-4 py-2 rounded">Item 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="quando-usar" className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Quando Usar Tailwind vs CSS Puro?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Entenda quando cada abordagem é mais apropriada.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Use Tailwind quando:</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-green-600">•</span>
                    <span>
                      <strong>Componentes UI comuns</strong> (botões, cards, layouts)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">•</span>
                    <span>
                      <strong>Prototipagem rápida</strong> - precisa de velocidade
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">•</span>
                    <span>
                      <strong>Design systems consistentes</strong> - equipe precisa de padrões
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">•</span>
                    <span>
                      <strong>Projetos onde velocidade importa</strong> - prazos apertados
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">•</span>
                    <span>
                      <strong>Trabalho em equipe</strong> - facilita colaboração
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Use CSS puro quando:</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>Animações complexas</strong> - keyframes customizados
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>Lógica CSS avançada</strong> - calc(), custom properties complexas
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>Casos muito específicos</strong> - que não se encaixam no sistema
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>Controle total</strong> - precisa de controle absoluto sobre CSS
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>Projetos pequenos</strong> - CSS customizado é mais simples
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Abordagem Híbrida (Recomendada)</h3>
              <p className="text-gray-700 mb-6">
                Na prática, você pode usar ambos! Use Tailwind para o comum e CSS customizado para
                casos específicos.
              </p>
              <div className="code-block text-sm">
                <div>&lt;!-- Tailwind para layout e estilos comuns --&gt;</div>
                <div>
                  &lt;div class="<span className="text-yellow-300">flex items-center p-4 bg-white rounded-lg</span>"&gt;
                </div>
                <div className="ml-4">&lt;!-- CSS customizado para animação complexa --&gt;</div>
                <div className="ml-4">
                  &lt;div class="<span className="text-yellow-300">custom-animation</span>"&gt;
                </div>
                <div className="ml-8">Conteúdo</div>
                <div className="ml-4">&lt;/div&gt;</div>
                <div>&lt;/div&gt;</div>
                <div className="text-green-400 mt-4">/* CSS customizado para casos específicos */</div>
                <div>
                  .<span className="text-yellow-300">custom-animation</span> &#123;
                </div>
                <div className="ml-4">animation: complexAnimation 2s ease-in-out infinite;</div>
                <div>&#125;</div>
              </div>
            </div>
          </div>
        </section>

        <section id="resumo" className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-4xl font-bold">Resumo: O Que Você Aprendeu</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">✅ Conceitos-Chave</h3>
                <ul className="text-left space-y-2 text-blue-100">
                  <li>• Tailwind CSS é framework utility-first</li>
                  <li>• Classes pequenas e atômicas</li>
                  <li>• Mapeamento mental CSS → Tailwind</li>
                  <li>• Duas formas de instalação</li>
                  <li>• Abordagem híbrida é comum</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">🎯 Próximos Passos</h3>
                <ul className="text-left space-y-2 text-blue-100">
                  <li>• Sistema de espaçamento detalhado</li>
                  <li>• Trabalhando com cores</li>
                  <li>• Tipografia completa</li>
                  <li>• Bordas e sombras</li>
                  <li>• Sistema de design</li>
                </ul>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-6">
              <p className="text-lg mb-4">
                <strong>💡 Dica Final:</strong> Tailwind é poderoso porque você já conhece CSS. Quanto
                mais você entende CSS, mais fácil é usar Tailwind. Relacione cada classe Tailwind com
                a propriedade CSS equivalente!
              </p>
              <Link
                to="/"
                className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Ver Todas as Aulas
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="mb-4">
            <strong>Aula 1:</strong> Introdução ao Tailwind CSS - Projeto Prático Completo
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              ← Voltar para Aulas
            </Link>
            <span className="text-gray-600">|</span>
            <a href="#o-que-e" className="text-blue-400 hover:text-blue-300 transition-colors">
              ↑ Topo
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

