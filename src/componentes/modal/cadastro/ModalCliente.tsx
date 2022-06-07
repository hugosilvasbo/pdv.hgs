import React from "react";
import { IPessoa } from "../../../db/modelagem/interfaces/IPessoa";
import Campo from "../../fields/Campo";
import { IModal } from "../interface/IModal";
import Modal from "../Modal";
import axios from "axios";

export default class ModalCliente extends React.Component<IModal, {}> {
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
    await axios.post("/api/cliente/gravar", this.state.pessoa);
  };

  render() {
    return (
      <>
        <Modal
          title="Cadastro de clientes"
          onClose={this.props.onClose}
          onFinish={this.onFinish}
          showModal={this.props.showModal}
          btnFinishCaption={"Gravar"}
        >
          <Campo
            nomeDoCampo="edtRazaoSocial"
            titulo="Razão social"
            onChangeValue={this.handleRazaoSocialChange}
          />
          <Campo
            nomeDoCampo="edtFantasia"
            titulo="Fantasia"
            onChangeValue={this.handleFantasiaChange}
          />
        </Modal>
      </>
    );
  }
}
