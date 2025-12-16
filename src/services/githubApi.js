// src/services/githubApi.js
import axios from "axios";

export const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const BASE_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;

const api = axios.create({
  headers: GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {},
});

/**
 * Função para buscar os repositórios públicos do usuário no GitHub.
 * Adicionalmente, busca as linguagens de cada repositório.
 * @returns {Promise<Array>} Uma promessa que resolve para a lista de repositórios com suas linguagens.
 */
export const getRepositories = async () => {
  try {
    // Busca os repositórios do seu usuário
    const reposResponse = await api.get(`${BASE_URL}/repos`, {
      params: {
        sort: "pushed", // Ordena por data do último push para ter os mais recentes primeiro
        direction: "desc",
      },
    });

    const repos = reposResponse.data;

    // Para cada repositório, busca as linguagens usadas
    const reposWithLanguages = await Promise.all(
      repos.map(async (repo) => {
        try {
          const languagesResponse = await api.get(repo.languages_url);
          // Adiciona a lista de linguagens ao objeto do repositório
          return {
            ...repo,
            // Transforma o objeto de linguagens em um array de strings
            languages_list: Object.keys(languagesResponse.data).map((lang) => lang.toLowerCase()),
          };
        } catch (langError) {
          console.error(`Erro ao buscar linguagens para o repositório ${repo.name}:`, langError);
          // Retorna o repositório sem a lista de linguagens em caso de erro
          return {
            ...repo,
            languages_list: [],
          };
        }
      })
    );

    return reposWithLanguages;
  } catch (error) {
    console.error("Erro ao buscar repositórios do GitHub:", error);
    return [];
  }
};
