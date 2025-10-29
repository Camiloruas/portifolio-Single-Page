// src/pages/About.jsx
import React from "react";

// 🚨 IMPORTAÇÃO DA FOTO: Certifique-se que o nome do arquivo bate com sua foto!
// Exemplo: Se o nome do arquivo for 'camilo.png', mude para:
//import ProfileImage from '../assets/camilo.png';
import ProfileImage from "../assets/project-images/profile.jpg";
import "../styles/About.css"; // Vamos criar este estilo no próximo passo (Passo 15)

const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        {/* 1. SEÇÃO DA IMAGEM E BIO CURTA */}
        <div className="profile-section">
          {/* A tag alt é importante para acessibilidade! */}
          <img src={ProfileImage} alt="Foto de perfil de Camilo Ruas" className="profile-photo" />

          <div className="bio-summary">
            <h2>Olá, eu sou Camilo Ruas!</h2>
            {/* Preencha com sua especialidade */}
            <h3>Desenvolvedor Front-end | Focado em React e JavaScript</h3>
            <p>Apaixonado por criar interfaces web modernas e responsivas. Minha jornada na programação começou com... [**Insira aqui um resumo de 2-3 linhas sobre sua paixão e objetivo!**]</p>
          </div>
        </div>

        {/* 2. SEÇÃO DE BIOGRAFIA DETALHADA */}
        <div className="detailed-bio">
          <h3>Minha Trajetória</h3>
          <p>[**Insira aqui um parágrafo maior sobre sua experiência de aprendizado, projetos importantes e sua filosofia de trabalho.**] Por exemplo: "Com formação em [Nome do Curso/Bootcamp], desenvolvi projetos que me permitiram mergulhar em..."</p>
          <p>[**Mais um parágrafo sobre seus objetivos futuros e como você busca desafios.**]</p>
        </div>

        {/* 3. SEÇÃO DE HABILIDADES (TECH STACK) */}
        <div className="tech-stack-section">
          <h3>Minhas Habilidades (Tech Stack)</h3>
          <ul className="skills-list">
            {/* Habilidades Principais */}
            <li>
              <span className="skill-item">JavaScript (ES6+)</span>
            </li>
            <li>
              <span className="skill-item">React / Hooks</span>
            </li>
            <li>
              <span className="skill-item">HTML5 / CSS3</span>
            </li>
            <li>
              <span className="skill-item">Git / GitHub</span>
            </li>

            {/* Habilidades Secundárias */}
            <li>
              <span className="skill-item">Vite / Webpack</span>
            </li>
            <li>
              <span className="skill-item">APIs REST (Axios)</span>
            </li>
            <li>
              <span className="skill-item">Design Responsivo (Flexbox/Grid)</span>
            </li>
            <li>
              <span className="skill-item">SQL / NoSQL (MongoDB)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
