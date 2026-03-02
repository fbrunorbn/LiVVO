import { Collapse } from "antd";
import "./Fac.css";

const items = [
  {
    key: "1",
    label: "Como faço para me cadastrar como motorista na Livvo?",
    children: (
      <p>
        Baixe o aplicativo Livvo Motorista disponível na Google Play e faça seu cadastro online preenchendo todas as informações solicitadas.
      </p>
    ),
  },
  {
    key: "2",
    label: "Não achei o link na Apple Store, o que fazer?",
    children: <p>O aplicativo de motorista só está disponível para Android.</p>,
  },
  {
    key: "3",
    label: "Quais os requisitos mínimos do veículo?",
    children: (
      <p>
        <strong>Carro:</strong> a partir de 2013, 4 portas, ar-condicionado e documentação em dia.
        <br />
        <strong>Moto:</strong> a partir de 2013, documentação em dia + capacete extra.
      </p>
    ),
  },
  {
    key: "4",
    label: "Quais são as taxas do app?",
    children: <p>20%, com o máximo de taxa cobrada de R$10,00.</p>,
  },
  {
    key: "5",
    label: "Qual é o limite que posso ficar negativo no app?",
    children: (
      <p>
        O valor máximo que você pode ficar negativo é -R$10,00.
        Caso ultrapasse esse valor, você fica impossibilitado de receber corridas com pagamento presencial.
      </p>
    ),
  },
  {
    key: "6",
    label: "Como faço recarga na carteira?",
    children: (
      <p>
        Clique no seu saldo → Carteira → Adicionar → Coloque o valor desejado →
        Pague o código gerado via PIX no seu banco.
      </p>
    ),
  },
  {
    key: "7",
    label: "Como faço saque na carteira?",
    children: (
      <p>
        Clique no seu saldo → Carteira → Retirar → Coloque o valor desejado →
        Aguarde a liberação. O valor cai na sua conta cadastrada.
      </p>
    ),
  },
  {
    key: "8",
    label: "Existe horário obrigatório para dirigir?",
    children: <p>Não. Você é livre para fazer seus próprios horários.</p>,
  },
  {
    key: "9",
    label: "Passageiro esqueceu objeto no meu carro. O que fazer?",
    children: (
      <p>
        Entre em contato conosco com a identificação do cliente ou a OS.
        Você pode cobrar o valor de uma corrida para realizar a devolução.
      </p>
    ),
  },
  {
    key: "10",
    label: "Posso trabalhar em outras plataformas?",
    children: <p>Sim, você pode trabalhar em outras plataformas.</p>,
  },
  {
    key: "11",
    label: "Como funcionam os bloqueios?",
    children: (
      <p>
        Os perfis podem ser analisados conforme nossos Termos de Uso.
        Irregularidades podem gerar bloqueio ou suspensão.
      </p>
    ),
  },
  {
    key: "12",
    label: "Posso cobrar valor extra do cliente?",
    children: <p>Não. Cobre apenas o valor informado pelo aplicativo.</p>,
  },
];

export default function FacMotorista() {
  return (
    <div className="fac-container">
      <h1>FAC – MOTORISTA</h1>

      <Collapse
        accordion
        ghost
        expandIconPosition="end"
        items={items}
      />
    </div>
  );
}