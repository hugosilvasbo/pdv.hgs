import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { IItem } from "../../../interfaces/IItem";
import { IModal } from "../../../interfaces/IModal";
import json_defs from "../../../json/valores.json";
import Campo from "../../input/Campo";
import Modal from "../Modal";

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
            caption="Descrição do item"
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
