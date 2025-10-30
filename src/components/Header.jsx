// src/components/Header.jsx
import { Link } from "react-router-dom";
import "../styles/Header.css";
const Header = () => {
  return (
    <header className="main-header">
            <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
          {/* ✅ CORRETO: A rota no App.jsx é '/contato', então usamos a mesma aqui */}
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
