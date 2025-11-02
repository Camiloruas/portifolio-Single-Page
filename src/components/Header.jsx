// src/components/Header.jsx - OK
import { useState } from "react"; // 1. Importa useState
import { Link, useLocation } from "react-router-dom"; // 2. Importa useLocation para destacar a rota atual
import { FaBars, FaTimes } from "react-icons/fa"; // 3. Importa ícones de Hambúrguer (Aberto/Fechado)
import { useTranslation } from 'react-i18next';
import "../styles/Header.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-placeholder" />

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`main-nav ${isMenuOpen ? "mobile-open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu} className={location.pathname === "/" ? "active" : ""}>
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link to="/sobre" onClick={closeMenu} className={location.pathname === "/sobre" ? "active" : ""}>
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link to="/projetos" onClick={closeMenu} className={location.pathname === "/projetos" ? "active" : ""}>
                {t('nav.projects')}
              </Link>
            </li>
            <li>
              <Link to="/contato" onClick={closeMenu} className={location.pathname === "/contato" ? "active" : ""}>
                {t('nav.contact')}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="language-switcher">
          <button onClick={() => changeLanguage('pt')}>PT</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
