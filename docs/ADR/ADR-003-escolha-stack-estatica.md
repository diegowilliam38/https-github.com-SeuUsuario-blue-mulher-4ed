# ADR-003: Escolha de Stack Estática (Zero-Build) para Landing Page

**Date:** 2026-02-28
**Status:** Accepted

## Context

O projeto Blue Mulher 4ª Edição consiste em uma Landing Page de conversão para um evento pontual. Havia a necessidade de desenvolvimento ágil, altíssima performance de carregamento e hospedagem de baixo atrito. O Tech Lead e o Squad precisavam definir a fundação (framework) do ecossistema do front-end.

## Decision

Optamos por utilizar uma stack estática "Zero-Build" baseada puramente em **HTML5 Vanilla, Tailwind CSS (via CDN) e Alpine.js (via CDN)**.
Não há processo de compilação (Webpack, Vite) nem dependências controladas localmente por `package.json` ou `node_modules`.

## Alternatives Considered

- *Next.js / React (SSG/SSR):* Descartado por ser "over-engineering" para uma Landing Page de arquivo único. O ganho em modularização de componentes com JSX não justificaria o peso de um pacote React, o tempo de inicialização de Hydration ou a complexidade inserida em pipelines de CI/CD para compilação.
- *Geradores de Site Estático (Astro / Hugo):* Descartados por adicionar uma curva de aprendizado desnecessária ao escopo onde não há múltiplas rotas sendo servidas com markdown dinâmico (apenas um arquivo index.html principal serve de âncora geral).

## Consequences

- **Prós:** A Landing Page tem um tamanho nominal extremamente baixo, carregando virtualmente instantâneo (Time To Interactive minúsculo). Pode ser hospedada gratuitamente e eternamente em provedores como Vercel, Netlify ou GitHub Pages ou até arrastando a pasta via FTP para servidores de prateleira na Hospedagem web da criadora do evento. A curva de manutenção futura exige apenas conhecimento cru em marcações HTML e classes.
- **Contras:** A modularização para escalar o código (caso se transforme em uma aplicação robusta de múltiplas rotas no futuro) será dificultada por duplicação do rodapé e navbar (limitação nativa do HTML).

## Rule for Future Projects

Sempre que a finalidade restrita de um site for "Página de Evento/Landing Page" singular (`index.html`), onde re-deploy automatizado de build não traga vantagens concretas face à velocidade de um desenvolvimento cru iterativo, prefira a topologia de um Frontend Zero-Build importando bibliotecas pontuais por CDNs enxutas. Em caso de evolução do modelo de negócio englobando Autenticação ou Multi-Dashboards, escale o repositório refatorando base para Next.js na Vercel de imediato.
