import React from "react";
import InfoButton from "../../button/InfoButton";
import ModalPessoa from "../../modal/cadastro/ModalPessoa";
import TituloBox from "./TituloBox";

interface IConsumidorDetalheHome {
  caixa_status: string;
}

export class ConsumidorDetalheHome extends React.Component<IConsumidorDetalheHome, {}> {
  state = {
    showModalPessoa: false,
    clientSelected: {} as any
  }

  render() {
    return (
      <>
        <TituloBox label={this.props.caixa_status} type_img={""} />
        <div className="d-flex justify-content-between mb-3">
          <InfoButton
            title="Cliente (F2)"
            subtitle={this.state.clientSelected.razao_social}
            icon="client"
            onClickItem={() => this.setState({ showModalPessoa: true })}
          />
          <InfoButton
            title="Vendedor (F4)"
            subtitle=""
            icon="seller"
            onClickItem={() => console.log("Clicou no vendedor...")} />
        </div>

        <ModalPessoa
          onClose={() => this.setState({ showModalPessoa: false })}
          showModal={this.state.showModalPessoa}
          title={"Busca de Cliente"}
          clientSelected={(res: any) => this.setState({ clientSelected: res, showModalPessoa: false })}
        />
      </>
    );
  }
}

export default ConsumidorDetalheHome;
