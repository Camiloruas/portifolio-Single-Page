import { useTranslation, Trans } from "react-i18next";
import useScrollReveal from "../hooks/useScrollReveal";
import "../styles/About.css";

import { DiReact, DiJavascript1, DiHtml5, DiCss3, DiGit, DiNodejs, DiPostgresql, DiMongodb } from "react-icons/di";

import { FaSass, FaBootstrap, FaWindows, FaLinux } from "react-icons/fa"; // 🚨 REMOVIDO FaRobot

import { SiNextdotjs, SiTypescript, SiNodedotjs, SiRedux, SiDocker, SiN8N } from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";
import { Ollama } from "@lobehub/icons";

import ProfileImage from "../assets/project-images/profile.jpg";

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
