// src/services/githubApi.js
import axios from "axios";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const BASE_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;

/**
 * Função para buscar os repositórios públicos do usuário no GitHub.
 * @returns {Promise<Array>} Uma promessa que resolve para a lista de repositórios.
 */
export const getRepositories = async () => {
  try {
    // Busca os repositórios do seu usuário
    const response = await axios.get(`${BASE_URL}/repos`, {
      params: {
        sort: "created", // Ordena por data de criação
        direction: "desc", // Do mais novo para o mais antigo
      },
    });

    // Retorna a lista de repositórios
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar repositórios do GitHub:", error);
    // Em caso de falha, retorna um array vazio
    return [];
  }
};
