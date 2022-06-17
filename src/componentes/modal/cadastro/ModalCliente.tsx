import React from "react";
import { IPessoa } from "../../../interfaces/db/modelagem/interfaces/IPessoa";
import Campo from "../../fields/Campo";
import { IModal } from "../../../interfaces/componentes/modal/interface/IModal";
import Modal from "../Modal";
import axios from "axios";
import json_valor from "../../../utils/json/valores.json";
import TabCliente from "../../tabsheet/cadastro/TabCliente"

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
    let resultado = await axios.post("/api/cliente/gravar", this.state.pessoa);
    alert("finalizou processo do modal cliente... agora tratar isso com loading etc... colocar consulta...");
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
          {/** tab cliente teste, aprimorar depois... */}
          <TabCliente />

          <Campo
            label="Razão social"
            id="edtRazaoSocial"
            name="edtRazaoSocial"
            onChangeValue={this.handleRazaoSocialChange}
            maxLength={json_valor.tabela_bd_size.pessoa.razao_social}
          />
          <Campo
            label="Fantasia"
            id="edtFantasia"
            name="edtFantasia"
            onChangeValue={this.handleFantasiaChange}
            maxLength={json_valor.tabela_bd_size.pessoa.fantasia}
          />
        </Modal>
      </>
    );
  }
}
