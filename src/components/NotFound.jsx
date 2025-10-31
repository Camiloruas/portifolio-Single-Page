import React from "react";
import { Link } from "react-router-dom";
import { FaRegSadTear } from "react-icons/fa"; // Ícone de carinha triste
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found-page">
      <div className="not-found-content">
        <FaRegSadTear className="not-found-icon" />
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Ops! Não encontramos a página que você está procurando.</p>
        <Link to="/" className="btn-base btn-primary not-found-link">
          Voltar para a Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
