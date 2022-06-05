import React from "react";
import ConsumidorDetalhe from "../src/componentes/screen/home/ConsumidorDetalheHome";
import ProdutoDetalhe from "../src/componentes/screen/home/ProdutoDetalheHome";
import TabelaProdutos from "../src/componentes/screen/home/TabelaProdutosHome";
import Totalizador from "../src/componentes/screen/home/TotalizadorHome";
import { IItemPedido } from "../src/db/modelagem/interfaces/IItemPedido";
import styles from "../styles/Home.module.scss";
import ModalAjuda from "../src/componentes/modal/ModalAjuda";
import ModalCadItem from "../src/componentes/modal/cadastro/ModalItem";
import ModalCadCliente from "../src/componentes/modal/cadastro/ModalCliente";

class Home extends React.Component {
  state = {
    caixa: "CAIXA ABERTO",
    itens: [] as IItemPedido[],
    total: 0,
    showModal: false
  };

  componentDidMount = () => {
    const onKeyDown = (e: any) => {
      switch (e.keyCode) {
        // F10
        case 121:
          alert("F10 pressionado... Abrir tela de finalização!");
          break;
        // F12
        case 123:
          if (e.ctrlKey) {
            this.setState({ showModal: true });
            console.log(e);
            e.preventDefault();
          }
          break;
      }
    };

    document.body.addEventListener("keydown", onKeyDown);
  };

  callBackProdutoDetalheHome = (it: IItemPedido) => {
    // com o objeto recebido do ProdutoDetalheHome, é concatenado num array de state que passa esse state para o componente de preenchimento do grid.
    let subtotal = (it.preco ? it.preco : 0) * (it.quantidade ? it.quantidade : 0);

    it.sequencia = this.state.itens.length + 1;
    it.subtotal = subtotal;

    this.setState({ itens: [...this.state.itens, it] });
    this.setState({ total: (this.state.total += subtotal) });
  };

  render() {
    return (
      <>
        <div id={styles.box_corpo}>
          <header id={styles.box_cabecalho}>
            <div id={styles.cabecalho_titulo}>{this.state.caixa}</div>
            <div id={styles.cabecalho_menu}>
              <ul>
                <li>
                  <a
                    href="#"
                    onClick={() => this.setState({ showModal: true })}
                  >
                    Clientes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => this.setState({ showModal: true })}
                  >
                    Produtos
                  </a>
                </li>
                {/*<li>
                  <a href="#">link 3</a>
                </li>
                <li>
                  <a href="#">link 4</a>
                </li>
                <li>
                  <a href="#">link 5</a>
    </li>*/}
              </ul>
            </div>
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

        <ModalAjuda
          onClose={() => this.setState({ showModal: false })}
          showModal={this.state.showModal}
          title={"Ajuda - Comandos"}
        />

        <ModalCadItem
          onClose={() => this.setState({ showModal: false })}
          showModal={this.state.showModal}
        />

        <ModalCadCliente
          onClose={() => this.setState({ showModal: false })}
          showModal={this.state.showModal}
        />
      </>
    );
  }
}

export default Home;
