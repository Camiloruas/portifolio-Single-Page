// src/hooks/useScrollReveal.js
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = (selector, options = {}) => {
  useEffect(() => {
    // Verifica se o ScrollReveal está disponível
    if (ScrollReveal) {
      // Configuração padrão da animação
      const defaultOptions = {
        distance: "40px", // Distância que o elemento percorre
        origin: "bottom", // De onde ele vem (bottom, top, left, right)
        duration: 1000, // Duração em milissegundos
        delay: 200, // Atraso antes de iniciar
        easing: "ease-in-out",
        reset: false, // Animação roda uma vez (mudar para true para rodar toda vez que entra na tela)
        ...options,
      };

      // Aplica o ScrollReveal ao seletor
      ScrollReveal().reveal(selector, defaultOptions);
    }
  }, [selector, JSON.stringify(options)]);
};

export default useScrollReveal;
