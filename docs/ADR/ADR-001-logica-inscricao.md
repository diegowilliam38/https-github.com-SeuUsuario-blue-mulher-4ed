# ADR-001: Lógica de Inscrição Condicional (Participante vs. Expositora)

**Date:** 2026-02-27
**Status:** Accepted

## Context

O evento Blue Mulher - 4ª Edição requer uma Landing Page para captura de inscrições através de um único formulário que precisa distinguir os tipos de inscritos (Participantes de Evento e Empreendedoras Expositoras). Cada categoria possui dados de coleta diferentes, mas deve convergir para uma mesma persistência base.

## Decision

Optamos por implementar uma Lógica de Formulário Dual State no frontend (JavaScript modular). Haverá opções com rádio buttons (`type=radio`) no formulário que determinarão a visibilidade (`classList.toggle('hidden')` usando TailwindCSS) de grupos específicos de campos baseados no perfil do usuário, antes do envio unificado ao endpoint Apps Script.

## Alternatives Considered

- *Dois formulários diferentes em páginas diferentes:* Aumentaria fricção de tráfego, prejudicando conversão mobile.
- *Uso de um Google Forms embutido (iframe):* Limita severamente a estética "Blue Tree/Neon" e compromete customizações da brand. Inviável manter a alta conversão.

## Consequences

- Necessidade de implementar bloqueios client-side (required attributes condicionados ao rádio selecionado).
- O backend (Apps Script) precisará reconhecer o campo `tipo_inscricao` e rotear a salvar linha para a "aba/sheet" correspondente.

## Rule for Future Projects

Toda lógica dual em Landing Page focada em conversão deve minimizar ações excessivas por meio de Toggle UI nativo (HTML/JS com Tailwind) e concentrar na conversão base.
