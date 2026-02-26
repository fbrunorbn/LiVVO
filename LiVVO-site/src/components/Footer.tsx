import "./Footer.css";
import logo from "../assets/logo.png"; // ajuste nome real

import { FacebookOutlined, InstagramOutlined, YoutubeOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className="footer">

      {/* PARTE SUPERIOR */}
      <div className="footer-top">

        {/* ESQUERDA - LOGO */}
        <div className="footer-logo">
          <img src={logo} alt="LiVVo" />
        </div>

        {/* CENTRO - LINKS */}
        <div className="footer-links">
          <a href="/#motorista">Motorista</a>
          <a href="/#passageiro">Passageiro</a>
          <a href="/#empresa">Empresa</a>
          <a href="/sobre">Sobre Nós</a>
          <a href="/suporte">Suporte</a>
        </div>

        {/* DIREITA - REDES */}
        <div className="footer-social">
          <a href="#"><FacebookOutlined /></a>
          <a href="#"><InstagramOutlined /></a>
        </div>

      </div>

      {/* PARTE INFERIOR */}
      <div className="footer-bottom">
        © 2025 Livvo Car Transporte por Aplicativo LTDA. <br />
        Todos os direitos reservados.
      </div>

    </footer>
  );
}