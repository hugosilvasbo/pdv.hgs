import React from "react";
import ConsumidorDetalhe from "../src/componentes/screen/home/ConsumidorDetalheHome";
import ProdutoDetalhe from "../src/componentes/screen/home/ProdutoDetalheHome";
import Totalizador from "../src/componentes/screen/home/TotalizadorHome";
import TabelaProdutos from "../src/componentes/screen/home/TabelaProdutosHome";
import styles from "../styles/Home.module.scss";
import { IProdutoDetalheHome } from '../src/modelagem/interfaces/IProdutoDetalheHome';

class Home extends React.Component {
  state = {
    caixa: "CAIXA ABERTO",
    item_digitacao: [],
  };

  produtoDetalheCallBack = (child: IProdutoDetalheHome) => {
    this.setState({ item_digitacao: child });
  };

  render() {
    return (
      <div id={styles.box_corpo}>
        <header id={styles.box_cabecalho}>
          <h4>{this.state.caixa}</h4>
        </header>
        <div id={styles.box_conteudo}>
          <div id={styles.conteudo_esquerdo}>
            <div className={styles.barra_titulo}>Detalhe do item</div>
            <div id={styles.box_item_atual}>
              <div className={styles.item_atual}>Por a imagem aqui dentro</div>
              <div className={styles.width_50_por_cento}>
                <ProdutoDetalhe parentCallBack={this.produtoDetalheCallBack} />
              </div>
            </div>
            <ConsumidorDetalhe />
          </div>
          <div id={styles.conteudo_direito}>
            <div className={styles.barra_titulo}>Produtos / Serviços</div>
            <TabelaProdutos item_digitado = {this.state.item_digitacao} />
            <Totalizador total={30.45} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
