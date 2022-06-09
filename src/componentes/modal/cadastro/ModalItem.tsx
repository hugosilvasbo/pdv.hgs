import React from "react";
import Modal from "../Modal";
import { IModal } from "../interface/IModal";
import Campo from "../../fields/Campo";
import { IItem } from "../../../db/modelagem/interfaces/IItem";
import axios from "axios";
import json_valor from "../../../utils/json/valores.json";
import Tab from "../../tab/Tab";

export default class ModalItem extends React.Component<IModal, {}> {
  state = {
    item: {} as IItem,
  };

  handleDescricaoChange = (descricao: string) => {
    this.setState({ item: { ...this.state.item, descricao: descricao } });
  };

  onFinish = async () => {
    let resultado = await axios.post("/api/item/gravar", this.state.item);
    alert(
      "Finalizou o processo do item... agora tratar com loading, etc... melhorar a tela! :D"
    );
  };

  render() {
    const FirstTab = () => {
      return (
        <div>
          <p>First TAB!!!</p>
        </div>
      );
    };

    const SecondTab = () => {
      return (
        <div>
          <p>Second Tab!! Hurray!!</p>
          {/* Second  tab content will go here */}
        </div>
      );
    };

    return (
      <>
        <Modal
          title="Cadastro de itens"
          onClose={this.props.onClose}
          onFinish={this.onFinish}
          showModal={this.props.showModal}
          btnFinishCaption={"Gravar"}
        >
          <Campo
            nomeDoCampo="edtDescricao"
            titulo="Descrição do item"
            maxLength={json_valor.tabela_bd_size.item.descricao}
            onChangeValue={this.handleDescricaoChange}
          />
          <Tab children={[<FirstTab />, <SecondTab />]} />
        </Modal>
      </>
    );
  }
}
