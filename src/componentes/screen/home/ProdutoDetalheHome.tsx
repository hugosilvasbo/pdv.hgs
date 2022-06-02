import React from "react";
import { IItemBusca } from "../../../db/modelagem/interfaces/api/IItemBuscaAPI";
import { IItemPedido } from "../../../db/modelagem/interfaces/IItemPedido";
import jsonValue from "../../../utils/json/valores.json";
import Campo from "../../fields/Campo";
import CampoNumberFormat from "../../fields/CampoNumberFormat";
import ModalProduto from "../../modal/ModalProduto";

interface IProdutoDetalheHome {
  callBackProdutoDetalheHome: any;
}

export class ProdutoDetalheHome extends React.Component<IProdutoDetalheHome, {}> {
  state = {
    showModal: false,
    item_busca_api: {} as IItemBusca,
  };

  onKeyDown = (e: any) => {
    let componente_name = e.target.name;

    switch (e.keyCode) {
      // F5
      case 116:
        if (componente_name === "edtCodigoProduto") {
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
    //console.log({ callbackitemselecionado: it });
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
                titulo="Produto (F5)"
                nomeDoCampo="edtCodigoProduto"
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
        <ModalProduto
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
