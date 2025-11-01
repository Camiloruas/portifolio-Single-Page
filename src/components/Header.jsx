// src/components/Header.jsx - OK
import { useState } from "react"; // 1. Importa useState
import { Link, useLocation } from "react-router-dom"; // 2. Importa useLocation para destacar a rota atual
import { FaBars, FaTimes } from "react-icons/fa"; // 3. Importa ícones de Hambúrguer (Aberto/Fechado)
import "../styles/Header.css";

const Header = () => {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu ao clicar em um link (apenas no mobile)
  const closeMenu = () => {
    // Garantimos que o menu só feche se estiver aberto
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-placeholder" />

        {/* BOTÃO DE HAMBÚRGUER: Visível apenas no Mobile (CSS) */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {/* Exibe X se aberto, ou barras se fechado */}
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* A classe 'mobile-open' será usada no CSS para exibir o menu 
            horizontal, transformando-o em um menu lateral no mobile.
        */}
        <nav className={`main-nav ${isMenuOpen ? "mobile-open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu} className={location.pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/sobre" onClick={closeMenu} className={location.pathname === "/sobre" ? "active" : ""}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/projetos" onClick={closeMenu} className={location.pathname === "/projetos" ? "active" : ""}>
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/contato" onClick={closeMenu} className={location.pathname === "/contato" ? "active" : ""}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
