# ADR-002: Design System baseado no conceito "Conexões que Impulsionam"

**Date:** 2026-02-27
**Status:** Accepted

## Context

A marca Blue Mulher possui um posicionamento estético focado no "Azul Primário (Blue Tree)", fundo clean (branco) e detalhes impactantes (Neon). O Mecanismo Único "Conexões que Impulsionam" deve ser transparecido visualmente em botões e espaçamentos, reforçando interações dinâmicas e de energia no clique (conversão).

## Decision

Adotaremos TailwindCSS via CDN com personalização em script tag para garantir as cores exatas (e.g., `blue-primary`, `neon-accent`). Serão privilegiados formulários de input transparentes ou sutis (glassmorphism leve), botões de alto contraste com gradiente ou bordas com brilho neon.

Constantes Customizadas Tailwind:

- `primary`: `#003D7A` (Blue Tree - Placeholder, carece valor final)
- `accent`: `#00F0FF` (Cyan/Neon Blue accentuation)
- `background`: `#FFFFFF` ou superfícies off-white para legibilidade de leitura.
- Fontes: Google Fonts (ex. Inter ou Outfit) definidas globalmente.

## Alternatives Considered

- *Escrever Vanilla CSS System completo:* Demoraria mais tempo, prejudicando manutenção e responsividade rápida exigida ("mobile-first").
- *Usar Bootstrap:* Estática "quadrada" conflita com percepção moderna, seria difícil criar os efeitos Neons embutidos sem muitos overrides.

## Consequences

- Por usarmos Tailwind via CDN sem build process inicialmente, a perfomance em dispositivos muito limitados é apenas aceitável, mas garante deployment atômico num só `.html`. O benefício de agilidade atende a necessidade de eventos pontuais.

## Rule for Future Projects

Landing pages de evento único preferem Tailwind configurado inline por script na CDN para independência de repositórios buildados complexos, a menos que o escopo aumente para PWA.
