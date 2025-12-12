import { useTranslation, Trans } from "react-i18next";
import useScrollReveal from "../hooks/useScrollReveal";
import "../styles/About.css";

import { DiReact, DiJavascript1, DiHtml5, DiCss3, DiGit, DiNodejs, DiPostgresql, DiMongodb } from "react-icons/di";

import { FaSass, FaBootstrap, FaWindows, FaLinux } from "react-icons/fa";

import { SiNextdotjs, SiTypescript, SiNodedotjs, SiRedux, SiDocker, SiN8N } from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";
import { Ollama } from "@lobehub/icons";

import ProfileImage from "../assets/project-images/profile.jpg";

// Componente customizado para o ícone MCP (oficial do repositório modelcontextprotocol/docs)
const McpIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 195 195"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
  >
    <path d="M25 97.8528L92.8823 29.9706C102.255 20.598 117.451 20.598 126.823 29.9706V29.9706C136.196 39.3431 136.196 54.5391 126.823 63.9117L75.5581 115.177" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
    <path d="M76.2653 114.47L126.823 63.9117C136.196 54.5391 151.392 54.5391 160.765 63.9117L161.118 64.2652C170.491 73.6378 170.491 88.8338 161.118 98.2063L99.7248 159.6C96.6006 162.724 96.6006 167.789 99.7248 170.913L112.331 183.52" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
    <path d="M109.853 46.9411L59.6482 97.1457C50.2757 106.518 50.2757 121.714 59.6482 131.087V131.087C69.0208 140.459 84.2168 140.459 93.5894 131.087L143.794 80.8822" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
  </svg>
);

// eslint-disable-next-line no-unused-vars
const SkillIcon = ({ Icon: IconComponent, name }) => (
  <div className="skill-item-icon-wrapper">
    <IconComponent className="skill-icon" />
    <p className="skill-name">{name}</p>
  </div>
);

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

    { Icon: SiRedux, name: "Redux", disabled: true },
    { Icon: SiNodedotjs, name: "Node.js" },
    { Icon: FaBootstrap, name: "Bootstrap" },
    { Icon: FaSass, name: "Sass", disabled: true },
  ],
  "Databases & Backend": [
    { Icon: DiPostgresql, name: "PostgreSQL" },
    { Icon: DiMongodb, name: "MongoDB" },
  ],

  "AI & Automation": [
    { Icon: Ollama, name: "Ollama" },
    { Icon: McpIcon, name: "MCP" },
    { Icon: SiN8N, name: "n8n" },
  ],

  "DevOps & Environments": [
    { Icon: SiDocker, name: "Docker" },
    { Icon: FaLinux, name: "Linux" },
    { Icon: FaWindows, name: "Windows" },
  ],
  "Tools & Services": [
    { Icon: DiGit, name: "Git" },
    { Icon: TbBrandVscode, name: "VS Code" },
  ],
};

const About = () => {
  const { t } = useTranslation();

  useScrollReveal(".profile-section, .detailed-bio", {
    origin: "left",
    distance: "60px",
    duration: 1000,
    delay: 300,
    interval: 100,
  });

  useScrollReveal(".tech-stack-section h3", {
    origin: "bottom",
    distance: "50px",
    duration: 800,
    delay: 800,
  });

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
        <div className="profile-section">
          <img
            src={ProfileImage}
            alt="Foto de perfil de Camilo Ruas"
            className="profile-photo"
          />
          <div className="bio-summary">
            <h2 className="quem-sou-eu">
              <span className="giant-hello">{t("about.greeting")}</span>
              <Trans
                i18nKey="about.intro"
                components={[<span className="highlight-name" />]}
              />
            </h2>
            <h3>
              <Trans
                i18nKey="about.subtitle"
                components={[<span className="highlight-keyword" />, <span className="highlight-keyword" />]}
              />
            </h3>
            <p className="passion-paragraph">{t("about.passion")}</p>
          </div>
        </div>

        <div className="detailed-bio">
          <h3>{t("about.journeyTitle")}</h3>
          <p>
            <Trans
              i18nKey="about.journey1"
              components={[<span />, <span className="highlight-keyword" />, <span className="highlight-keyword" />]}
            />
          </p>

          <p>
            <Trans
              i18nKey="about.journey2"
              components={[<span className="negrito" />, <span className="negrito" />]}
            />
          </p>

          <h3>{t("about.goalsTitle")}</h3>
          <p>
            <Trans
              i18nKey="about.goals"
              components={[<span className="negrito" />]}
            />
          </p>
        </div>

        <div className="tech-stack-section">
          <h3>{t("about.skillsTitle")}</h3>

          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div
              className="skills-group"
              key={category}
            >
              <h4>{t(`about.skillsCategories.${category.toLowerCase().replace(/ & /g, "_")}`)}</h4>

              <div className="skills-list">
                {skills
                  .filter((skill) => !skill.disabled)
                  .map((skill, index) => (
                    <SkillIcon
                      key={index}
                      Icon={skill.Icon}
                      name={skill.name}
                    />
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
