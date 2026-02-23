import { Collapse } from "antd";

const { Panel } = Collapse;

export default function FacMotorista() {
  return (
    <div style={{ padding: "120px 10%", maxWidth: "900px", margin: "0 auto" }}>
      
      <h1 style={{ marginBottom: "40px" }}>FAC MOTORISTA</h1>

      <Collapse accordion>

        <Panel header="Como faço para me cadastrar como motorista na Livvo?" key="1">
          <p>
            Baixe o aplicativo Livvo Motorista disponível na Google Play e faça seu cadastro online preenchendo todas as informações solicitadas.
          </p>
        </Panel>

        <Panel header="Não achei o link na Apple Store, o que fazer?" key="2">
          <p>O aplicativo de motorista só está disponível para Android.</p>
        </Panel>

        <Panel header="Quais os requisitos mínimos do veículo?" key="3">
          <p>
            <strong>Carro:</strong> a partir de 2013, 4 portas, ar-condicionado e documentação em dia.<br/>
            <strong>Moto:</strong> a partir de 2013, documentação em dia + capacete extra.
          </p>
        </Panel>

        <Panel header="Quais são as taxas do app?" key="4">
          <p>20%, com o máximo de taxa cobrada de R$10,00.</p>
        </Panel>

        <Panel header="Qual é o limite que posso ficar negativo no app?" key="5">
          <p>
            O valor máximo que você pode ficar negativo é -R$10,00.
            Caso ultrapasse esse valor, você fica impossibilitado de receber
            corridas com pagamento presencial.
          </p>
        </Panel>

        <Panel header="Como faço recarga na carteira?" key="6">
          <p>
            Clique no seu saldo → Carteira → Adicionar → Coloque o valor desejado →
            Pague o código gerado via PIX no seu banco.
          </p>
        </Panel>

        <Panel header="Como faço saque na carteira?" key="7">
          <p>
            Clique no seu saldo → Carteira → Retirar → Coloque o valor desejado →
            Aguarde a liberação. O valor cai na sua conta cadastrada.
          </p>
        </Panel>

        <Panel header="Existe horário obrigatório para dirigir?" key="8">
          <p>Não. Você é livre para fazer seus próprios horários.</p>
        </Panel>

        <Panel header="Passageiro esqueceu objeto no meu carro. O que fazer?" key="9">
          <p>
            Entre em contato conosco com a identificação do cliente ou a OS.
            Você pode cobrar o valor de uma corrida para realizar a devolução.
          </p>
        </Panel>

        <Panel header="Posso trabalhar em outras plataformas?" key="10">
          <p>Sim, você pode trabalhar em outras plataformas.</p>
        </Panel>

        <Panel header="Como funcionam os bloqueios?" key="11">
          <p>
            Os perfis podem ser analisados conforme nossos Termos de Uso.
            Irregularidades podem gerar bloqueio ou suspensão.
          </p>
        </Panel>

        <Panel header="Posso cobrar valor extra do cliente?" key="12">
          <p>Não. Cobre apenas o valor informado pelo aplicativo.</p>
        </Panel>

      </Collapse>
    </div>
  );
}