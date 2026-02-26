import './Suporte.css';
import whats from "../assets/Ilustracao-whats.png"
export default function Suporte() {
  return (
    <main className="suporte">
      <div className="suporte-container">

        {/* ESQUERDA - IMAGEM */}
        <div className="suporte-image">
          <img src={whats} alt="WhatsApp Ilustração" />
        </div>

        {/* DIREITA - TEXTO */}
        <div className="suporte-content">
          <h2>ATENDIMENTO</h2>
          <p>VIA WHATSAPP</p>

          <div className="suporte-buttons">
            <a href="#" className="suporte-btn">Clique aqui - Atendimento 1</a>
            <a href="#" className="suporte-btn">Clique aqui - Atendimento 2</a>
          </div>
        </div>

      </div>
    </main>
  );
}