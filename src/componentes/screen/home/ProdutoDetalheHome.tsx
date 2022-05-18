import React from "react";
import Campo from "../../fields/Campo";
import "bootstrap/dist/css/bootstrap.css";

export class ProdutoDetalheHome extends React.Component {
  render() {
    return (
      <>
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
          <div className="col">
            <Campo title="Preço total" name="edtPrecoTotal"></Campo>
          </div>
        </div>
      </>
    );
  }
}

export default ProdutoDetalheHome;
