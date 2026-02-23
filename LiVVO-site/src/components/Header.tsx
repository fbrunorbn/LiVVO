import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">

        <div className="nav-left">
          <a href="/#motorista">MOTORISTA</a>
          <a href="/#passageiro">PASSAGEIRO</a>
          <a href="/#empresa">EMPRESA</a>
        </div>

        <Link to="/" className="logo">
          <img src={logo} alt="Livvo Logo" />
        </Link>

        <div className="nav-right">
          <Link to="/sobre">SOBRE NÓS</Link>
          <div className="dropdown">
            <span className="dropdown-title">FAC</span>
            <div className="dropdown-menu">
              <Link to="/fac/motorista">FAC – Motorista</Link>
              <Link to="/fac/passageiro">FAC – Passageiro</Link>
              <Link to="/fac/termo-motorista">Termos de Uso - Motorista</Link>
              <Link to="/fac/termo-passageiro">Termos de Uso - Passageiro</Link>
            </div>
          </div>
          <Link to="/suporte">SUPORTE</Link>
        </div>

      </nav>
    </header>
  );
}