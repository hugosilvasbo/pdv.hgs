import React from "react";
import InfoButton from "../../button/InfoButton";
import ModalPessoa from "../../modal/cadastro/ModalPessoa";
import WrapperConteudo from "../../screen/home/WrapperConteudo";

interface IConsumidorDetalheHome {
  caixa_status: string;
}

export class ConsumidorDetalheHome extends React.Component<IConsumidorDetalheHome, {}> {
  state = {
    showModalPessoa: false
  }

  render() {
    return (
      <>
        <WrapperConteudo className="bg-light mb-3" title={{ type_img: "", label: this.props.caixa_status }}>
          <div className="d-flex justify-content-between">
            <InfoButton title="Cliente (F2)" subtitle="" icon="client" onClickItem={() => this.setState({ showModalPessoa: true })} />
            <InfoButton title="Vendedor (F4)" subtitle="" icon="seller" onClickItem={() => console.log("Clicou no vendedor...")} />
          </div>
        </WrapperConteudo>

        <ModalPessoa
          onClose={() => this.setState({ showModalPessoa: false })}
          showModal={this.state.showModalPessoa}
          title={"Busca de Cliente"}
        />
      </>
    );
  }
}

export default ConsumidorDetalheHome;
