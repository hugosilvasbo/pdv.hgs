import React from "react";
import style from "../../../../styles/componentes/screen/home/TabelaProdutosHome.module.scss";
import { IProdutoDetalheHome } from "../../../modelagem/interfaces/IProdutoDetalheHome";

export default class TabelaProdutosHome extends React.Component<any, {}> {
  render() {
    return (
      <>
        <div id={style.box_grid_item}>
          <table className="table table-sm">
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
                <tr key={1}>
                  <td>{product.codigo_produto}</td>
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
