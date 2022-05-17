import Image from "next/image";
import React from "react";
import Totalizador from "../src/componentes/screen/home/TotalizadorHome";
import ProdutoDetalhe from "../src/componentes/screen/home/ProdutoDetalheHome";
import ConsumidorDetalhe from "../src/componentes/screen/home/ConsumidorDetalheHome";
import styles from "../styles/Home.module.scss";

class Home extends React.Component {
  state = {
    caixa: "000",
    cliente_razaosocial: "",
    operador: "Indefinido",
    situacao_caixa: "CAIXA ABERTO",
  };

  render() {
    return (
      <div id={styles.box_corpo}>
        <header id={styles.box_cabecalho}>
          <h4>{this.state.situacao_caixa}</h4>
        </header>
        <div id={styles.box_conteudo}>
          <div id={styles.conteudo_esquerdo}>
            <div className={styles.barra_titulo}>Detalhe do item</div>
            <div id={styles.box_item_atual}>
              <div className={styles.item_atual}>Por a imagem aqui dentro</div>
              <div className={styles.width_50_por_cento}>
                <ProdutoDetalhe />
              </div>
            </div>
            <ConsumidorDetalhe />
          </div>
          <div id={styles.conteudo_direito}>
            <div className={styles.barra_titulo}>Produtos / Serviços</div>
            <div id={styles.box_grid_item}>
              <table id={styles.table_item}>
                <thead>
                  <tr>
                    <td>Descrição</td>
                    <td>Preço</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pizza x10</td>
                    <td id={styles.td_preco}>R$15,99</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Totalizador total={30.45} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
