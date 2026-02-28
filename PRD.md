# PRD (Product Requirements Document) - Blue Mulher 4ª Edição

## 1. Visão Geral do Produto

**Nome do Produto:** Landing Page Blue Mulher - 4ª Edição  
**Objetivo Principal:** Criar um portal de alta conversão (Landing Page) focado em centralizar as informações essenciais sobre a 4ª Edição do evento Blue Mulher, destacando palestrantes (Key Speakers), a agenda, os propósitos (ODS da ONU) e redirecionar ativamente o tráfego para os formulários de inscrição.  
**Público-Alvo:** Empreendedoras, empresárias e profissionais do Maranhão interessadas em Networking, Negócios e Inovação.

## 2. Problema a Ser Resolvido

A cliente (Luh Pimentel) precisava de um ambiente virtual com design altamente profissional para:

- Passar a credibilidade premium de um evento corporativo realizado no Blue Tree Hotel.
- Escalonar o volume de leads interessadas em palestrar (Pitch) ou expor suas marcas.
- Tirar dúvidas recorrentes (FAQ) sem sobrecarregar o atendimento humano.
- Ter uma plataforma de carregamento extremamente rápido que não frustrasse usuários de smartphones (Mobile-first).

## 3. Escopo e Funcionalidades (MVP)

A Landing Page foi estruturada como um ecossistema Single-Page (página única) contendo as seguintes seções funcionais essenciais:

1. **Hero Section (Dobra Inicial):** Banner visual em Full-HD com título do evento (2026), data, local e os pilares do evento (Inovação, Conexões e Negócios).
2. **Seção "A Idealizadora":** Apresentação da organizadora (Luh Pimentel) para gerar autoridade imediata.
3. **Key Speakers:** Grid contendo foto, nome e perfil das 4 âncoras primárias (Jacira, Flaviana, Graciela, Lucianna) + Karina Rocha (Studio Tree).
4. **Galeria de "Momentos" (Vídeos):** 29 depoimentos curtos ancorados com o Grid 9:16 (vertical/mobile) consumindo Iframe direto do Google Drive da cliente.
5. **Propósito e Responsabilidade (ODS):** Integração estética com a imagem dos 7 Objetivos de Desenvolvimento Sustentável da ONU adotados pelo evento.
6. **Marcas Apoiadoras:** Grid fluido e centralizado contendo o logotipo das empresas patrocinadoras, preservando espaços simétricos via CSS Flex-wrap.
7. **FAQ (Perguntas Frequentes):** Componente HTML nativo (dropdowns transparentes) esclarecendo dúvidas como formato de inscrição de PITCH, restrição demográfica de público e benefícios.
8. **Modal Integrado de Inscrição:** Dois botões de CTA redirecionando tráfego qualificado para endpoints de formulários externos (Google Forms) configurados previamente pelo cliente.
9. **Assinatura de Engenharia:** Presença do logotipo do parceiro de desenvolvimento (Diego William) com canais para contato rápido, valorizando o criador do software perante o público executivo.

## 4. Requisitos Não-Funcionais

- **Performance de Carregamento:** A página deve exibir o *Largest Contentful Paint (LCP)* em menos de 1.5s em redes 4G para reduzir a taxa de rejeição.
- **Compatibilidade de Display:** O CSS deve ser "Mobile-first" atendendo a resoluções desde o iPhone SE até telas Ultrawide de Desktop.
- **Manutenibilidade:** O projeto não deve depender de sistemas complexos de build, compiladores Node ou dependências pesadas, para que qualquer intervenção futura demande apenas injeção de classes cruas (Tailwind CDN) ou atualização em tag HTML.

## 5. Arquitetura e Tecnologia (Referência Rápida)

*Para a tomada de decisão aprofundada das escolhas tecnológicas descritas abaixo, leia o repositório em `docs/ADR/`*.

- **Fundação:** HTML5 semântico com injeção de fontes dinâmicas do Google Fonts (Inter/Outfit).
- **Estilização:** Tailwind CSS (Zero-build via Script CDN) e lógicas de visibilidade (Alpine.js).
- **Hosting Alvo:** Vercel (CI/CD via repositório Github origin-main).
- **Gerenciamento de Mídia:** Assets otimizados internamente + Preview de vídeos puxados do Google Cloud Storage/Drive via Endpoint Proxy HTML.

## 6. Métricas de Sucesso

- Abertura constante do Modal de Inscrição.
- Cliques efetivos nos CTAs para os Formulários Externos.
- Baixo nível de dúvidas na caixa de entrada do WhatsApp da idealizadora, amortecidas pela leitura da FAQ local.
