import React from "react";
import Campo from "../../fields/Campo";
import { IProdutoDetalheHome } from '../../../modelagem/interfaces/IProdutoDetalheHome';

export class ProdutoDetalheHome extends React.Component<any, {}> {
  // quando clicar no submit, executa callback do pai passando um objeto de valores.
  submitItem = (event: any) => {
    const itens: IProdutoDetalheHome = {
      codigo_produto: event.target.edtCodigoProduto.value,
      preco_unitario: event.target.edtPrecoUnitario.value,
      quantidade: event.target.edtQuantidade.value,
      desconto_total: event.target.edtDescontoTotal.value,
      estoque_atual: event.target.edtEstoqueAtual.value,
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
                titulo="Selecione o produto (Código de barras ou descrição)"
                nomeDoCampo="edtCodigoProduto"
              ></Campo>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Campo titulo="Quantidade" nomeDoCampo="edtQuantidade" />
            </div>
            <div className="col">
              <Campo titulo="Preço Unit." nomeDoCampo="edtPrecoUnitario" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Campo titulo="Quantidade" nomeDoCampo="edtQuantidade" />
            </div>
            <div className="col">
              <Campo titulo="Preço Unit." nomeDoCampo="edtPrecoUnitario" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Campo titulo="Desconto" nomeDoCampo="edtDescontoTotal" />
            </div>
            <div className="col">
              <Campo titulo="Estoque atual" nomeDoCampo="edtEstoqueAtual" />
            </div>
          </div>
          <input type="submit" value="Adicionar" />
        </form>
      </>
    );
  }
}

export default ProdutoDetalheHome;
