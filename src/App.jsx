// src/App.jsx
import { Routes, Route } from "react-router-dom";

// Componentes de Layout
import Header from "./components/Header";

// Importações das Páginas (Caminhos Corrigidos)
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"; // Nome corrigido para Projects
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} /> {/* Use Projects no elemento */}
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<h2>Página não encontrada!</h2>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
