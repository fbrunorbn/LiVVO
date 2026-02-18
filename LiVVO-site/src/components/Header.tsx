import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">

        <div className="nav-left">
          <a href="#motorista">MOTORISTA</a>
          <a href="#passageiro">PASSAGEIRO</a>
          <a href="#empresa">EMPRESA</a>
        </div>

        <div className="nav-logo">
          <img src="/logo.png" alt="LiVVo Logo" />
        </div>

        <div className="nav-right">
          <a href="#sobre">SOBRE NÓS</a>
          <a href="#faq">FAQ</a>
          <a href="#suporte">SUPORTE</a>
        </div>

      </nav>
    </header>
  );
}
