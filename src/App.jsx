// src/App.jsx

// 🚨 IMPORTAÇÃO CORRETA: Removendo o BrowserRouter as Router, pois ele já está em main.jsx
import { Routes, Route } from "react-router-dom";

// Importações dos Componentes Fixos
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";

// Importações das Páginas
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <SocialSidebar /> {/* Adicionado o SocialSidebar aqui para ser fixo */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<h2>Página não encontrada!</h2>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
