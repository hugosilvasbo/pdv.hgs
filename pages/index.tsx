import React from "react";
import ConsumidorDetalhe from "../src/componentes/screen/home/ConsumidorDetalheHome";
import ProdutoDetalhe from "../src/componentes/screen/home/ProdutoDetalheHome";
import TabelaProdutos from "../src/componentes/screen/home/TabelaProdutosHome";
import Totalizador from "../src/componentes/screen/home/TotalizadorHome";
import { IItemPedido } from "../src/db/modelagem/interfaces/IItemPedido";
import styles from "../styles/Home.module.scss";

class Home extends React.Component {
  state = {
    caixa: "CAIXA ABERTO",
    itens: [] as IItemPedido[],
    total: 0,
  };

  callBackProdutoDetalheHome = (it: IItemPedido) => {
    // com o objeto recebido do ProdutoDetalheHome, é concatenado num array de state que passa esse state para o componente de preenchimento do grid.
    let subtotal =
      (it.preco ? it.preco : 0) *
      (it.quantidade ? it.quantidade : 0);

    it.sequencia = this.state.itens.length + 1;
    it.subtotal = subtotal;

    this.setState({ itens: [...this.state.itens, it] });
    this.setState({ total: (this.state.total += subtotal) });
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
                <ProdutoDetalhe
                  callBackProdutoDetalheHome={this.callBackProdutoDetalheHome}
                />
              </div>
            </div>
            <ConsumidorDetalhe />
          </div>
          <div id={styles.conteudo_direito}>
            <div className={styles.barra_titulo}>Produtos / Serviços</div>
            <TabelaProdutos itens={this.state.itens} />
            <Totalizador total={this.state.total} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
