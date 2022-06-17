import React from "react";
import Modal from "../Modal";
import { IModal } from "../interface/IModal";
import Campo from "../../fields/Campo";
import { IItem } from "../../../db/modelagem/interfaces/IItem";
import axios from "axios";
import json_defs from "../../../utils/json/valores.json";
import { ToastContainer, toast } from "react-toastify";

export default class ModalItem extends React.Component<IModal, {}> {
  state = {
    item: {} as IItem,
  };

  handleDescricaoChange = (descricao: string) => {
    this.setState({ item: { ...this.state.item, descricao: descricao } });
  };

  onFinish = async () => {
    await axios.post("/api/item/gravar", this.state.item).then((response: any) => {
      toast(response.data.message);
    });
  };

  render() {
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
            label="Descrição do item"
            id="edtDescricao"
            name="edtDescricao"
            maxLength={json_defs.tabela_bd_size.item.descricao}
            onChangeValue={this.handleDescricaoChange}
          />
          <ToastContainer />
        </Modal>
      </>
    );
  }
}
