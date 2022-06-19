import React from "react";
import ModalCadCliente from "../src/componentes/modal/cadastro/ModalCliente";
import ModalCadItem from "../src/componentes/modal/cadastro/ModalItem";
import ModalAjuda from "../src/componentes/modal/ModalAjuda";
import CabecalhoHome from "../src/componentes/screen/home/CabecalhoHome";
import ConsumidorDetalhe from "../src/componentes/screen/home/ConsumidorDetalheHome";
import ProdutoDetalhe from "../src/componentes/screen/home/ProdutoDetalheHome";
import TabelaProdutos from "../src/componentes/screen/home/TabelaProdutosHome";
import Totalizador from "../src/componentes/screen/home/TotalizadorHome";
import WrapperConteudo from "../src/componentes/screen/home/WrapperConteudo";
import { IItemPedido } from "../src/interfaces/db/modelagem/interfaces/IItemPedido";
import styles from "../styles/Home.module.scss";

class Home extends React.Component {
  state = {
    caixa_status: "CAIXA ABERTO",
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
    console.log(it)
    it.sequencia = this.state.itens.length + 1;
    it.subtotal = subtotal;

    this.setState({ itens: [...this.state.itens, it] });
    this.setState({ total: (this.state.total += subtotal) });
  };

  render() {
    return (
      <>
        <div className={styles.home_body}>
          <CabecalhoHome
            key={"cabecalho"}
            onShowModalClienteCadastro={() => this.setState({ showModalClienteCadastro: true })}
            onShowModalItemCadastro={() => this.setState({ showModalItemCadastro: true })}
          />
          <div className="d-flex flex-row w-100 h-100">
            <div className={styles.box_esquerdo}>
              <ConsumidorDetalhe
                caixa_status={this.state.caixa_status}
              />
              <WrapperConteudo title={{ type_img: "detail", label: "Detalhe" }} className="">
                <div id={styles.box_item_atual}>
                  <div className={styles.item_atual}>Por a imagem aqui dentro</div>
                  <div className={styles.item_atual}>
                    <ProdutoDetalhe
                      callBackProdutoDetalheHome={this.callBackProdutoDetalheHome}
                    />
                  </div>
                </div>
              </WrapperConteudo>
            </div>
            <div className={styles.box_direito}>
              <WrapperConteudo className="" title={{ type_img: "product", label: "Produtos" }}>
                <TabelaProdutos itens={this.state.itens} />
                <Totalizador total={this.state.total} />
              </WrapperConteudo>
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
