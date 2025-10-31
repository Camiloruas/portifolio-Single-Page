// src/pages/Projects.jsx - FINALIZADO: APENAS LINGUAGEM PRINCIPAL

import React, { useState, useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { getRepositories, GITHUB_USERNAME } from "../services/githubApi";
import "../styles/Projects.css";
// Importe ícones se for usá-los nos links/botões
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// ----------------------------------------------------
// 1. IMPORTAÇÃO DE IMAGENS
// ----------------------------------------------------
import Project1Image from "../assets/project-images/agenda-express-mongo.jpeg";
import Project2Image from "../assets/project-images/javascript-form-validation.jpeg";
// ... (Mantenha o restante das suas 21 importações de imagem aqui) ...
import Project3Image from "../assets/project-images/node-express-api-rest.jpeg";
import Project4Image from "../assets/project-images/portifolio-Single-Page.gif";
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

// ----------------------------------------------------
// 2. ARRAY MANUAL COM LINKS DE DEPLOY E IMAGENS
// ----------------------------------------------------
const projectDetails = [
  { repoName: "portifolio-Single-Page", imageUrl: Project4Image, deployUrl: "www.camiloruas.dev", languageFilter: "React" },
  { repoName: "node-express-api-rest", imageUrl: Project3Image, deployUrl: "https://github.com/Camiloruas/node-express-api-rest", languageFilter: "Node.js" },
  { repoName: "agenda-express-mongo", imageUrl: Project1Image, deployUrl: "https://camiloruas.github.io/TrybeTunes/", languageFilter: "Node.js" },
  { repoName: "javascript-form-validation", imageUrl: Project2Image, deployUrl: "https://camiloruas.github.io/TrybeTunes/", languageFilter: "JavaScript" },
  { repoName: "react-cpf-validator", imageUrl: Project5Image, deployUrl: "https://camiloruas.github.io/react-cpf-validator/", languageFilter: "React" },
  { repoName: "calcauladora", imageUrl: Project6Image, deployUrl: "https://camiloruas.github.io/calcauladora/", languageFilter: "JavaScript" },
  { repoName: "pomodoro-timer", imageUrl: Project7Image, deployUrl: "https://pomodoro-timer-six-sage.vercel.app/", languageFilter: "React" },
  { repoName: "react-flow-tasks", imageUrl: Project8Image, deployUrl: "https://react-flow-tasks-git-main-camilos-projects-0cde7ca6.vercel.app/", languageFilter: "React" },
  { repoName: "task-CRUD", imageUrl: Project9Image, deployUrl: "https://camiloruas.github.io/TrybeTunes/", languageFilter: "JavaScript" },
  { repoName: "weather-now", imageUrl: Project10Image, deployUrl: "https://weather-now-ashy.vercel.app/", languageFilter: "React" },
  { repoName: "blog-app-capstone-node", imageUrl: Project11Image, deployUrl: "https://github.com/Camiloruas/blog-app-capstone-node", languageFilter: "Node.js" },
  { repoName: "simon-game-challenge", imageUrl: Project12Image, deployUrl: "https://camiloruas.github.io/simon-game-challenge/", languageFilter: "JavaScript" },
  { repoName: "english-alphabet-audio", imageUrl: Project13Image, deployUrl: "https://camiloruas.github.io/english-alphabet-audio/", languageFilter: "JavaScript" },
  { repoName: "Capstone-Project-1", imageUrl: Project14Image, deployUrl: "https://camiloruas.github.io/Capstone-Project-1/", languageFilter: "React" },
  { repoName: "Camiloruas", imageUrl: Project15Image, deployUrl: "https://github.com/Camiloruas/Camiloruas", languageFilter: "Outros" },
];

// ----------------------------------------------------
// 3. COMPONENTE PROJECT CARD
// ----------------------------------------------------
const ProjectCard = ({ repo }) => {
  // Aplica a animação Scroll Reveal em cada cartão individualmente
  useScrollReveal(`#card-${repo.id}`, {
    origin: "bottom",
    distance: "40px",
    duration: 800,
    delay: 50,
    opacity: 0,
  });

  return (
    <div id={`card-${repo.id}`} className="repo-card">
      {repo.imageUrl && (
        <div className="project-image-container">
          <img src={repo.imageUrl} alt={`Captura de tela do projeto ${repo.name}`} className="project-image" />
        </div>
      )}

      <div className="repo-content">
        <h3>{repo.name}</h3>
        <p>{repo.description || "Sem descrição disponível."}</p>

        {/* 🚨 FINALIZADO: Exibe APENAS a linguagem principal do GitHub (limpo e elegante) */}
        <div className="card-info">{repo.language && <span className="language-tag">{repo.language}</span>}</div>
        {/* FIM DO BLOCO FINALIZADO */}

        <div className="card-links">
          {/* Link para o Repositório no GitHub */}
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-base btn-primary github-link">
            <FaGithub /> Código
          </a>

          {/* Link para o Projeto Online (Só aparece se o deployUrl existir) */}
          {repo.deployUrl && (
            <a href={repo.deployUrl} target="_blank" rel="noopener noreferrer" className="btn-base btn-primary deploy-link">
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 4. COMPONENTE PROJECTS (COM LÓGICA DE FILTRAGEM)
// ----------------------------------------------------
const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("Todos");

  // Lista de filtros, extraída das languagesFilter, mais 'Todos'
  const availableFilters = ["Todos", ...new Set(projectDetails.map((d) => d.languageFilter).filter(Boolean))];

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      const githubRepos = await getRepositories();

      // Lógica de Mesclagem
      const mergedRepos = githubRepos
        .map((repo) => {
          const manualDetails = projectDetails.find((detail) => detail.repoName === repo.name);
          return {
            ...repo,
            imageUrl: manualDetails ? manualDetails.imageUrl : null,
            deployUrl: manualDetails ? manualDetails.deployUrl : null,
            // Adiciona o filtro manual para garantir que a FILTRAGEM funcione
            languageFilter: manualDetails ? manualDetails.languageFilter : repo.language || "Outros",
          };
        })
        .filter((repo) => repo.languageFilter); // Remove repos sem languageFilter

      setRepos(mergedRepos);
      setIsLoading(false);
    };

    fetchRepos();
  }, []);

  // Lógica de Filtro
  const filteredRepos = repos.filter((repo) => {
    return filter === "Todos" || repo.languageFilter === filter;
  });

  if (isLoading) {
    return (
      <section className="projects-page loading">
        <h2 className="page-title">Carregando Projetos...</h2>
      </section>
    );
  }

  if (repos.length === 0) {
    return (
      <section className="projects-page error">
        <h2 className="page-title">Ops! Não encontramos nenhum repositório.</h2>
        <p>Verifique se o nome de usuário ('{GITHUB_USERNAME}') está correto no arquivo de serviço.</p>
      </section>
    );
  }

  return (
    <section className="projects-page">
      <h2 className="page-title">Meus Projetos Recentes</h2>

      {/* BARRA DE FILTROS */}
      <div className="filter-buttons-container">
        {availableFilters.map((f) => (
          <button key={f} className={`btn-base btn-primary ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>
            {f}
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
