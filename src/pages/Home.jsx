import React from "react";
import useScrollReveal from "../hooks/useScrollReveal"; // 🚨 IMPORTADO
import "../styles/Home.css";

const Home = () => {
  useScrollReveal(".home-name-1", {
    origin: "top",
    distance: "60px",
    duration: 1200,
    delay: 200,
  });
  useScrollReveal(".home-name-2", {
    origin: "bottom",
    distance: "60px",
    duration: 1200,
    delay: 500,
  });
  useScrollReveal(".habilidades", {
    origin: "left",
    distance: "30px",
    duration: 900,
    delay: 1000,
  });

  return (
    <section className="home-page">
      <p className="home-name-1">Camilo</p>
      <p className="home-name-2">Ruas</p>
      <p className="habilidades">Desenvolvedor Full Stack</p>
    </section>
  );
};

export default Home;
