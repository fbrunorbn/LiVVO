import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">

        {/* ESQUERDA DESKTOP */}
        <div className="nav-left">
          <a href="/#motorista">MOTORISTA</a>
          <a href="/#passageiro">PASSAGEIRO</a>
          <a href="/#empresa">EMPRESA</a>
        </div>

        {/* LOGO */}
        <Link to="/" className="logo">
          <img src={logo} alt="Livvo Logo" />
        </Link>

        {/* DIREITA DESKTOP */}
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

        {/* BOTÃO HAMBURGUER (MOBILE) */}
        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>

      {/* OVERLAY */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
      {/* MENU MOBILE */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="/#motorista" onClick={() => setMenuOpen(false)}>MOTORISTA</a>
        <a href="/#passageiro" onClick={() => setMenuOpen(false)}>PASSAGEIRO</a>
        <a href="/#empresa" onClick={() => setMenuOpen(false)}>EMPRESA</a>

        <Link to="/sobre" onClick={() => setMenuOpen(false)}>SOBRE NÓS</Link>
        <Link to="/fac/motorista" onClick={() => setMenuOpen(false)}>FAC – Motorista</Link>
        <Link to="/fac/passageiro" onClick={() => setMenuOpen(false)}>FAC – Passageiro</Link>
        <Link to="/fac/termo-motorista" onClick={() => setMenuOpen(false)}>Termos de Uso - Motorista</Link>
        <Link to="/fac/termo-passageiro" onClick={() => setMenuOpen(false)}>Termos de Uso - Passageiro</Link>
        <Link to="/suporte" onClick={() => setMenuOpen(false)}>SUPORTE</Link>
      </div>

    </header>
  );
}