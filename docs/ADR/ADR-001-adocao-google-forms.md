# ADR-001: Adoção do Google Forms para Inscrições

**Date:** 2026-02-28
**Status:** Accepted

## Context

A versão inicial da landing page utilizava um formulário de inscrição em HTML nativo. O seu escopo inicial previa um fluxo para integração via webhook (Google Apps Script) para popular um Google Sheets. Durante os refinamentos visuais, a cliente solicitou a inclusão de lógicas de "upload" de arquivos (logomarcas para expositoras) além dos dados de contato comuns.

## Decision

Sob validação do time e aprovação do fluxo pelo Tech Lead e pela Cliente, foi **descartado** o modelo de uso do formulário nativo em HTML devido à complexidade exigida para processamento seguro e envio de arquivos binários sem a necessidade de instanciar um Backend real.
Foi decidido **substituir o formulário** por dois botões de redirecionamento (CTA) que abrirão Formulários do Google Forms específicos:

1. Formulário para Participantes (Ingresso Solidário).
2. Formulário para Marcas Expositoras e Pitch.

## Alternatives Considered

- *S3 / Cloudinary associado ao Apps Script*: Rejeitado por aumentar a complexidade de configuração e a possibilidade de estouro de quota/erros de base64.
- *Manter envio simples e solicitar imagem posteriormente via E-mail/WhatsApp*: Rejeitado para evitar dispersão de dados e perda de lide.

## Consequences

- **Prós:** Redução direta do código legado/boilerplate na Landing Page; Maior segurança de rede; Envio de arquivos nativo altamente escalável a custo zero (atrelado ao Drive da cliente); Facilidade na gestão de planilhas.
- **Contras:** Redirecionamento de tráfego, retirando brevemente a atenção do usuário da Landing Page; A formatação visual final da tela de formulário fica submetida aos limites impostos pelo ecossistema do Google Forms.

## Rule for Future Projects

Ao desenvolver escopos pequenos/temporários de eventos que necessitem de tráfego estrito de *leads* exigindo **envios de mídia ou uploads validados documentalmente**, deve-se priorizar o uso de provedores agnósticos já acoplados que absorvam o Storage (como Google Forms) ao invés de codificar endpoints Serverless customizados, salvo se orçado como infraestrutura dedicada de Backend.
