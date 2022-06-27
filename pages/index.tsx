import React from "react";
import ModalCadItem from "../src/components/modal/cadastro/ModalItem";
import ModalCadCliente from "../src/components/modal/cadastro/ModalPessoa";
import ModalAjuda from "../src/components/modal/ModalAjuda";
import CabecalhoHome from "../src/components/screen/home/CabecalhoHome";
import ConsumidorDetalhe from "../src/components/screen/home/ConsumidorDetalheHome";
import ProdutoDetalhe from "../src/components/screen/home/ProdutoDetalheHome";
import TabelaProdutos from "../src/components/screen/home/TabelaProdutosHome";
import TituloBox from "../src/components/screen/home/TituloBox";
import Totalizador from "../src/components/screen/home/TotalizadorHome";
import { IItemPedido } from "../src/interfaces/IItemPedido";
import styles from "../styles/Home.module.scss";

class Home extends React.Component {
  state = {
    caixa_status: "CAIXA ABERTO",
    cliente_venda: {},
    itens: [] as IItemPedido[],
    total: 0,
    showModalAjuda: false,
    showModalItemCadastro: false,
    showModalPessoaCadastro: false,
  };

  componentDidMount = () => {
    const onKeyDown = (e: any) => {
      switch (e.keyCode) {
        // F2
        case 113:
          this.setState({ showModalPessoaCadastro: true })
          break;
        // F4
        case 115:
          alert("Abrir o modal do cliente mas filtrando vendedor...");
          break;
        // F10
        case 121:
          alert("F10 pressionado... Abrir tela de finalização!");
          break;
        // F12
        case 123:
          if (e.ctrlKey) {
            this.setState({ showModalAjuda: true });
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
            onShowModalItemCadastro={() => this.setState({ showModalItemCadastro: true })}
          />
          <div className={styles.box_content}>
            <div className={styles.box_esquerdo}>
              <ConsumidorDetalhe
                caixa_status={this.state.caixa_status}
              />
              <TituloBox label={"Detalhe"} type_img={"detail"} />
              <div className="w-100 h-100 d-flex flex-row bg-light overflow-auto p-2">
                <div className="row">
                  <div className="col">
                    // Incluir a imagem.
                  </div>
                  <div className="col">
                    <ProdutoDetalhe
                      callBackProdutoDetalheHome={this.callBackProdutoDetalheHome}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.box_direito}>
              <TituloBox label={"Produtos"} type_img={"product"} />
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
          onClose={() => this.setState({ showModalPessoaCadastro: false })}
          showModal={this.state.showModalPessoaCadastro}
          clientSelected={(res: any) => this.setState({ cliente_venda: res })}
        />
      </>
    );
  }
}

export default Home;
