import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import Campo from "../src/components/campos/Campo";
import React from "react";
import Totalizador from "../src/components/screen/home/Totalizador";
import { title } from "process";

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
              //{ titulo: "Total de itens", total: "22,22" },
              { titulo: "Total", total: "11,11" }
            ]}
          />
          {/*<div id={styles.totalizador}>
            <h3>Total</h3>
            <h3>R$999,00</h3>
  </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Home;
