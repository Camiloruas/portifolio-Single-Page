// src/components/Header.jsx - OK
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-placeholder" />
        <nav className="main-nav">
          <ul>
            <li>
              {" "}
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/sobre">Sobre</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/projetos">Projetos</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contato">Contato</Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
