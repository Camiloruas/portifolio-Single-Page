// src/pages/Contact.jsx
import React from "react"; // Não precisamos mais do useState
import "../styles/Contact.css"; // Vamos criar este estilo no próximo passo

// 🚨 NOTA SOBRE ÍCONES:
// Para usar ícones bonitos (como do Font Awesome, React Icons, etc.),
// você precisará instalar a biblioteca (ex: npm install react-icons)
// e importá-los aqui, substituindo os textos dos links.

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
              <a href="https://linkedin.com/in/camiloruas" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                {/* 🔗 Substitua este texto pelo ícone do LinkedIn */}
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/camiloruas" target="_blank" rel="noopener noreferrer" className="social-link github">
                {/* 🐙 Substitua este texto pelo ícone do GitHub */}
                GitHub
              </a>
            </li>
            <li>
              <a href="tel:+5511999999999" className="social-link phone">
                {/* 📞 Substitua este texto pelo ícone de Telefone/WhatsApp */}
                Telefone/WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:seu.email@exemplo.com" className="social-link email">
                {/* 📧 Substitua este texto pelo ícone de Email */}
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
