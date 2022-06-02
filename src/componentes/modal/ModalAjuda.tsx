import React from "react";
import Modal from "./Modal";
import { IModal } from "./interface/IModal";

export default class ModalAjuda extends React.Component<IModal, {}> {
  render() {
    return (
      <>
        <Modal
          title="Ajuda de comandos"
          showModal={this.props.showModal}
          onClose={this.props.onClose}
        >
          <div>
            <h1>Melhorar...</h1>
            <br />
            F1: Selecionar
          </div>
        </Modal>
      </>
    );
  }
}
