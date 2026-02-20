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

        <div className="logo">
          <img src={logo} alt="Livvo Logo" />
        </div>

        <div className="nav-right">
          <Link to="/sobre">SOBRE NÓS</Link>
          <Link to="/fac/motorista">FAC</Link>
          <Link to="/suporte">SUPORTE</Link>
        </div>

      </nav>
    </header>
  );
}