import axios from "axios";
import React from "react";
import { IModal } from "../../../interfaces/componentes/modal/interface/IModal";
import Modal from "../Modal";
import jsonValue from "../../../utils/json/valores.json";

interface IModalProduto extends IModal {
  callbackModalItem: any;
}

export default class ModalSelecaoItem extends React.Component<IModalProduto, {}> {
  state = {
    itens: [],
  };

  async componentDidUpdate(nextProps: IModal) {
    if (this.props.showModal != nextProps.showModal) {
      let api = await axios.get("/api/item/busca").then(function (it: any) {
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

  handleTable = () => {
    const columns = [
      {
        title: "Cód.",
      },
      {
        title: "Descrição",
      },
      {
        title: "Valor",
      },
    ];

    return (
      <table className="table table-striped ">
        <thead>
          <tr>
            {columns.map((it: any, index: number) => {
              return <th scope="col" key={index}>{it.title}</th>;
            })}
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
    );
  };

  render() {
    return (
      <Modal
        title="Consulta de produtos"
        onClose={this.props.onClose}
        showModal={this.props.showModal}
      >
        {this.handleTable()}
      </Modal>
    );
  }
}
