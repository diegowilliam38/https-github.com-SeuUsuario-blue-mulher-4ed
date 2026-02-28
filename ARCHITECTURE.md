# ARCHITECTURE.md

## Projeto: Blue Mulher - 4ª Edição (Mecanismo Único: "Conexões que Impulsionam")

### 1. Visão Geral

Sistema de landing page focada em conversão para evento com captura dual de leads (Participantes e Negócios/Expositoras). Utiliza stack sem servidor com persistência diretamente via ecossistema Google Workspace.

### 2. Stack Tecnológica

- **Frontend**: HTML5, JavaScript (Vanilla), TailwindCSS (CDN) para design responsivo mobile-first.
- **Backend/Funções**: Google Apps Script para receber requisições de formulário (via Web App hook).
- **Banco de Dados**: Google Sheets (persistência de leads e dados).
- **Compliance LGPD**: Checkbox obrigatório no frontend validado com marcação de consentimento, integrado ao Apps Script, rejeitando dados sem consentimento.

### 3. Estrutura de Arquivos

```
blue-mulher-4ed/
├── src/
│   ├── index.html       # Landing page e script client-side principal
│   └── main.js          # JavaScript com lógica dual de formulário
├── infra/
│   └── Code.gs          # Script Google Apps Script 
├── docs/
│   ├── ADR/             # Architecture Decision Records
│   └── references/
└── project-status.yaml
```

### 4. Fluxo de Integração

1. O usuário acessa a Landing Page.
2. Com base na escolha (Participante vs. Negócio), campos dinâmicos são exibidos.
3. Se os dados forem válidos e o consentimento de LGPD estiver checado, o frontend realiza um `POST` (ou requisição viável) para o URL do Google Apps Script publicado como Web App.
4. O Google Apps Script valida a requisição, limpa e persiste os dados em abas diferentes de uma Planilha do Google Sheets (Participantes / Negócios).
