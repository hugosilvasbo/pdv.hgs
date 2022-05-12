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
      <div id={styles.corpo}>
        <header id={styles.cabecalho}>
          <div id={styles.cabecalho_centro}>
            <h1>{this.state.situacao_caixa}</h1>
          </div>
          <div id={styles.cabecalho_direito}>
            <ul>
              Cliente...
              <li>{this.state.cliente_razaosocial}</li>
            </ul>
            <ul>
              OPERADOR:...
              <li>{this.state.operador}</li>
            </ul>
            <ul>
              CAIXA:...
              <li>{this.state.caixa}</li>
              {/*<button
                onClick={() =>
                  this.setState({ situacao_caixa: "CAIXA FECHADO" })
                }
              >
                Botão teste
              </button>*/}
            </ul>
          </div>
        </header>
        <div id={styles.conteudo}>
          <div id={styles.conteudo_esquerdo}>
            <ProdutoCard informacao="Batata"></ProdutoCard>
            <ProdutoCard informacao="Maçã"></ProdutoCard>
            <ProdutoCard informacao="Cenoura"></ProdutoCard>
            <ProdutoCard informacao="Uva"></ProdutoCard>
          </div>
          <div id={styles.conteudo_direito}>
            <div id={styles.input_dados}>
              <Campo
                name="edtCodBarra"
                placeholder="Enconte o item pelo código, nome ou código de barras"
              />
            </div>
            <div id={styles.grid_item}>
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
                  <tr id={styles.tr_item}>
                    <td>Pizza x10</td>
                    <td id={styles.td_preco}>R$15,99</td>
                  </tr>
                  <tr id={styles.tr_item}>
                    <td>Pizza x10</td>
                    <td id={styles.td_preco}>R$15,99</td>
                  </tr>
                  <tr id={styles.tr_item}>
                    <td>Pizza x10</td>
                    <td id={styles.td_preco}>R$15,99</td>
                  </tr>
                  <tr id={styles.tr_item}>
                    <td>Pizza x10</td>
                    <td id={styles.td_preco}>R$15,99</td>
                  </tr>
                  <tr id={styles.tr_item}>
                    <td>Pizza x10</td>
                    <td id={styles.td_preco}>R$15,99</td>
                  </tr>
                  <tr id={styles.tr_item}>
                    <td>Pizza x10</td>
                    <td id={styles.td_preco}>R$15,99</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Totalizador
              conteudo={[
                { titulo: "Desconto", total: "22,22" },
                { titulo: "Total", total: "11,11" },
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
