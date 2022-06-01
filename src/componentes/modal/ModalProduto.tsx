import axios from "axios";
import React from "react";
import { IModal } from "./interface/IModal";
import Modal from "./Modal";
import jsonValue from "../../utils/json/valores.json";

interface IModalProduto extends IModal {
  callbackModalItem: any;
}

export default class ModalProduto extends React.Component<IModalProduto, {}> {
  state = {
    itens: [],
  };

  async componentDidUpdate(nextProps: IModal) {
    if (this.props.showModal != nextProps.showModal) {
      let api = await axios.get("/api/item/item_busca").then(function (it: any) {
        return it.data.itens;
      });

      this.setState({ itens: api });
    }
  }

  clickItemGrid(index: number) {
    let itemSelecionado = this.state.itens[index];
    this.props.callbackModalItem(itemSelecionado);
    this.props.onClose();
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
              <th scope="col">Preço</th>
            </tr>
          </thead>
          <tbody>
            {this.state.itens.map((it: any, index: number) => (
              <tr key={index} onClick={() => this.clickItemGrid(index)}>
                <td>{it.id}</td>
                <td>{it.descricao}</td>
                <td>{Number(it.preco).toFixed(jsonValue.casas_decimais.preco_venda)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
    );
  }
}
