import axios from "axios";

// Configuração padrão para as requisições
const axiosInstance = axios.create({
  baseURL: "http://localhost:8181", // Substitua pela URL base da sua API
  timeout: 5000, // Tempo limite para a requisição
  headers: {
    "Content-Type": "application/json",
  },
});

// Função serverRequest para realizar chamadas ao servidor
export const serverRequest = async ({ url, method = "GET", data = null, params = null }) => {
  try {
    const response = await axiosInstance({
      url,
      method,
      data,
      params,
    });
    return response.data; // Retorna os dados da resposta em caso de sucesso
  } catch (err) {
    console.error("Erro na requisição:", err.response || err.message);
    throw err.response?.data || { message: "Erro desconhecido" }; // Retorna o erro
  }
};
