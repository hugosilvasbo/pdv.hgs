import React from "react";
import { IItemPedido } from "../../../db/modelagem/interfaces/IItemPedido";
import Campo from "../../fields/Campo";
import CampoNumberFormat from "../../fields/CampoNumberFormat";
import ModalProduto from "../../modal/ModalProduto";
import jsonValue from "../../../utils/json/valores.json";

interface IProdutoDetalheHome {
  callBackProdutoDetalheHome: any;
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
      preco: event.target.edtPrecoUnitario.value,

      item: {
        id: event.target.edtCodigoProduto.value,
        descricao: this.state.item_pedido?.item.descricao,
        estoque_atual: event.target.edtEstoqueAtual.value,
      },
    };

    this.props.callBackProdutoDetalheHome(itens);
    event.preventDefault();
  };

  callBackItemSelecionado = (it: any) => {
    this.setState({
      item_pedido: {
        preco: it.preco,
        item: {
          id: it.id,
          descricao: it.descricao,
          estoque_atual: it.estoque_atual,
        },
      },
    });
  };

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
              <button type="button" onClick={() => this.setState({ showModal: true })}>
                Buscar produto teste
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <CampoNumberFormat
                title="Quantidade"
                name="edtQuantidade"
                placeholder="0,00"
                decimalSize={jsonValue.casas_decimais.quantidade_venda}
              />
            </div>
            <div className="col">
              <CampoNumberFormat
                title="Preço Unit."
                defaultValue={this.state.item_pedido?.preco}
                name="edtPrecoUnitario"
                placeholder="0,00"
                decimalSize={jsonValue.casas_decimais.preco_venda}
              />
            </div>
            <div className="col">
              <CampoNumberFormat
                title="Desconto"
                name="edtDescontoTotal"
                placeholder="0,00"
                decimalSize={jsonValue.casas_decimais.preco_venda}
              />
            </div>
            <div className="col">
              <CampoNumberFormat
                title="Estoque atual"
                name="edtEstoqueAtual"
                placeholder="0,00"
                decimalSize={jsonValue.casas_decimais.estoque}
              />
            </div>
          </div>
          <input type="submit" value="Botão teste adicionar" />
        </form>
      </>
    );
  }
}

export default ProdutoDetalheHome;
