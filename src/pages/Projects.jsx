// src/pages/Projects.jsx
import React, { useState, useEffect } from "react";

// Importa a função de serviço E o nome de usuário (para o erro de "repos.length === 0")
import { getRepositories, GITHUB_USERNAME } from "../services/githubApi";
import "../styles/Projects.css";

// ----------------------------------------------------
// 1. IMPORTAÇÃO DE IMAGENS (AJUSTE AQUI!)
// ----------------------------------------------------
// 🚨 Importe suas imagens aqui. O caminho é relativo a este arquivo Projects.jsx.
// Exemplo:
import Project1Image from "../assets/project-images/agenda-express-mongo.jpeg";
import Project2Image from "../assets/project-images/javascript-form-validation.jpeg";
import Project3Image from "../assets/project-images/node-express-api-rest.jpeg";
import Project4Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project5Image from "../assets/project-images/react-cpf-validator.png";
import Project6Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project7Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project8Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project9Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project10Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project11Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project12Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project13Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project14Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project15Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project16Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project17Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project18Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project19Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project20Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project21Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project22Image from "../assets/project-images/portifolio-Single-Page.gif";
import Project23Image from "../assets/project-images/portifolio-Single-Page.gif";

// ----------------------------------------------------
// 2. ARRAY MANUAL COM LINKS DE DEPLOY E IMAGENS (AJUSTE AQUI!)
// ----------------------------------------------------
const projectDetails = [
  {
    repoName: "portifolio-Single-Page",
    imageUrl: Project4Image,
    deployUrl: "camiloruas.dev",
  },
  {
    repoName: "node-express-api-rest",
    imageUrl: Project3Image,
    deployUrl: "https://github.com/Camiloruas/node-express-api-rest",
  },
  {
    repoName: "agenda-express-mongo",
    imageUrl: Project1Image,
    deployUrl: "https://camiloruas.github.io/TrybeTunes/", // VERIFIQUE ESTE LINK!
  },
  {
    repoName: "javascript-form-validation",
    imageUrl: Project2Image,
    deployUrl: "https://camiloruas.github.io/TrybeTunes/", // VERIFIQUE ESTE LINK!
  },
  {
    repoName: "react-cpf-validator",
    imageUrl: Project5Image,
    deployUrl: "https://camiloruas.github.io/TrybeTunes/", // VERIFIQUE ESTE LINK!
  },
  // ATENÇÃO: Os próximos projetos estão com o mesmo nome de repositório ("TrybeTunes").
  // A lógica de mesclagem só vai encontrar o primeiro. Corrija o nome do repo e a imagem, se for o caso!
  {
    repoName: "TrybeTunes",
    imageUrl: null,
    deployUrl: "https://camiloruas.github.io/TrybeTunes/",
  },
  // Remova os projetos repetidos ou preencha com os dados corretos!
];
const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      const githubRepos = await getRepositories();

      // ----------------------------------------------------
      // 3. LÓGICA DE MESCLAGEM (Merge)
      // ----------------------------------------------------
      const mergedRepos = githubRepos.map((repo) => {
        // Encontra a entrada manual que corresponde ao nome deste repositório
        const manualDetails = projectDetails.find((detail) => detail.repoName === repo.name);

        // Retorna o objeto do repositório, adicionando as propriedades de deploy e imagem
        return {
          ...repo, // Dados da API do GitHub
          imageUrl: manualDetails ? manualDetails.imageUrl : null,
          deployUrl: manualDetails ? manualDetails.deployUrl : null,
        };
      });

      setRepos(mergedRepos); // Atualiza o estado com os dados mesclados
      setIsLoading(false);
    };

    fetchRepos();
  }, []);

  // -------------------------------------
  // Lógica de Renderização Condicional
  // -------------------------------------

  if (isLoading) {
    return (
      <section className="projects-page loading">
        <h2>Carregando Projetos...</h2>
      </section>
    );
  }

  if (repos.length === 0) {
    return (
      <section className="projects-page error">
        <h2>Ops! Não encontramos nenhum repositório.</h2>
        <p>Verifique se o nome de usuário ('{GITHUB_USERNAME}') está correto no arquivo de serviço.</p>
      </section>
    );
  }

  return (
    <section className="projects-page">
      <h2>Meus Projetos Recentes</h2>
      <div className="repo-list">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-card">
            {/* ---------------------------------------------------- */}
            {/* 4. NOVO: EXIBIÇÃO DA IMAGEM E DOS LINKS */}
            {/* ---------------------------------------------------- */}

            {repo.imageUrl && (
              <div className="project-image-container">
                <img src={repo.imageUrl} alt={`Captura de tela do projeto ${repo.name}`} className="project-image" />
              </div>
            )}

            <div className="repo-content">
              <h3>{repo.name}</h3>
              <p>{repo.description || "Sem descrição disponível."}</p>
              <p className="language">Linguagem: {repo.language || "N/A"}</p>

              <div className="card-links">
                {/* Link para o Repositório no GitHub */}
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="github-link">
                  Código Fonte
                </a>

                {/* Link para o Projeto Online (Só aparece se o deployUrl existir) */}
                {repo.deployUrl && (
                  <a href={repo.deployUrl} target="_blank" rel="noopener noreferrer" className="deploy-link">
                    Ver Projeto Online
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
