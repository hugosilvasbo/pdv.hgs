import React from "react";
import Campo from "../../fields/Campo";
import "bootstrap/dist/css/bootstrap.css";
import { IProdutoDetalheHome } from '../../../modelagem/interfaces/IProdutoDetalheHome';

export class ProdutoDetalheHome extends React.Component<any, {}> {
  // quando clicar no submit, executa callback do pai passando um objeto de valores.
  submitItem = (event: any) => {
    const itens: IProdutoDetalheHome = {
      codigo_produto: event.target.edtCodigoProduto.value,
      preco_unitario: event.target.edtPrecoUnitario.value,
      estoque_atual: event.target.edtEstoqueAtual.value,
      quantidade: event.target.edtQuantidade.value,
      desconto_total: event.target.edtDescontoTotal.value,
    };

    this.props.parentCallBack(itens);

    event.preventDefault();
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitItem}>
          <div className="row">
            <div className="col">
              <Campo
                title="Selecione o produto (Código de barras ou descrição)"
                name="edtCodigoProduto"
              ></Campo>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <Campo title="Preço unitário" name="edtPrecoUnitario"></Campo>
            </div>
            <div className="col">
              <Campo title="Estoque atual" name="edtEstoqueAtual"></Campo>
            </div>
            <div className="col">
              <Campo title="Quantidade" name="edtQuantidade"></Campo>
            </div>
            <div className="col">
              <Campo title="Desconto total" name="edtDescontoTotal"></Campo>
            </div>
          </div>
          <input type="submit" value="Adicionar" />
        </form>
      </>
    );
  }
}

export default ProdutoDetalheHome;
