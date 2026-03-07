import { useEffect } from "react";
import "./Home.css";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import googlePlay from "../assets/logo-google-play.png";
import appStore from "../assets/logo-App-store.png";
import heroImage from "../assets/logo-segurando-celular-app-fundo-laranja.png";
import ilustracao from "../assets/Ilutracao_home.png";
import pin from "../assets/Logo-Pin.png";
import usuario from "../assets/Logo-usuario.png";
import carro from "../assets/Imagem-carro-motorista.jpeg";
import whats from "../assets/logo-whats.png";
import redevaleDesktop from "../assets/Logo-redevale.png";
import redevaleMobile from "../assets/Logo-redevale-mobile.png";

export default function Home() {

  useEffect(() => {
    const section = document.querySelector(".stats");

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {

        const counters = document.querySelectorAll(".counter");

        counters.forEach(counter => {
          const target = Number(counter.getAttribute("data-target"));
          let current = 0;

          const updateCounter = () => {
            const increment = target / 100;

            if (current < target) {
              current += increment;
              counter.textContent = Math.ceil(current).toString();
              setTimeout(updateCounter, 20);
            } else {
              counter.textContent = target.toString();
            }
          };

          updateCounter();
        });

        observer.disconnect();
      }
    }, { threshold: 0.4 });

    if (section) observer.observe(section);

  }, []);

  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">

        <div className="hero-image">
          <img src={ilustracao} alt="Mulher usando aplicativo" />
        </div>

        <div className="hero-content">
          <h1>
            Na LiVVo, você chama, acompanha e transforma sua cidade
          </h1>

          <p style={{ fontSize: "18px" }}>
            Mobilidade, entregas e geração de renda com quem é da sua região.
          </p>

          <Button
            href="#motorista"
            size="large"
            type="default"
            className="hero-btn"
            icon={
              <span className="hero-btn-icon">
                <ArrowRightOutlined />
              </span>
            }
          >
            Quero ser Motorista
          </Button>
        </div>

      </section>


      {/* ===== SEÇÃO DOS NÚMEROS ===== */}
      <section className="stats">

        {/* ESQUERDA */}
        <div className="stats-left">
          <h2>
            A MOBILIDADE <br />
            QUE ESTÁ TRANSFORMANDO <br />
            O VALE DO <br /> <span>JAGUARIBE</span>
          </h2>

          <p className="hashtag">#VÁDELIVVO</p>
        </div>

        {/* CENTRO */}
        <div className="stats-center">
          <div className="hexagon">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={redevaleMobile}
              />
              <img
                src={redevaleDesktop}
                alt="Rede Vale"
              />
            </picture>
          </div>
        </div>

        {/* DIREITA */}
        <div className="stats-right">

          <div className="stat-item">
            <img src={usuario} alt="Usuários" />
            <div>
              <h3>
                <span className="counter" data-target="15">0</span>
              </h3>
              <p>Mil Usuários</p>
            </div>
          </div>

          <div className="stat-item">
            <img src={pin} alt="Cidades" />
            <div>
              <h3>
                <span className="counter" data-target="33">0</span>
                % das cidades
              </h3>
              <p>do Vale usam LiVVo</p>
            </div>
          </div>

        </div>

      </section>

      <section className="motorista" id="motorista">
        <div className="motorista-card">

          <div className="motorista-icon">
            🚗
          </div>

          <h2>
            <span className="branco">SEJA MOTORISTA</span><br/>
            <span className="laranja">E DIRIJA COM A LIVVO!</span>
          </h2>

          <a
            href="https://play.google.com/store/apps/details?id=br.com.apps88.taxi.drivermachine"
            target="_blank"
            rel="noopener noreferrer"
            className="motorista-btn"
          >
            ↓ BAIXE NOSSO APLICATIVO <br/>
            E FAÇA SEU CADASTRO
          </a>

          <p>
            Venha ganhar <strong>dinheiro com flexibilidade</strong> 
            e fazer parte do nosso time
          </p>

        </div>

      </section>

        {/* ===== SEÇÃO APP ===== */}

        <section className="app-section" id="passageiro">

        {/* LADO ESQUERDO */}
        <div className="app-image-wrapper">
            <div className="app-image-box">
            <img src={heroImage} alt="Pessoa usando app LiVVo" />
            </div>
        </div>

        {/* LADO DIREITO */}
        <div className="app-content">

            <h2>
            Vá além, sem limites.<br />
            Vá de LiVVo!
            </h2>

            <p>
            Movimente-se pela cidade com rapidez, segurança e economia.
            Do trabalho para casa, do centro ao bairro,
            a LiVVo conecta você todos os dias.
            </p>

            <p className="download-text">
            Baixe agora na Google Play ou App Store.
            </p>

            <div className="store-buttons">
              <a
                href="https://play.google.com/store/search?q=Livvo%20passageiro&c=apps&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={googlePlay} alt="Google Play" />
              </a>
              
              <a
                href="https://apps.apple.com/br/app/livvo-passageiro/id6739433092"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="appStore" src={appStore} alt="App Store" />
              </a>
            </div>

        </div>

        </section>

        {/* ===== SEÇÃO EMPRESA ===== */}

        <section className="empresa-section" id="empresa">

        <div className="empresa-overlay">

            <div className="empresa-content">

            {/* TEXTO ESQUERDA */}
            <h2>
                Sua empresa precisa de serviços de transporte?
            </h2>

            {/* BOTÃO DIREITA */}
            <a
              href="https://wa.me/558882293431"
              target="_blank"
              rel="noopener noreferrer"
              className="empresa-btn"
            >
              Entre em contato
              <img src={whats} alt="WhatsApp" />
            </a>

            </div>

        </div>

        </section>

    </main>
  );
}