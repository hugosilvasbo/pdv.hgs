import React from "react";
import Campo from "../../fields/Campo";
import { IItemPedido } from "../../../db/modelagem/interfaces/IItemPedido";
import ModalProduto from "../../modal/ModalProduto";
import { IItem } from "../../../db/modelagem/interfaces/IItem";

interface IProdutoDetalheHome {
  callBackProdutoDetalheHome: any
}

export class ProdutoDetalheHome extends React.Component<IProdutoDetalheHome, {}> {
  state = {
    showModal: false,
    item_pedido: null as IItemPedido | null,
  };

  // quando clicar no submit, executa callback do pai passando um objeto de valores.
  onSubmit = (event: any) => {
    const itens: IItemPedido = {
      quantidade: event.target.edtQuantidade.value,
      desconto_total: event.target.edtDescontoTotal.value,

      item: {
        id: event.target.edtCodigoProduto.value,
        descricao: this.state.item_pedido?.item.descricao,
        estoque_atual: event.target.edtEstoqueAtual.value,
        preco_unitario: event.target.edtPrecoUnitario.value,
      }
    };

    this.props.callBackProdutoDetalheHome(itens);
    event.preventDefault();
  };

  callBackItemSelecionado = (it: IItem) => {
    this.setState({
      item_pedido: {
        item: {
          id: it.id,
          descricao: it.descricao,
          preco_unitario: it.preco_unitario,
          estoque_atual: it.estoque_atual
        }
      }
    })
  }

  render() {
    return (
      <>
        <ModalProduto
          onClose={() => this.setState({ showModal: false })}
          showModal={this.state.showModal}
          title={"Busca de produtos"}
          callbackModalItem={this.callBackItemSelecionado}
        />
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col">
              <Campo
                titulo="Selecione o produto (Código de barras ou descrição)"
                nomeDoCampo="edtCodigoProduto"
                conteudoPadrao={this.state.item_pedido?.item.descricao}
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
              <Campo titulo="Quantidade" nomeDoCampo="edtQuantidade" conteudoPadrao="0" />
            </div>
            <div className="col">
              <Campo titulo="Preço Unit." nomeDoCampo="edtPrecoUnitario" conteudoPadrao={this.state.item_pedido?.preco_unitario} />
            </div>
            <div className="col">
              <Campo titulo="Desconto" nomeDoCampo="edtDescontoTotal" conteudoPadrao="0" />
            </div>
            <div className="col">
              <Campo titulo="Estoque atual" nomeDoCampo="edtEstoqueAtual" conteudoPadrao={this.state.item_pedido?.item.preco_unitario} />
            </div>
          </div>
          <input type="submit" value="Botão teste adicionar" />
        </form>
      </>
    );
  }
}

export default ProdutoDetalheHome;
