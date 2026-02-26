import { useEffect } from "react";
import "./Home.css";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import googlePlay from "../assets/logo-google-play.png";
import appStore from "../assets/logo-App-store.png";
import heroImage from "../assets/logo-segurando-celular-app-fundo-laranja.png";
import ilustracao from "../assets/Ilutracao_home.png";
import redevale from "../assets/Logo-redevale.png";
import pin from "../assets/Logo-Pin.png";
import usuario from "../assets/Logo-usuario.png";
import carro from "../assets/Imagem-carro-motorista.jpeg";
import empresaImg from "../assets/logo-empresa-web.png";
import whats from "../assets/logo-whats.png";

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
            style={{
              background: "#d9d9d9",
              color: "black",
              borderRadius: "50px",
              fontSize: "22px",
              fontWeight: "bold",
              padding: "0 24px",
              width: "270px",
            }}
            icon={
              <span
                style={{
                  background: "black",
                  color: "white",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "0px",
                }}
              >
                <ArrowRightOutlined style={{ fontSize: "20px" }} />
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
            <img src={redevale} alt="Rede Vale" />
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
            <h3>
                <span className="counter" data-target="33">0</span>
                % das cidades
            </h3>
            <p>do Vale usam LiVVo</p>
          </div>

        </div>

      </section>

      {/* ===== SEÇÃO MOTORISTA ===== */}

        <section className="motorista" id="motorista">

        {/* LADO ESQUERDO */}
        <div className="motorista-content">

            <h2>
            Seja um de nossos motoristas e venha lucrar com a gente!
            </h2>

            <p>
            Baixe o aplicativo da Livvo e junte-se a milhares de 
            motoristas que mudaram sua vida financeira!
            </p>

            <img 
            src={googlePlay} 
            alt="Disponível no Google Play" 
            className="google-play-btn"
            />

        </div>

        {/* LADO DIREITO */}
        <div className="motorista-image">
            <img src={carro} alt="Carro Livvo" />
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
            <img src={googlePlay} alt="Google Play" />
            <img className="appStore" src={appStore} alt="App Store" />
            </div>

        </div>

        </section>

        {/* ===== SEÇÃO EMPRESA ===== */}

        <section 
        className="empresa-section" id="empresa"
        style={{ backgroundImage: `url(${empresaImg})` }}
        >

        <div className="empresa-overlay">

            <div className="empresa-content">

            {/* TEXTO ESQUERDA */}
            <h2>
                Sua empresa precisa de serviços de transporte?
            </h2>

            {/* BOTÃO DIREITA */}
            <a href="#" className="empresa-btn">
                Entre em contato
                <img src={whats} alt="WhatsApp" />
            </a>

            </div>

        </div>

        </section>

    </main>
  );
}