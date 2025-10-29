// src/pages/Projects.jsx
import React, { useState, useEffect } from "react";
import { getRepositories } from "../services/githubApi"; // Importa a função de serviço
import "../styles/Projects.css"; // Vamos criar este estilo depois

const Projects = () => {
  // Estado para armazenar a lista de repositórios
  const [repos, setRepos] = useState([]);
  // Estado para gerenciar o estado de carregamento
  const [isLoading, setIsLoading] = useState(true);

  // useEffect roda uma vez (por causa do array vazio []) após a primeira renderização
  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true); // Começa o carregamento
      const repositories = await getRepositories();
      setRepos(repositories); // Atualiza o estado com os dados
      setIsLoading(false); // Finaliza o carregamento
    };

    fetchRepos();
  }, []); // O array vazio garante que rode apenas na montagem

  // -------------------------------------
  // Lógica de Renderização Condicional
  // -------------------------------------

  if (isLoading) {
    return (
      <section className="projects-page loading">
        <h2>Carregando Projetos...</h2>
        {/* Você pode adicionar um ícone de carregamento aqui depois */}
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
            <h3>{repo.name}</h3>
            <p>{repo.description || "Sem descrição disponível."}</p>
            <p className="language">Linguagem: {repo.language || "N/A"}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
