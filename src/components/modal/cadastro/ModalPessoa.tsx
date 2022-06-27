import axios from "axios";
import React from "react";
import { IModal } from "../../../interfaces/IModal";
import { IPessoa } from "../../../interfaces/IPessoa";
import TabCliente from "../../tabsheet/cadastro/cliente/TabCliente";
import Modal from "../Modal";

interface IModalPessoa extends IModal {
  clientSelected: any
}

export default class ModalPessoa extends React.Component<IModalPessoa, {}> {
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
          title="Cliente"
          footer_title="Duplo clique no cliente para selecionar"
          onClose={this.props.onClose}
          onFinish={this.onFinish}
          showModal={this.props.showModal}
          btnFinishCaption={"Gravar"}
        >
          <TabCliente
            handleFantasiaChange={this.handleFantasiaChange}
            handleRazaoSocialChange={this.handleRazaoSocialChange}
            clientSelected={(res: any) => this.props.clientSelected(res)}
          />
        </Modal>
      </>
    );
  }
}
