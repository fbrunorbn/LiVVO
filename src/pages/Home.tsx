import { useEffect } from "react";
import "./Home.css";
import googlePlay from "../assets/logo-google-play.png";
import appStore from "../assets/logo-App-store.png";
import heroImage from "../assets/logo-segurando-celular-app-fundo-laranja.png";
import ilustracao from "../assets/Hero.png";
import pin from "../assets/Logo-Pin.png";
import usuario from "../assets/Logo-usuario.png";
import volante from "../assets/Volante.png";
import whats from "../assets/logo-whats.png";
import redevaleDesktop from "../assets/Logo-redevale.png";
import redevaleMobile from "../assets/Logo-redevale-mobile.png";
import setaBaixo from "../assets/SetaBaixo.png";

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
            A forma mais simples de pedir corridas na sua cidade
          </h1>

          <p className="hero-subtitle">
            Com a LiVVo você solicita corridas, acompanha em tempo real
            e conecta motoristas e passageiros da sua região.
          </p>

          <p className="hero-download-text">
            Baixe o aplicativo gratuitamente
          </p>

          <div className="hero-download-buttons">

            <a
              href="https://play.google.com/store/search?q=Livvo%20passageiro&c=apps&hl=pt_BR"
              target="_blank"
              className="download-btn android"
            >
              Baixar no Android
            </a>

            <a
              href="https://apps.apple.com/br/app/livvo-passageiro/id6739433092"
              target="_blank"
              className="download-btn ios"
            >
              Baixar no iPhone
            </a>

          </div>

        </div>

      </section>


      {/* ===== SEÇÃO DOS NÚMEROS ===== */}
      <section className="stats">

        {/* ESQUERDA */}
        <div className="stats-left">
          <h2>
            A MOBILIDADE <br />
            QUE TRANSFORMOU <br />
            O VALE DO <span>JAGUARIBE</span> <br />
            EM <span>EXPANSÃO</span>
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
                <span>+</span>
                <span className="counter" data-target="16" style={{ fontSize: "32px", fontFamily: "'Chau Philomene One', sans-serif" }}>0</span>
              </h3>
              <p>Mil Usuários</p>
            </div>
          </div>

          <div className="stat-item">
            <img src={pin} alt="Cidades" />
            <div>
              <h3>
                <span className="counter" data-target="5" style={{ fontSize: "32px", fontFamily: "'Chau Philomene One', sans-serif" }}>0</span>
              </h3>
              <p>Cidades do Vale<br/>do Jaguaribe</p>
            </div>
          </div>

        </div>

      </section>

      {/* ===== SEÇÃO MOTORISTA ===== */}

      <section className="motorista" id="motorista">
        <div className="motorista-card">

          <div className="volante-icon">
            <img src={volante} alt="Volante" />
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
            <img src={setaBaixo} alt="SetaParaBaixo" />
            BAIXE NOSSO APLICATIVO <br/>
            E FAÇA SEU CADASTRO
          </a>

          <p>
            Venha ganhar <strong>dinheiro com flexibilidade</strong> <br /> 
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

                    {/* TÍTULO PRINCIPAL */}
                    <h2>
                        Sua empresa precisa de serviços de transporte?
                    </h2>

                    {/* BOTÃO PRINCIPAL (WHATSAPP) NO CENTRO */}
                    <a
                        href="https://wa.me/558882293431"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="empresa-btn-whats"
                    >
                        Fale com um Especialista
                        <img src={whats} alt="WhatsApp" /> {/* Use sua imagem 'whats' existente */}
                    </a>

                    {/* LINHA DE CONTATOS SECUNDÁRIOS */}
                    <div className="empresa-contatos-row">
                        <a href="tel:+558882293431" className="contato-item-btn purple-btn">
                            {/* Substitua por um ícone de telefone se tiver */}
                            <span className="icon">📞</span> 
                            Ligue para nós: +55 (88) 8229-3431
                        </a>
                        
                        <a href="mailto:livvocar@gmail.com" className="contato-item-btn purple-btn">
                            {/* Substitua por um ícone de email se tiver */}
                            <span className="icon">✉️</span> 
                            Peça Cotação: Livvocar@gmail.com
                        </a>
                    </div>


                    {/* CAIXA BRANCA: POR QUE NOS ESCOLHER? */}
                    <div className="por-que-caixa">
                        <h3>Por que nos escolher?</h3>
                        
                        <ul className="por-que-lista">
                            <li>
                                <span className="icon">🛡️</span> 
                                <div>
                                    <strong>Segurança para Cargas e Passageiros</strong>
                                    <p>Prioridade absoluta para seus colaboradores e mercadorias.</p>
                                </div>
                            </li>
                            <li>
                                <span className="icon">🚖</span> 
                                <div>
                                    <strong>Opções Diversas: Táxi e Mototáxi</strong>
                                    <p>Flexibilidade para todas as necessidades corporativas.</p>
                                </div>
                            </li>
                            <li>
                                <span className="icon">⏱️</span> 
                                <div>
                                    <strong>Pontualidade e Eficiência</strong>
                                    <p>Garantia de que seu negócio não pare.</p>
                                </div>
                            </li>
                            <li>
                                <span className="icon">📋</span> 
                                <div>
                                    <strong>Transparência e Controle</strong>
                                    <p>Relatórios detalhados para controle de custos.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

        </section>

    </main>
  );
}