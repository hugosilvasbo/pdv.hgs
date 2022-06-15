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
    showModalAjuda: false,
    showModalItemCadastro: false,
    showModalClienteCadastro: false,
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
            this.setState({ showModalAjuda: true });
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

  handleMenu = () => {
    const itens = [
      {
        caption: "Pessoas",
        onClick: () => {
          this.setState({ showModalClienteCadastro: true });
        },
      },
      {
        caption: "Itens",
        onClick: () => {
          this.setState({ showModalItemCadastro: true });
        },
      },
    ];

    let result = itens.map((item: any, index: number) => {
      return (
        <li key={index}>
          <a href="#" onClick={item.onClick}>
            {item.caption}
          </a>
        </li>
      );
    });

    return <>{result}</>;
  };

  render() {
    return (
      <>
        <div id={styles.box_corpo}>
          <header id={styles.box_cabecalho}>
            <div id={styles.cabecalho_titulo}>{this.state.caixa}</div>
            <div id={styles.cabecalho_menu}>
              <ul>{this.handleMenu()}</ul>
            </div>
          </header>
          <div id={styles.box_conteudo}>
            <div id={styles.conteudo_esquerdo}>
              <div className={styles.barra_titulo}><i className="fas fa-sitemap"></i>&nbsp;&nbsp;Detalhe</div>
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
              <div className={styles.barra_titulo}><i className="fas fa-bookmark"></i>&nbsp;&nbsp;Produtos</div>
              <TabelaProdutos itens={this.state.itens} />
              <Totalizador total={this.state.total} />
            </div>
          </div>
        </div>

        <ModalAjuda
          onClose={() => this.setState({ showModalAjuda: false })}
          showModal={this.state.showModalAjuda}
          title={"Ajuda - Comandos"}
        />

        <ModalCadItem
          onClose={() => this.setState({ showModalItemCadastro: false })}
          showModal={this.state.showModalItemCadastro}
        />

        <ModalCadCliente
          onClose={() => this.setState({ showModalClienteCadastro: false })}
          showModal={this.state.showModalClienteCadastro}
        />
      </>
    );
  }
}

export default Home;
