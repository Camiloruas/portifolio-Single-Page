// src/pages/Home.jsx
import React from "react";
import { useTranslation } from 'react-i18next';
import useScrollReveal from "../hooks/useScrollReveal";
import "../styles/Home.css";
// Ajuste o caminho da sua foto se necessário
import profilePhoto from "../assets/project-images/magem-capa.jpeg";

const Home = () => {
  const { t } = useTranslation();
  // ANIMAÇÕES SCROLL REVEAL - DISTÂNCIA E DURAÇÃO AJUSTADAS POR VOCÊ
  useScrollReveal(".text-content .home-name-1", {
    origin: "left",
    distance: "500px", // Grande deslocamento
    duration: 1300,
    delay: 200,
  });
  useScrollReveal(".text-content .home-name-2", {
    origin: "left",
    distance: "500px",
    duration: 1200,
    delay: 500,
  });
  useScrollReveal(".text-content .habilidades", {
    origin: "left",
    distance: "500px",
    duration: 900,
    delay: 1000,
  });
  useScrollReveal(".image-content .new-profile-photo", {
    origin: "right",
    distance: "300px",
    duration: 1200,
    delay: 800,
  });

  return (
    <section className="home-page">
      <div className="home-main-content">
        <div className="text-content">
          <p className="home-name-1">Camilo</p>
          <p className="home-name-2">Ruas</p>
          <p className="habilidades">{t('home.role')}</p>
        </div>

        <div className="image-content">
          <img src={profilePhoto} alt="Foto de Perfil de Camilo Ruas" className="new-profile-photo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
