import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div id={styles.corpo}>
      <header id={styles.cabecalho}>
        <ul>
          OPERADOR:..
          <li>Hugo Souza</li>
        </ul>
        <ul>
          CAIXA:..
          <li>001</li>
        </ul>
      </header>
      <div id={styles.conteudo}>
        <div id={styles.conteudo_esquerdo}>
          Incluir um grid com os tipos de produtos aqui etc..
        </div>
        <div id={styles.conteudo_direito}>
          <div id={styles.info_produto}>Batata Frita</div>
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
          <div id={styles.input_dados}>
            Criar um componente de codigo de barra
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
