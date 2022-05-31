import React from "react";
import style from "../../../../styles/componentes/screen/home/TabelaProdutosHome.module.scss";
import { IItemPedido } from "../../../db/modelagem/interfaces/IItemPedido";

export default class TabelaProdutosHome extends React.Component<any, {}> {
  render() {
    return (
      <>
        <div id={style.box_grid_item}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Descrição</th>
                <th scope="col">Qtde</th>
                <th scope="col">Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {this.props.itens.map((product: IItemPedido) => (
                <tr key={product.sequencia}>
                  <td>{product.sequencia}</td>
                  <td>{product.item.descricao}</td>
                  <td>{product.quantidade}</td>
                  <td>{product.subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
