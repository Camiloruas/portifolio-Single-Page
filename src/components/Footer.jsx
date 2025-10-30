// src/components/Footer.jsx
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  // Lógica para obter o ano atual dinamicamente
  const currentYear = new Date().getFullYear();

  return <footer className="main-footer">Developed by Camilo Ruas | © {currentYear}</footer>;
};

export default Footer;
