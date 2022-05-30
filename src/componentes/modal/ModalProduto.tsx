import axios from "axios";
import React from "react";
import Modal from "./Modal";
import { IModal } from "../../interfaces/componentes/modal/IModal";

export default class ModalProduto extends React.Component<IModal, {}> {
  state = {
    itens: []
  };

  async componentDidUpdate(nextProps: IModal) {
    if (this.props.showModal != nextProps.showModal) {
      let api = await axios
        .get("/api/produto/produto_busca")
        .then(function (it: any) {
          return it.data.itens;
        });

      this.setState({ itens: api });
    }
  }

  clickItemGrid(index: number) {
    let itemSelecionado = this.state.itens[index];
    
    
  }

  render() {
    return (
      <Modal
        title="Consulta de produtos"
        onClose={this.props.onClose}
        showModal={this.props.showModal}
      >
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Cód.</th>
              <th scope="col">Descrição</th>
            </tr>
          </thead>
          <tbody>
            {this.state.itens.map((it: any, index: number) => (
              <tr key={index} onClick={() => this.clickItemGrid(index)}>
                <td>{it.id}</td>
                <td>{it.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
    );
  }
}
