import React from "react";
import style from "../../../../styles/componentes/screen/home/TabelaProdutosHome.module.scss";
import { IProdutoDetalheHome } from "../../../modelagem/interfaces/IProdutoDetalheHome";

export default class TabelaProdutosHome extends React.Component<any, {}> {
  state = {
    listagem_produtos: [{}],
  };

  adicionarItemNoGrid(produto: IProdutoDetalheHome) {
    this.state.listagem_produtos.push( produto );
  }

  render() {
    this.adicionarItemNoGrid(this.props.item_digitado);
    
    return (
      <>
        <div id={style.box_grid_item}>
          <table id={style.table_item}>
            <thead>
              <tr>
                <td>Descrição</td>
                <td>Preço</td>
              </tr>
            </thead>
            <tbody>
              <tr>{this.state.listagem_produtos.map((item: any) => {
                  return <>
                    <tr>{item.codigo_produto}</tr>
                    <tr>{item.total}</tr>
                  </>
              })}</tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
