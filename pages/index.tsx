import axios from "axios";
import type { NextPage } from "next";
import React from "react";
import Campo from "../src/componentes/fields/Campo";
import Totalizador from "../src/componentes/screen/home/Totalizador";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  var handleKeyPress = (event: any) => {
    alert("Keypressionada: " + event.key)
  }

  function onKeyBuscarPessoa() {
    alert("Informamções fictícias...")
    
    axios.get("api/pessoa/buscarPorID", {
      params: {
        ID: 123
      }
    }).then((res) => {
      console.log(res)
    }).catch((e) => {
      console.log(e)
    })
  }

  return (
    <div onKeyDown={handleKeyPress} tabIndex={0} id={styles.corpo}>
      <header id={styles.cabecalho}>
        <ul>
          OPERADOR:..
          <li>Hugo Souza</li>
        </ul>
        <ul>
          CAIXA:..
          <li>001</li>
          <button onClick={onKeyBuscarPessoa}>Clicou-se</button>
        </ul>
      </header>
      <div id={styles.conteudo}>
        <div id={styles.conteudo_esquerdo}>
          Agora... fazer os cards dos produtos... <br />
          Criar um componente com a descriçao do grupo
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
};

export default Home;
