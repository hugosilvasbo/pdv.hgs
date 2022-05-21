import React from "react";
import ConsumidorDetalhe from "../src/componentes/screen/home/ConsumidorDetalheHome";
import ProdutoDetalhe from "../src/componentes/screen/home/ProdutoDetalheHome";
import Totalizador from "../src/componentes/screen/home/TotalizadorHome";
import TabelaProdutos from "../src/componentes/screen/home/TabelaProdutosHome";
import styles from "../styles/Home.module.scss";
import { IProdutoDetalheHome } from "../src/db/modelagem/interfaces/IProdutoDetalheHome";

class Home extends React.Component {
  state = {
    caixa: "CAIXA ABERTO",
    item: [],
    total: 0,
  };

  produtoDetalheCallBack = (produto: IProdutoDetalheHome) => {
    // com o objeto recebido do ProdutoDetalheHome, é concatenado num array de state que passa esse state para o componente de preenchimento do grid.
    this.setState({ item: [...this.state.item, produto] });

    console.log("Por numa classe... para vendas");
    let total =
      (produto?.preco_unitario ? produto?.preco_unitario : 0) *
      (produto?.quantidade ? produto.quantidade : 0);
    this.setState({ total: (this.state.total += total) });
  };

  render() {
    return (
      <div id={styles.box_corpo}>
        <header id={styles.box_cabecalho}>
          <h1>{this.state.caixa}</h1>
        </header>
        <div id={styles.box_conteudo}>
          <div id={styles.conteudo_esquerdo}>
            <div className={styles.barra_titulo}>Detalhe do item</div>
            <div id={styles.box_item_atual}>
              <div className={styles.item_atual}>Por a imagem aqui dentro</div>
              <div className={styles.item_atual}>
                <ProdutoDetalhe parentCallBack={this.produtoDetalheCallBack} />
              </div>
            </div>
            <ConsumidorDetalhe />
          </div>
          <div id={styles.conteudo_direito}>
            <div className={styles.barra_titulo}>Produtos / Serviços</div>
            <TabelaProdutos itens={this.state.item} />
            <Totalizador total={this.state.total} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
