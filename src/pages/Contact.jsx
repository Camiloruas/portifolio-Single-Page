// src/pages/Contact.jsx
import React from "react";
// Importando os ícones que precisamos
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-page">
      <h2>Entre em Contato</h2>

      <div className="contact-container">
        {/* SEÇÃO DE LINKS SOCIAIS E INFORMAÇÕES */}
        <div className="contact-info-container">
          <h3>Vamos nos conectar!</h3>
          <p className="contact-intro">Me encontre nestas plataformas ou me envie uma mensagem direta:</p>

          <ul className="social-links-list">
            <li>
              <a href="https://www.linkedin.com/in/camilo-ruas-3a2a6425/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
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
              {/* NOTA: Alterei para um link WhatsApp padrão, se for apenas telefone/whatsapp, ajuste o href. */}
              <a href="https://wa.me/5579998448030" target="_blank" rel="noopener noreferrer" className="social-link phone">
                <FaWhatsapp className="link-icon" />
                Telefone/WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:miloruas@gmail.com" className="social-link email">
                <FaEnvelope className="link-icon" />
                Enviar Email
              </a>
            </li>
          </ul>

          <p className="contact-footer-note">Estou sempre aberto a novas oportunidades e colaborações.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
