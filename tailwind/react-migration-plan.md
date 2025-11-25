## Plano de Migração para React + Tailwind

Este documento traduz a *professor rule* em ações imediatas. O objetivo é:

- Reescrever as cinco aulas atuais (`aula-01` a `aula-05-responsividade`) como um único projeto React + Tailwind.
- Garantir evolução didática: layout básico → responsividade → componentes com estado → roteamento → dados.
- Preparar a sequência das oito aulas adicionais que faltam, cada uma focando num aspecto novo.

### Fase 1: Migrar as aulas existentes

| Aula | Foco inicial | Componentes sugeridos | Observações |
|------|--------------|----------------------|-------------|
| `aula-01-introducao` | Estrutura e hero | `Hero`, `Section`, `FeatureList` | Reutilizar blocos estáticos; não há responsividade crítica. |
| `aula-02-fundamentos` | Cards e grids simples | `FundamentoCard`, `FundamentoGrid` | Componentes recebem listas via props; preparar para loops. |
| `aula-03-layout` | Layout composto | `LayoutShowcase`, `Sidebar`, `MainContent` | Demonstrar composição e `className` Tailwind; iniciar isolaçãode containers. |
| `aula-04-grid` | Grid avançado | `GridGallery`, `GridItem`, `DetailsPanel` | Refletir o grid clássico; mostrar variantes responsivas por breakpoints. |
| `aula-05-responsividade` | Responsividade final | `ResponsiveGallery`, `ResponsiveFooter`, `CTA` | Usar `map` e `keys`; separar dados estáticos em arrays em TS. |

Cada seção vira um componente funcional TypeScript com props tipadas e `className` declaradas; `App.tsx` se torna compositor central importando essas peças. Documentar em `readme` ou notas como as props fluem entre componentes.

### Fase 2: Planejar as oito aulas seguintes

1. **Estado controlado** – switch de tema ou contador com `useState` e estilos condicionais.
2. **Effects e Cleanup** – exemplo de `useEffect` simulando fetch/dados com timeout.
3. **Componentes reutilizáveis** – padrões como `Card`, `Badge`, `List` com variantes via props.
4. **Formulários e validação simples** – formulário com `useState` + feedback visual via Tailwind.
5. **Context + Providers** – tema global ou dados de usuário compartilhados; usar `createContext`.
6. **Roteamento** – `react-router-dom` com `/aula-XX` e compartilhamento de layout.
7. **Integração com dados simulados** – fetch fake ou JSON local + `Suspense` leve.
8. **Deploy e otimizações** – scripts `build`, `preview`, e documentação da cadeia Vite/Tailwind.

Cada nova aula deve atestar o propósito da regra (CLI → Componentes → Hooks → Rotas → Tailwind). Podemos manter um `docs/aulas.md` relacionando cada aula à etapa correspondente da regra.

### Próximas ações concretas

1. Criar o projeto Vite + React + TypeScript em `tailwind/react-projeto`.
2. Configurar Tailwind (`tailwind.config.ts`, `postcss.config.ts`, `src/index.css`) e documentar scripts/tsconfig.
3. Esboçar o plano de componentes/props e iniciar a migração da `aula-05-responsividade`.
4. Registrar o roadmap das oito aulas adicionais num `docs/roadmap-aulas.md`.

Com isso pronto, voltamos à regra e começamos a migrar cada seção. Deseja que eu execute o scaffold Vite agora?

