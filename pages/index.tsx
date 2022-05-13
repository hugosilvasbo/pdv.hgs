import React from "react";
import ProdutoCard from "../src/componentes/card/CardSimples";
import Campo from "../src/componentes/fields/Campo";
import Totalizador from "../src/componentes/screen/home/Totalizador";
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
          <h1>{this.state.situacao_caixa}</h1>
        </header>
        <div id={styles.box_conteudo}>
          <div id={styles.conteudo_esquerdo}>
            <div id={styles.barra_titulo}>
              Item atual
            </div>
            <div id={styles.box_item_atual}>
              <div id={styles.item_imagem}>
                Imagem dos itens
              </div>
              <div id={styles.item_detalhe}>
                Detalhes dos itens
              </div>
            </div>
          </div>
          <div id={styles.conteudo_direito}>
            <div id={styles.box_grid_item}>
              <div id={styles.barra_titulo}>Produtos / Serviços</div>
              <table id={styles.table_item}>
                <thead>
                  <tr>
                    <td>Descrição</td>
                    <td>Preço</td>
                  </tr>
                </thead>
                <tbody>
                  <tr id={styles.tr_item}>
                    <td>Pizza x10</td>
                    <td id={styles.td_preco}>R$15,99</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Totalizador
              conteudo={[
                { titulo: "Desconto", total: "0,00" },
                { titulo: "Total", total: "159,90" },
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
