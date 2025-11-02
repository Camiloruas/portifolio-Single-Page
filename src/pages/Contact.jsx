// src/pages/Contact.jsx
import React from "react";
import { useTranslation } from "react-i18next";
// Importando os ícones que precisamos
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="contact-page">
      <h2>{t("contact.title")}</h2>

      <div className="contact-container">
        {/* SEÇÃO DE LINKS SOCIAIS E INFORMAÇÕES */}
        <div className="contact-info-container">
          <h3>{t("contact.connect")}</h3>
          <p className="contact-intro">{t("contact.findMe")}</p>

          <ul className="social-links-list">
            <li>
              {/* LINKEDIN — tenta abrir o app e, se não conseguir, abre o site */}
              <a
                href="linkedin://in/camilo-ruas-3a2a6425"
                onClick={(e) => {
                  e.preventDefault();
                  if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android)/)) {
                    window.location = "linkedin://in/camilo-ruas-3a2a6425";
                    setTimeout(() => {
                      window.open("https://www.linkedin.com/in/camilo-ruas-3a2a6425", "_blank");
                    }, 500);
                  } else {
                    window.open("https://www.linkedin.com/in/camilo-ruas-3a2a6425", "_blank");
                  }
                }}
                className="social-link linkedin"
              >
                <FaLinkedin className="link-icon" />
                LinkedIn
              </a>
            </li>

            <li>
              <a href="https://github.com/Camiloruas" target="_blank" rel="noopener noreferrer" className="social-link github">
                <FaGithub className="link-icon" />
                GitHub
              </a>
            </li>

            <li>
              {/* Link WhatsApp direto */}
              <a href="https://wa.me/5579998448030" target="_blank" rel="noopener noreferrer" className="social-link phone">
                <FaWhatsapp className="link-icon" />
                {t("contact.phone")}
              </a>
            </li>

            <li>
              <a href="mailto:miloruas@gmail.com" className="social-link email">
                <FaEnvelope className="link-icon" />
                {t("contact.sendEmail")}
              </a>
            </li>
          </ul>

          <p className="contact-footer-note">{t("contact.openToWork")}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
