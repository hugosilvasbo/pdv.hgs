import axios from "axios";
import React from "react";
import { IModal } from "../../../../utils/interfaces/IModal";
import { IPessoa } from "../../../../utils/interfaces/IPessoa";
import TabCliente from "../../tabsheet/cadastro/cliente/TabCliente";
import Modal from "../Modal";

export default class ModalPessoa extends React.Component<IModal, {}> {
  state = {
    pessoa: {} as IPessoa,
  };

  handleRazaoSocialChange = (razao_social: any) => {
    this.setState({ pessoa: { ...this.state.pessoa, razao_social: razao_social } });
  };

  handleFantasiaChange = (fantasia: any) => {
    this.setState({ pessoa: { ...this.state.pessoa, fantasia: fantasia } });
  };

  onFinish = async () => {
    let resultado = await axios.post("/api/cliente/gravar", this.state.pessoa);
    alert("finalizou processo do modal cliente... agora tratar isso com loading etc... colocar consulta...");
  };

  render() {
    return (
      <>
        <Modal
          title="Pessoas"
          onClose={this.props.onClose}
          onFinish={this.onFinish}
          showModal={this.props.showModal}
          btnFinishCaption={"Gravar"}
        >
          <TabCliente
            handleFantasiaChange={this.handleFantasiaChange}
            handleRazaoSocialChange={this.handleRazaoSocialChange}
          />
        </Modal>
      </>
    );
  }
}
