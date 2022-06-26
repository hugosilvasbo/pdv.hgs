import React from "react";
import { IItemBusca } from "../../../interfaces/IItemBuscaAPI";
import { IItemPedido } from "../../../interfaces/IItemPedido";
import jsonValue from "../../../json/valores.json";
import Campo from "../../input/Campo";
import CampoNumberFormat from "../../input/CampoNumberFormat";
import ModalSelecaoItem from "../../modal/busca/ModalSelecaoItem";

interface IProdutoDetalheHome {
  callBackProdutoDetalheHome: any;
}

export class ProdutoDetalheHome extends React.Component<IProdutoDetalheHome, {}> {
  state = {
    showModal: false,
    item_busca_api: {} as IItemBusca,
  };

  onKeyDown = (e: any) => {
    let id = e.target.id;

    switch (e.keyCode) {
      // F5
      case 116:
        if (id === "edtCodigoProduto") {
          this.setState({ showModal: true });
        }
        e.preventDefault();
        break;
    }
  };

  componentDidMount = () => {
    document.body.addEventListener("keydown", this.onKeyDown);
  };

  // quando clicar no submit, executa callback do pai passando um objeto de valores.
  onSubmit = (event: any) => {
    console.log(event.target.edtCodigoProduto.value)
    const itens: IItemPedido = {
      id: event.target.edtCodigoProduto.value,
      desconto: event.target.edtDescontoTotal.value,
      preco: event.target.edtPrecoUnitario.value,
      quantidade: event.target.edtQuantidade.value,
      IItem: {
        id: event.target.edtCodigoProduto.value,
        descricao: this.state.item_busca_api.descricao,
      },
    };

    this.props.callBackProdutoDetalheHome(itens);
    event.preventDefault();
  };

  callBackItemSelecionado = (it: IItemBusca) => {
    this.setState({
      item_busca_api: {
        id: it.id,
        descricao: it.descricao,
        preco: it.preco,
      },
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col">
              <Campo
                caption="Produto (F5)"
                id="edtCodigoProduto"
                name="edtCodigoProduto"
                conteudoPadrao={this.state.item_busca_api.descricao}
              />
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
                value={this.state.item_busca_api.preco}
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
          <button type="submit" hidden={true} />
        </form>

        <ModalSelecaoItem
          onClose={() => this.setState({ showModal: false })}
          showModal={this.state.showModal}
          title={"Busca de produtos"}
          callbackModalItem={this.callBackItemSelecionado}
        />
      </>
    );
  }
}

export default ProdutoDetalheHome;
