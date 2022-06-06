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

  handleRazaoSocialChange = (razaoSocial: any) => {
    this.setState({ pessoa: { razaoSocial: razaoSocial } });
  };

  handleFantasiaChange = (fantasia: any) => {
    this.setState({ pessoa: { fantasia: fantasia } });
  };

  onFinish = async () => {
    let api = await axios.post("/api/cliente/gravar", this.state.pessoa);
    console.log({ api_modal_cliente: api });
    alert("Agora, receber via Router na outra página e fazer a inserção.")
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
