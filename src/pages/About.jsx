// src/pages/About.jsx

import useScrollReveal from "../hooks/useScrollReveal";
import "../styles/About.css";

// --- IMPORTAÇÕES DE ÍCONES ---
// Di (Devicons) - Ícones básicos
import { DiReact, DiJavascript1, DiHtml5, DiCss3, DiGit, DiNodejs, DiPostgresql, DiMongodb } from "react-icons/di";
// Fa (Font Awesome) - Ícones gerais
import { FaSass, FaBootstrap } from "react-icons/fa";
// Si (Simple Icons) - Ícones de marcas e tecnologias
import { SiNextdotjs, SiTypescript, SiNodedotjs, SiRedux } from "react-icons/si";
// Tb (Tabler Icons) - Ícones do VS Code
import { TbBrandVscode } from "react-icons/tb";

// 🚨 IMPORTAÇÃO DA FOTO: MANTIDO SEU CAMINHO ATUAL
import ProfileImage from "../assets/project-images/profile.jpg";

// Componente individual para o ícone (com a correção do VS Code)
// eslint-disable-next-line no-unused-vars
const SkillIcon = ({ Icon: IconComponent, name }) => (
  <div className="skill-item-icon-wrapper">
    <IconComponent className="skill-icon" />
    <p className="skill-name">{name}</p>
  </div>
);

// NOVO: Organização das Habilidades por Setor
const categorizedSkills = {
  Languages: [
    { Icon: DiJavascript1, name: "JavaScript" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: DiHtml5, name: "HTML5" },
    { Icon: DiCss3, name: "CSS3" },
    // Adicione outras linguagens aqui (ex: Python)
  ],
  "Frameworks & Libraries": [
    { Icon: DiReact, name: "ReactJS" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiRedux, name: "Redux" },
    { Icon: SiNodedotjs, name: "Node.js" },
    { Icon: FaBootstrap, name: "Bootstrap" },
    { Icon: FaSass, name: "Sass" },
  ],
  "Databases & Backend": [
    { Icon: DiPostgresql, name: "PostgreSQL" },
    { Icon: DiMongodb, name: "MongoDB" },
    // Adicione outros aqui (ex: MySQL, Firebase)
  ],
  "Tools & Services": [
    { Icon: DiGit, name: "Git" },
    { Icon: TbBrandVscode, name: "VS Code" }, // 🚨 ÍCONE CORRIGIDO AQUI
    // Adicione outras ferramentas aqui (ex: Docker, Figma, Webpack)
  ],
};

const About = () => {
  // ----------------------------------------------------
  // ANIMAÇÕES SCROLL REVEAL - Aplicadas
  // ----------------------------------------------------

  // ANIMAÇÃO 1: Anima o bloco de texto (para a parte superior)
  useScrollReveal(".profile-section, .detailed-bio", {
    origin: "left",
    distance: "60px",
    duration: 1000,
    delay: 300,
    interval: 100,
  });

  // ANIMAÇÃO 2: Anima o título da Seção de Habilidades
  useScrollReveal(".tech-stack-section h3", {
    origin: "bottom",
    distance: "50px",
    duration: 800,
    delay: 800,
  });

  // ANIMAÇÃO 3: Anima os títulos dos Setores e os ícones em cascata
  useScrollReveal(".skills-group h4", {
    origin: "top",
    distance: "20px",
    duration: 500,
    delay: 1100,
  });

  useScrollReveal(".skills-list .skill-item-icon-wrapper", {
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay: 1200,
    interval: 50,
  });

  return (
    <section className="about-page">
      <div className="about-container">
        {/* 1. SEÇÃO DA IMAGEM E BIO CURTA */}
        <div className="profile-section">
          <img src={ProfileImage} alt="Foto de perfil de Camilo Ruas" className="profile-photo" />
          <div className="bio-summary">
            <h2 className="quem-sou-eu">Olá, eu sou Camilo Ruas!</h2>
            <h3>Desenvolvedor Front-end | Focado em React e JavaScript</h3>
            <p>Apaixonado por criar interfaces web modernas e responsivas. Minha jornada na programação começou com... [**Insira aqui um resumo de 2-3 linhas sobre sua paixão e objetivo!**]</p>
          </div>
        </div>

        {/* 2. SEÇÃO DE BIOGRAFIA DETALHADA */}
        <div className="detailed-bio">
          <h3>Minha Trajetória</h3>
          <p>[**Insira aqui um parágrafo maior sobre sua experiência de aprendizado, projetos importantes e sua filosofia de trabalho.**]</p>
          <p>[**Mais um parágrafo sobre seus objetivos futuros e como você busca desafios.**]</p>
        </div>

        {/* 3. SEÇÃO DE HABILIDADES (TECH STACK) - ORGANIZADA POR SETORES */}
        <div className="tech-stack-section">
          <h3>Minhas Habilidades (Tech Stack)</h3>

          {/* Mapeia e renderiza cada setor de habilidades */}
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div className="skills-group" key={category}>
              {/* Título do Setor */}
              <h4>{category}</h4>

              {/* Ícones do Setor */}
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <SkillIcon key={index} Icon={skill.Icon} name={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
