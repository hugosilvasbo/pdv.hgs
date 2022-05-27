import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";

interface IProps {
  onClose: any;
  showModal: any;
  title: string;
}

export default class ModalProduto extends React.Component<IProps, {}> {
  state = {
    produtos: [],
  };

  async buscarProdutosDB() {
    let api = await axios
      .get("/api/produto/produto_busca")
      .then(function (produtos: any) {
        return produtos.data.produto;
      });

    this.setState({ produtos: api });
  }

  async componentDidMount() {
    if (!this.props.showModal) {
      return null;
    }

    await this.buscarProdutosDB();
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
            {this.state.produtos.map((produto: any) => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
    );
  }
}
