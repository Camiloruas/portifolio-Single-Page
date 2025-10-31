// src/pages/About.jsx - CÓDIGO FINAL COM DESTAQUE DE TEXTO

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
  ],
  "Frameworks & Libraries": [
    { Icon: DiReact, name: "ReactJS" },
    { Icon: SiNextdotjs, name: "Next.js" },
    // alguns estão desabilitados, pois ainda não tenho experiência com eles
    { Icon: SiRedux, name: "Redux", disabled: true },
    { Icon: SiNodedotjs, name: "Node.js" },
    { Icon: FaBootstrap, name: "Bootstrap" },
    { Icon: FaSass, name: "Sass", disabled: true },
  ],
  "Databases & Backend": [
    { Icon: DiPostgresql, name: "PostgreSQL" },
    { Icon: DiMongodb, name: "MongoDB" },
  ],
  "Tools & Services": [
    { Icon: DiGit, name: "Git" },
    { Icon: TbBrandVscode, name: "VS Code" },
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
            {/* CÓDIGO ATUALIZADO AQUI: H2 com spans para destaque */}
            <h2 className="quem-sou-eu">
              <span className="giant-hello">Olá!</span> Eu sou <span className="highlight-name">Camilo Ruas</span>!
            </h2>

            {/* CÓDIGO ATUALIZADO AQUI: H3 com spans para destaque */}
            <h3>
              Desenvolvedor <span className="highlight-keyword">Full Stack</span> | Explorando tecnologias como <span className="highlight-keyword">Node.js</span>, <span className="highlight-keyword">TypeScript</span>, <span className="highlight-keyword">React</span> e{" "}
              <span className="highlight-keyword">PostgreSQL</span>
            </h3>

            <p>Apaixonado por tecnologia e movido pelo desejo de criar soluções úteis e funcionais, estou sempre em busca de aprender e aplicar novos conhecimentos. Meu objetivo é unir lógica, criatividade e propósito para transformar ideias em sistemas que realmente fazem a diferença. </p>
          </div>
        </div>

        {/* 2. SEÇÃO DE BIOGRAFIA DETALHADA */}
        <div className="detailed-bio">
          <h3>Minha Trajetória</h3>
          <p>
            Minha jornada na tecnologia começou antes mesmo da formatura em <span>Sistemas de Informação</span> , em 2010. Desde então, atuei por mais de uma década em empresas de grande porte como <span className="highlight-keyword">Proxxi Tecnologia IBM&reg; </span> e{" "}
            <span className="highlight-keyword">Bradesco</span> , onde aprendi o valor da responsabilidade, da precisão e do trabalho em equipe. Essa experiência me formou como profissional e me ensinou a importância de buscar excelência em tudo o que faço.
          </p>
          <p>
            Depois de anos dedicados à <span className="negrito"> infraestrutura</span>, decidi seguir um novo caminho, o do <span className="negrito">Desenvolvimento Web</span> , unindo lógica, criatividade e propósito. Hoje, estudo e desenvolvo projetos com{" "}
            <span className="negrito"> Node.js, TypeScript, React e PostgreSQL </span>, aplicando o que aprendi sobre disciplina e comprometimento para criar soluções funcionais e de impacto. Estou em constante aprendizado, sempre buscando me atualizar e dominar novas{" "}
            <span className="negrito"> linguagens, frameworks e tecnologias </span> que o mercado demanda, com o objetivo de evoluir continuamente como desenvolvedor e entregar resultados cada vez mais completos e alinhados às necessidades do setor.
          </p>
          <h3>Meus Objetivos e Desafios</h3>
          <p>
            Meu foco é consolidar minha atuação como desenvolvedor <span className="negrito">Full Stack</span> e participar de projetos que desafiem minha capacidade técnica e criativa. Busco oportunidades que me permitam crescer profissionalmente, colaborar com equipes que valorizem boas práticas
            de código e contribuir para soluções inovadoras. Tenho um perfil realizador e gosto de ver o resultado do meu trabalho ganhando vida. por isso, encaro cada desafio como uma chance de aprender, evoluir e entregar valor real através da tecnologia.
          </p>
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
                {/* 🚀 IMPLEMENTAÇÃO: Filtra os itens desabilitados antes de mapear */}
                {skills
                  .filter((skill) => !skill.disabled)
                  .map((skill, index) => (
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
