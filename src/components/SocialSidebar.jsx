// src/components/SocialSidebar.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importe os ícones de marcas que você precisa
import { faLinkedinIn, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/SocialSidebar.css";
import useScrollReveal from "../hooks/useScrollReveal"; // Vamos animar isso também!

const SocialSidebar = () => {
  // Animação para o painel lateral, deslizando da direita
  useScrollReveal(".social-sidebar", {
    origin: "bottom",
    distance: "300px", // Distância maior para um efeito mais visível
    duration: 1000,
    delay: 1500, // Atraso para aparecer depois que o conteúdo principal carregou
    easing: "ease-in-out",
  });

  return (
    <div className="social-sidebar">
      <a href="https://www.linkedin.com/in/camilo-ruas-3a2a6425/" target="_blank" rel="noopener noreferrer" className="sidebar-icon linkedin" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
      </a>
      <a href="https://github.com/camiloruas" target="_blank" rel="noopener noreferrer" className="sidebar-icon github" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
      </a>
      <a href="https://www.instagram.com/camiloruas/" target="_blank" rel="noopener noreferrer" className="sidebar-icon instagram" aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
      </a>
      {/* Adicione outros links sociais conforme necessário */}
    </div>
  );
};

export default SocialSidebar;
