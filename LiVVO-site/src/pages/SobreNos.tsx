import "./SobreNos.css";
import fundadores from "../assets/Logo-casal-livvo.jpeg";

export default function Sobre() {
  return (
    <main className="sobre">

      <section className="sobre-section">

        {/* LADO ESQUERDO - IMAGEM */}
        <div className="sobre-image">
          <img src={fundadores} alt="Fundadores LiVVo" />
        </div>

        {/* LADO DIREITO - TEXTO */}
        <div className="sobre-content">

          <h1>O que acreditamos</h1>

          <p>
            Toda grande mudança começa com uma inquietação.
            A LiVVo nasceu em Limoeiro do Norte – CE, no coração do Vale do Jaguaribe,
            quando percebemos que as cidades do interior também mereciam tecnologia
            de ponta, mobilidade eficiente e oportunidades reais de crescimento.
          </p>

          <p>
            Enquanto os grandes aplicativos focavam apenas nas capitais,
            nós escolhemos olhar para onde quase ninguém estava olhando.
            Começamos com visão, coragem e propósito.
          </p>

          <p>
            A ideia era simples: criar um aplicativo de transporte urbano
            que conectasse pessoas, gerasse renda para motoristas e fortalecesse
            a economia local. Mas o impacto foi muito maior do que imaginávamos.
          </p>

          <p>
            Cada corrida realizada não é apenas um trajeto.
            É alguém indo trabalhar.
            É uma mãe buscando o filho na escola.
            É um empreendedor chegando ao seu negócio.
            É um motorista transformando horas dirigindo em sustento,
            dignidade e crescimento.
          </p>

          <p>
            A LiVVo cresceu.
            Chegou a Russas, Morada Nova e segue expandindo para novas cidades como Quixadá.
            Mas nossa essência continua a mesma: proximidade, responsabilidade e compromisso
            com quem vive a cidade todos os dias.
          </p>

          <p>
            Somos tecnologia com identidade local.
            Somos mobilidade com propósito.
            Somos feitos por pessoas que acreditam que o interior pode — e deve —
            liderar seu próprio desenvolvimento.
          </p>

          <p>
            A nossa visão é clara:
            Levar a LiVVo para o maior número possível de cidades do Ceará,
            conectando pessoas, oportunidades e histórias.
          </p>

          <p className="sobre-highlight">
            Porque mobilidade não é apenas transporte.
            É movimento.
            É progresso.
            É futuro.
            E estamos só começando. 🚀
          </p>

        </div>

      </section>

    </main>
  );
}