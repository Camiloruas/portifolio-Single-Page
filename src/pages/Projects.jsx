// src/pages/Projects.jsx - FINALIZADO: COM ORDENAÇÃO MANUAL

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useScrollReveal from "../hooks/useScrollReveal";
// Mantenha suas importações de serviço
import { getRepositories, GITHUB_USERNAME } from "../services/githubApi";
import "../styles/Projects.css";
// Importe ícones se for usá-los nos links/botões
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// ----------------------------------------------------
// 1. IMPORTAÇÃO DE IMAGENS
// ----------------------------------------------------
// ... (Suas 15 importações de imagem estão aqui) ...
import Project1Image from "../assets/project-images/agenda-express-mongo.jpeg";
import Project2Image from "../assets/project-images/javascript-form-validation.jpeg";
import Project3Image from "../assets/project-images/node-express-api-rest.jpeg";
import Project4Image from "../assets/project-images/portifolio-Single-Page.png";
import Project5Image from "../assets/project-images/react-cpf-validator.png";
import Project6Image from "../assets/project-images/calcauladora.png";
import Project7Image from "../assets/project-images/pomodoro-timer.png";
import Project8Image from "../assets/project-images/react-flow-tasks.png";
import Project9Image from "../assets/project-images/task-CRUD.png";
import Project10Image from "../assets/project-images/weather-now.png";
import Project11Image from "../assets/project-images/blog-app-capstone-node.png";
import Project12Image from "../assets/project-images/simon-game-challenge.png";
import Project13Image from "../assets/project-images/english-alphabet-audio.png";
import Project14Image from "../assets/project-images/Capstone-Project-1.png";
import Project15Image from "../assets/project-images/Camiloruas.png"; // Ajustei o caminho para manter a consistência
import Project16Image from "../assets/project-images/agendamento-bot.jpg";
import Project17Image from "../assets/project-images/mcp-server-integration.png";
import Project18Image from "../assets/project-images/mcp-client.png";
import Project19Image from "../assets/project-images/comm-solucoes-website.png";
// ----------------------------------------------------
// 2. ARRAY MANUAL COM LINKS DE DEPLOY E IMAGENS - CORREÇÃO DE LINKS APLICADA
// ----------------------------------------------------
/*
 * CORREÇÃO DE LINK: Adicionado o protocolo 'https://' no link 'www.camiloruas.dev'
 */
const projectDetails = [
  // CORREÇÃO: O primeiro item agora é um objeto limpo.

  {
    repoName: "mcp-client",
    imageUrl: Project18Image,
    deployUrl: "https://github.com/Camiloruas/mcp-client",
    languageFilter: ["javascript"],
  },

  {
    repoName: "mcp-server-integration",
    imageUrl: Project17Image,
    deployUrl: "https://github.com/Camiloruas/mcp-server-integration",
    languageFilter: ["typescript"],
  },

  {
    repoName: "comm-solucoes-website",
    imageUrl: Project19Image,
    deployUrl: "https://comm-solucoes-website.vercel.app/",
    languageFilter: ["react"],
  },

  {
    repoName: "portifolio-Single-Page",
    imageUrl: Project4Image,
    deployUrl: "https://www.camiloruas.dev",
    languageFilter: ["react"],
  },

  {
    repoName: "agendamento-bot",
    imageUrl: Project16Image,
    deployUrl: "https://www.youtube.com/shorts/ines78N-htE",
    languageFilter: ["typescript", "javascript"],
  },

  {
    repoName: "weather-now",
    imageUrl: Project10Image,
    deployUrl: "https://weather-now-ashy.vercel.app/",
    languageFilter: ["react"],
  },
  {
    repoName: "pomodoro-timer",
    imageUrl: Project7Image,
    deployUrl: "https://pomodoro-timer-six-sage.vercel.app/",
    languageFilter: ["react"],
  },
  {
    repoName: "react-cpf-validator",
    imageUrl: Project5Image,
    deployUrl: "https://camiloruas.github.io/react-cpf-validator/",
    languageFilter: ["react"],
  },
  {
    repoName: "english-alphabet-audio",
    imageUrl: Project13Image,
    deployUrl: "https://camiloruas.github.io/english-alphabet-audio/",
    languageFilter: ["javascript"],
  },
  {
    repoName: "calculadora",
    imageUrl: Project6Image,
    deployUrl: "https://camiloruas.github.io/calcauladora/",
    languageFilter: ["javascript"],
  },
  {
    repoName: "javascript-form-validation",
    imageUrl: Project2Image,
    deployUrl: "https://camiloruas.github.io/javascript-form-validation/",
    languageFilter: ["javascript"],
  },
  {
    repoName: "agenda-express-mongo",
    imageUrl: Project1Image,
    deployUrl: "https://github.com/Camiloruas/agenda-express-mongo",
    languageFilter: ["javascript"],
  },
  {
    repoName: "simon-game-challenge",
    imageUrl: Project12Image,
    deployUrl: "https://camiloruas.github.io/simon-game-challenge/",
    languageFilter: ["javascript"],
  },
  {
    repoName: "react-flow-tasks",
    imageUrl: Project8Image,
    deployUrl: "https://react-flow-tasks-git-main-camilos-projects-0cde7ca6.vercel.app/",
    languageFilter: ["typescript", "react"],
  },
  {
    repoName: "task-CRUD",
    imageUrl: Project9Image,
    deployUrl: "https://github.com/Camiloruas/task-CRUD",
    languageFilter: ["javascript"],
  },
  {
    repoName: "node-express-api-rest",
    imageUrl: Project3Image,
    deployUrl: "https://github.com/Camiloruas/node-express-api-rest",
    languageFilter: ["javascript"],
  },
  {
    repoName: "blog-app-capstone-node",
    imageUrl: Project11Image,
    deployUrl: "https://github.com/Camiloruas/blog-app-capstone-node",
    languageFilter: ["javascript"],
  },
  {
    repoName: "Capstone-Project-1",
    imageUrl: Project14Image,
    deployUrl: "https://camiloruas.github.io/Capstone-Project-1/",
    languageFilter: ["react"],
  },
  {
    repoName: "Camiloruas",
    imageUrl: Project15Image,
    deployUrl: "https://github.com/Camiloruas/Camiloruas",
    languageFilter: ["outros"],
  },
];

// ----------------------------------------------------
// 3. COMPONENTE PROJECT CARD - CORREÇÃO DE SEGURANÇA APLICADA
// ----------------------------------------------------
const ProjectCard = ({ repo }) => {
  const { t } = useTranslation();
  // Aplica a animação Scroll Reveal em cada cartão individualmente
  useScrollReveal(`#card-${repo.id}`, {
    origin: "bottom",
    distance: "40px",
    duration: 800,
    delay: 50,
    opacity: 0,
  });

  // Lógica para garantir que o link de deploy comece com http/https
  const deployLink = repo.deployUrl && (repo.deployUrl.startsWith("http://") || repo.deployUrl.startsWith("https://")) ? repo.deployUrl : `https://${repo.deployUrl}`; // Assume HTTPS se não houver protocolo

  return (
    <div id={`card-${repo.id}`} className="repo-card">
      {repo.imageUrl && (
        <div className="project-image-container">
          <img src={repo.imageUrl} alt={`Captura de tela do projeto ${repo.name}`} className="project-image" />
        </div>
      )}

      <div className="repo-content">
        <h3>{repo.name}</h3>
        <p>{repo.description || t("projects.noDescription")}</p>

        {/* Exibe a linguagem principal do GitHub (limpo e elegante) */}
        <div className="card-info">{repo.language && <span className="language-tag">{repo.language}</span>}</div>

        <div className="card-links">
          {/* Link para o Repositório no GitHub */}
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-base btn-primary github-link">
            <FaGithub /> {t("projects.code")}
          </a>

          {/* Link para o Projeto Online (Só aparece se o deployUrl existir) */}
          {repo.deployUrl && (
            <a
              // Usa a variável de link segura 'deployLink'
              href={deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary deploy-link"
            >
              <FaExternalLinkAlt /> {t("projects.live")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 4. COMPONENTE PROJECTS (COM LÓGICA DE FILTRAGEM E NOVA ORDENAÇÃO)
// ----------------------------------------------------
const Projects = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const [availableFilters, setAvailableFilters] = useState(["all"]);

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      const githubRepos = await getRepositories();

      // 1. Mapeia todos os repositórios da API para busca rápida e controle de exclusão
      const githubMap = new Map();
      githubRepos.forEach((repo) => githubMap.set(repo.name, repo));

      let orderedRepos = [];

      // 2. FASE 1: Prioriza e ordena os projetos com detalhes manuais (projectDetails)
      projectDetails.forEach((detail) => {
        const repoFromGithub = githubMap.get(detail.repoName);

        if (repoFromGithub) {
          // Mescla os detalhes e adiciona ao array final na ordem do projectDetails
          orderedRepos.push({
            ...repoFromGithub,
            imageUrl: detail.imageUrl,
            deployUrl: detail.deployUrl,
            languageFilter: detail.languageFilter,
          });
          // Remove do mapa para que não seja adicionado novamente
          githubMap.delete(detail.repoName);
        }
      });

      // 3. FASE 2: Adiciona o restante dos repositórios do GitHub (sem detalhes manuais)
      const remainingRepos = Array.from(githubMap.values())
        .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
        .map((repo) => {
          const languages = repo.languages_list || [];
          if (repo.topics.includes("react")) {
            languages.push("react");
          }
          return {
            ...repo,
            imageUrl: null,
            deployUrl: null,
            languageFilter: languages.length > 0 ? [...new Set(languages)] : ["outros"],
          };
        });

      orderedRepos = [...orderedRepos, ...remainingRepos];

      // Define os filtros disponíveis
      const allFilters = new Set(["all"]);
      orderedRepos.forEach((repo) => {
        repo.languageFilter.forEach((lang) => allFilters.add(lang));
      });
      // Garante a ordem desejada dos filtros
      const sortedFilters = ["all", "react", "typescript", "javascript", "outros"].filter((f) => allFilters.has(f));
      setAvailableFilters(sortedFilters);

      setRepos(orderedRepos);
      setIsLoading(false);
    };

    fetchRepos();
  }, []); // Fim do useEffect

  // Lógica de Filtro
  const filteredRepos = repos.filter((repo) => {
    if (filter === "all") return true;
    return repo.languageFilter.includes(filter);
  });

  if (isLoading) {
    return (
      <section className="projects-page loading">
        <h2 className="page-title">{t("projects.loading")}</h2>
      </section>
    );
  }

  if (repos.length === 0) {
    return (
      <section className="projects-page error">
        <h2 className="page-title">{t("projects.errorTitle")}</h2>
        <p>{t("projects.errorDescription", { GITHUB_USERNAME })}</p>
      </section>
    );
  }

  return (
    <section className="projects-page">
      <h2 className="page-title">{t("projects.title")}</h2>

      {/* BARRA DE FILTROS */}
      <div className="filter-buttons-container">
        {availableFilters.map((f) => (
          <button key={f} className={`btn-base btn-primary ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>
            {t(`projects.filters.${f}`)}
          </button>
        ))}
      </div>

      <div className="repo-list">
        {filteredRepos.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
