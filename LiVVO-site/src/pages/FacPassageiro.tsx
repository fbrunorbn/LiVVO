import { Collapse } from "antd";

const { Panel } = Collapse;

export default function FacPassageiro() {
  return (
    <div style={{ padding: "120px 10%", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "40px" }}>FAC – CLIENTE</h1>

      <Collapse accordion>

        <Panel header="Como baixar o app da Livvo?" key="1">
          <p>
            Baixe o aplicativo na Google Play ou na App Store.
            (Inserir links oficiais aqui)
          </p>
        </Panel>

        <Panel header="Como faço meu cadastro pelo aplicativo?" key="2">
          <p>
            1. Baixe o app na Play Store ou Apple Store.<br/>
            2. Clique em “Começar”.<br/>
            3. Informe telefone, e-mail válido ou use Facebook.<br/>
            4. Preencha Nome, CPF, Telefone e crie uma senha.<br/>
            5. Aceite os Termos de Uso.<br/>
            6. Permita a localização.<br/>
            7. Selecione a cidade mais próxima.
          </p>
        </Panel>

        <Panel header="Como solicito uma corrida?" key="3">
          <p>
            1. Abra o app.<br/>
            2. Clique em “Buscar destino”.<br/>
            3. Deixe o app localizar você.<br/>
            4. Insira o destino.<br/>
            5. Confirme e escolha a forma de pagamento.
          </p>
        </Panel>

        <Panel header="O que significa 'Não há motoristas por perto'?" key="4">
          <p>
            Significa que, naquele momento, não há motoristas disponíveis
            dentro dos critérios de despacho da sua região.
          </p>
        </Panel>

        <Panel header="Posso alterar o destino ou acrescentar parada?" key="5">
          <p>
            Sim. Arraste as informações da corrida para cima e clique em “Alterar”.
            O valor pode sofrer alteração.
          </p>
        </Panel>

        <Panel header="Como compartilhar uma corrida?" key="6">
          <p>
            Ao solicitar a corrida, clique em “Compartilhar corrida”
            e envie o link via WhatsApp para acompanhar em tempo real.
          </p>
        </Panel>

        <Panel header="Quais são as formas de pagamento?" key="7">
          <p>
            Pix, crédito, débito, dinheiro, cartão no app e saldo.
          </p>
        </Panel>

        <Panel header="Como solicitar um recibo?" key="8">
          <p>
            O recibo é enviado automaticamente para seu e-mail.
            Verifique se ele está correto em “Meus dados”.
          </p>
        </Panel>

        <Panel header="Como recuperar minha senha?" key="9">
          <p>
            Clique em “Esqueci minha senha”, informe seu e-mail
            e siga as instruções enviadas.
          </p>
        </Panel>

        <Panel header="Esqueci um item na corrida. O que fazer?" key="10">
          <p>
            Reporte no aplicativo e entre em contato com o suporte.
            Pode haver cobrança para devolução.
          </p>
        </Panel>

        <Panel header="Posso bloquear um motorista?" key="11">
          <p>
            Sim. Avaliando com nota 1 ao final da corrida,
            o motorista será bloqueado para você.
          </p>
        </Panel>

        <Panel header="Fui ameaçada ou passei por situação constrangedora. O que fazer?" key="12">
          <p>
            Entre em contato com o suporte pelo app informando os detalhes
            da corrida. Investigaremos e tomaremos as medidas cabíveis.
          </p>
        </Panel>

      </Collapse>
    </div>
  );
}