# Camilo Ruas Portfolio

[English](#english) | [Português](#português)

## English

### Overview

A single page portfolio designed to present professional background, technical skills, and recent projects powered by real GitHub data.

The application combines a modern visual experience with practical engineering priorities such as maintainability, structure, and performance.

### Production URL

https://www.camiloruas.dev/

### Key Highlights

1. GitHub API integration to fetch public repositories and per-repository language data.
2. Manual curation and strategic ordering of featured projects.
3. Stack filters (React, TypeScript, JavaScript, n8n, and others).
4. Full bilingual support in Portuguese and English using `i18next` and `react-i18next`.
5. Technical SEO setup with Open Graph, Twitter Cards, canonical, hreflang, and JSON-LD (`Person`).
6. SPA navigation with dedicated routes for Home, About, Projects, Contact, and 404 page.
7. Responsive layout with mobile menu, fixed social sidebar, and controlled ScrollReveal animations.

### Tech Stack

1. React 19
2. React Router DOM 7
3. Vite 7
4. Axios
5. i18next and react-i18next
6. ScrollReveal
7. React Icons and Font Awesome
8. ESLint

### Architecture

```text
src/
  assets/
  components/
    Header.jsx
    Footer.jsx
    SocialSidebar.jsx
    NotFound.jsx
  hooks/
    useScrollReveal.js
  pages/
    Home.jsx
    About.jsx
    Projects.jsx
    Contact.jsx
  services/
    githubApi.js
  locales/
    pt/translation.json
    en/translation.json
  styles/
  App.jsx
  i18n.js
  main.jsx
```

### Local Setup

```bash
npm install
npm run dev
```

### Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Environment Variables

Create or update `.env` in the root folder:

```env
VITE_GITHUB_USERNAME="your_github_username"
VITE_GITHUB_TOKEN="your_optional_token"
```

Note: the token is optional, but recommended to reduce GitHub API rate limiting.

### Professional Goal

This project was built to showcase the ability to:

1. Deliver modern and responsive user interfaces.
2. Integrate frontend applications with external APIs.
3. Structure React applications for long term growth.
4. Maintain a production ready portfolio foundation.

### Contact

1. LinkedIn: https://www.linkedin.com/in/camilo-ruas-3a2a6425/
2. GitHub: https://github.com/Camiloruas
3. Email: miloruas@gmail.com

## Português

### Visão Geral

Portfólio single page desenvolvido para apresentar perfil profissional, habilidades técnicas e projetos recentes com dados reais do GitHub.

O projeto combina experiência visual moderna com foco em performance, organização de código e manutenção simples.

### Link de Produção

https://www.camiloruas.dev/

### Principais Diferenciais

1. Integração com API do GitHub para carregar repositórios públicos e linguagens por projeto.
2. Curadoria manual de projetos de destaque com ordenação estratégica.
3. Filtros por stack (React, TypeScript, JavaScript, n8n e outros).
4. Internacionalização completa em português e inglês com `i18next` e `react-i18next`.
5. SEO técnico configurado com Open Graph, Twitter Cards, canonical, hreflang e JSON-LD (`Person`).
6. Navegação SPA com rotas dedicadas para Home, Sobre, Projetos, Contato e página 404.
7. Layout responsivo com menu mobile, sidebar social fixa e animações controladas com ScrollReveal.

### Tecnologias Aplicadas

1. React 19
2. React Router DOM 7
3. Vite 7
4. Axios
5. i18next e react-i18next
6. ScrollReveal
7. React Icons e Font Awesome
8. ESLint

### Arquitetura

```text
src/
  assets/
  components/
    Header.jsx
    Footer.jsx
    SocialSidebar.jsx
    NotFound.jsx
  hooks/
    useScrollReveal.js
  pages/
    Home.jsx
    About.jsx
    Projects.jsx
    Contact.jsx
  services/
    githubApi.js
  locales/
    pt/translation.json
    en/translation.json
  styles/
  App.jsx
  i18n.js
  main.jsx
```

### Como Executar Localmente

```bash
npm install
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Variáveis de Ambiente

Crie ou ajuste o arquivo `.env` na raiz:

```env
VITE_GITHUB_USERNAME="seu_usuario_github"
VITE_GITHUB_TOKEN="seu_token_opcional"
```

Observação: o token é opcional, mas recomendado para reduzir limitação de requisições na API do GitHub.

### Objetivo Profissional

Este projeto foi construído para demonstrar capacidade de:

1. Desenvolver interfaces modernas e responsivas.
2. Integrar frontend com APIs externas.
3. Estruturar aplicações React com foco em escalabilidade.
4. Entregar uma base pronta para evolução contínua.

### Contato

1. LinkedIn: https://www.linkedin.com/in/camilo-ruas-3a2a6425/
2. GitHub: https://github.com/Camiloruas
3. E-mail: miloruas@gmail.com

Developed by Camilo Ruas.
