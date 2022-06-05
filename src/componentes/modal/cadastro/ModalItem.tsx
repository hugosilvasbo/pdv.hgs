import React from "react";
import Modal from "../Modal";
import { IModal } from "../interface/IModal";

export default class ModalItem extends React.Component<IModal, {}> {
  render() {
    return (
      <>
        <Modal
          title="Cadastro de itens"
          onClose={this.props.onClose}
          showModal={this.props.showModal}
        >
          produtos!...
        </Modal>
      </>
    );
  }
}
