import React from "react";
import Modal from "../Modal"
import { IModal } from "../interface/IModal";
import Campo from "../../fields/Campo";

export default class ModalCliente extends React.Component<IModal, {}> {
  render() {
    return (
      <>
        <Modal
          title="Cadastro de clientes"
          onClose={this.props.onClose}
          showModal={this.props.showModal}
        >
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </Modal>
      </>
    );
  }
}
