import React from "react";
import style from "../../../../styles/componentes/screen/home/TabelaProdutosHome.module.scss";
import { IProdutoDetalheHome } from "../../../db/modelagem/interfaces/IProdutoDetalheHome";

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
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {this.props.itens.map((product: IProdutoDetalheHome) => (
                <tr key={product.sequencia}>
                  <td>{product.sequencia}</td>
                  <td>{product.descricao}</td>
                  <td>{product.quantidade}</td>
                  <td>{product.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
