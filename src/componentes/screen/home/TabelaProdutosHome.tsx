import React from "react";
import style from "../../../../styles/componentes/screen/home/TabelaProdutosHome.module.scss";
import { IItemPedido } from "../../../db/modelagem/interfaces/IItemPedido";
import jsonValue from "../../../utils/json/valores.json";

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
              {this.props.itens.map((it: IItemPedido) => (
                <tr key={it.sequencia}>
                  <td>{it.sequencia}</td>
                  <td>{it.IItem?.descricao}</td>
                  <td>{it.quantidade}</td>
                  <td>
                    {Number(it.subtotal).toFixed(jsonValue.casas_decimais.preco_venda)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
