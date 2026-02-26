import { Collapse } from "antd";
import "./Fac.css";

const items = [
  {
    key: "1",
    label: "Como baixar o app da Livvo?",
    children: (
      <p>
        Baixe o aplicativo na Google Play ou na App Store.
        (Inserir links oficiais aqui)
      </p>
    ),
  },
  {
    key: "2",
    label: "Como faço meu cadastro pelo aplicativo?",
    children: (
      <p>
        1. Baixe o app na Play Store ou Apple Store.<br />
        2. Clique em “Começar”.<br />
        3. Informe telefone, e-mail válido ou use Facebook.<br />
        4. Preencha Nome, CPF, Telefone e crie uma senha.<br />
        5. Aceite os Termos de Uso.<br />
        6. Permita a localização.<br />
        7. Selecione a cidade mais próxima.
      </p>
    ),
  },
  {
    key: "3",
    label: "Como solicito uma corrida?",
    children: (
      <p>
        1. Abra o app.<br />
        2. Clique em “Buscar destino”.<br />
        3. Deixe o app localizar você.<br />
        4. Insira o destino.<br />
        5. Confirme e escolha a forma de pagamento.
      </p>
    ),
  },
  {
    key: "4",
    label: "O que significa 'Não há motoristas por perto'?",
    children: (
      <p>
        Significa que, naquele momento, não há motoristas disponíveis
        dentro dos critérios de despacho da sua região.
      </p>
    ),
  },
  {
    key: "5",
    label: "Posso alterar o destino ou acrescentar parada?",
    children: (
      <p>
        Sim. Arraste as informações da corrida para cima e clique em “Alterar”.
        O valor pode sofrer alteração.
      </p>
    ),
  },
  {
    key: "6",
    label: "Como compartilhar uma corrida?",
    children: (
      <p>
        Ao solicitar a corrida, clique em “Compartilhar corrida”
        e envie o link via WhatsApp para acompanhar em tempo real.
      </p>
    ),
  },
  {
    key: "7",
    label: "Quais são as formas de pagamento?",
    children: (
      <p>
        Pix, crédito, débito, dinheiro, cartão no app e saldo.
      </p>
    ),
  },
  {
    key: "8",
    label: "Como solicitar um recibo?",
    children: (
      <p>
        O recibo é enviado automaticamente para seu e-mail.
        Verifique se ele está correto em “Meus dados”.
      </p>
    ),
  },
  {
    key: "9",
    label: "Como recuperar minha senha?",
    children: (
      <p>
        Clique em “Esqueci minha senha”, informe seu e-mail
        e siga as instruções enviadas.
      </p>
    ),
  },
  {
    key: "10",
    label: "Esqueci um item na corrida. O que fazer?",
    children: (
      <p>
        Reporte no aplicativo e entre em contato com o suporte.
        Pode haver cobrança para devolução.
      </p>
    ),
  },
  {
    key: "11",
    label: "Posso bloquear um motorista?",
    children: (
      <p>
        Sim. Avaliando com nota 1 ao final da corrida,
        o motorista será bloqueado para você.
      </p>
    ),
  },
  {
    key: "12",
    label: "Fui ameaçada ou passei por situação constrangedora. O que fazer?",
    children: (
      <p>
        Entre em contato com o suporte pelo app informando os detalhes
        da corrida. Investigaremos e tomaremos as medidas cabíveis.
      </p>
    ),
  },
];

export default function FacPassageiro() {
  return (
    <div className="fac-container">
      <h1>FAC – CLIENTE</h1>

      <Collapse
        accordion
        ghost
        expandIconPosition="end"
        items={items}
      />
    </div>
  );
}