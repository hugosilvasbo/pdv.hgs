import React from "react";
import Campo from "../../fields/Campo";
import { IProdutoDetalheHome } from "../../../db/modelagem/interfaces/IProdutoDetalheHome";
import ModalProduto from "../../modal/ModalProduto";

export class ProdutoDetalheHome extends React.Component<any, {}> {
  state = {
    showModal: false,
  };

  // quando clicar no submit, executa callback do pai passando um objeto de valores.
  onSubmit = (event: any) => {
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
        <ModalProduto
          onClose={() => this.setState({ showModal: false })}
          showModal={this.state.showModal}
          title={"Busca de produtos"}
        />
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col">
              <Campo
                titulo="Selecione o produto (Código de barras ou descrição)"
                nomeDoCampo="edtCodigoProduto"
              />
            </div>
            <div className="col">
              <button
                type="button"
                onClick={() => this.setState({ showModal: true })}
              >
                Buscar produto teste
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Campo titulo="Quantidade" nomeDoCampo="edtQuantidade" />
            </div>
            <div className="col">
              <Campo titulo="Preço Unit." nomeDoCampo="edtPrecoUnitario" />
            </div>
            <div className="col">
              <Campo titulo="Desconto" nomeDoCampo="edtDescontoTotal" />
            </div>
            <div className="col">
              <Campo titulo="Estoque atual" nomeDoCampo="edtEstoqueAtual" />
            </div>
          </div>
          <input type="submit" value="Botão teste adicionar" />
        </form>
      </>
    );
  }
}

export default ProdutoDetalheHome;
