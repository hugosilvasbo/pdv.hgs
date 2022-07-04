import axios from "axios";
import Image from 'next/image';
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import logo from "../public/banner.png";
import InfoButton from '../src/components/button/InfoButton';
import Campo from '../src/components/input/Campo';
import CampoNumberFormat from '../src/components/input/CampoNumberFormat';
import Modal from "../src/components/modal/Modal";
import ModalAjuda from "../src/components/modal/ModalAjuda";
import TableBusca from "../src/components/table/Table";
import Tab from "../src/components/tabsheet/Tab";
import { IItem } from "../src/interfaces/IItem";
import { IItemBusca } from '../src/interfaces/IItemBuscaAPI';
import { IItemPedido } from "../src/interfaces/IItemPedido";
import { IModal } from "../src/interfaces/IModal";
import { IPessoa } from "../src/interfaces/IPessoa";
import { ITituloBox } from '../src/interfaces/ITituloBox';
import jsonValue from "../src/json/valores.json";
import { GetBootstrapImgFromTypeImages } from '../src/types/TypeImages';
import styletitulobox from "../styles/componentes/screen/home/TituloBox.module.scss";
import styles from "../styles/Home.module.scss";

interface ICabecalhoHome {
  onShowModalItemCadastro: any
}

interface IConsumidorDetalheHome {
  caixa_status: string;
}

interface IProdutoDetalheHome {
  callBackProdutoDetalheHome: any;
}

interface IModalPessoa extends IModal {
  clientSelected: any;
}

interface IModalProduto extends IModal {
  callbackModalItem: any;
}


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
          <Cabecalho
            key={"cabecalho"}
            onShowModalItemCadastro={() => this.setState({ showModalItemCadastro: true })}
          />
          <div className={styles.box_content}>
            <div className={styles.box_esquerdo}>
              <DetalheConsumidor
                caixa_status={this.state.caixa_status}
              />
              <TituloBox label={"Detalhe"} type_img={"detail"} />
              <div className="w-100 h-100 d-flex flex-row bg-light overflow-auto p-2">
                <div className="row">
                  <div className="col">
                    // Incluir a imagem.
                  </div>
                  <div className="col">
                    <DetalheProduto
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

        <ModalItem
          onClose={() => this.setState({ showModalItemCadastro: false })}
          showModal={this.state.showModalItemCadastro}
        />

        <ModalPessoa
          onClose={() => this.setState({ showModalPessoaCadastro: false })}
          showModal={this.state.showModalPessoaCadastro}
          clientSelected={(res: any) => this.setState({ cliente_venda: res })}
        />
      </>
    );
  }
}

const Cabecalho = (props: ICabecalhoHome) => {
  function handleMenu(props: ICabecalhoHome): React.ReactNode {
    const itens = [
      {
        caption: "Itens",
        onClick: () => {
          props.onShowModalItemCadastro()
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

  return (
    <header id={styles.box_cabecalho}>
      <div id={styles.cabecalho_titulo}>
        <Image
          src={logo}
          height={50}
          width={128}
        />

      </div>
      <div id={styles.cabecalho_menu}>
        <ul>{handleMenu(props)}</ul>
      </div>
    </header>
  )
}

class DetalheConsumidor extends React.Component<IConsumidorDetalheHome, {}> {
  state = {
    showModalPessoa: false,
    clientSelected: {} as any
  }

  render() {
    return (
      <>
        <TituloBox label={this.props.caixa_status} type_img={""} />
        <div className="d-flex justify-content-between mb-3">
          <InfoButton
            title="Cliente (F2)"
            subtitle={this.state.clientSelected.razao_social}
            icon="client"
            onClickItem={() => this.setState({ showModalPessoa: true })}
          />
          <InfoButton
            title="Vendedor (F4)"
            subtitle=""
            icon="seller"
            onClickItem={() => console.log("Clicou no vendedor...")} />
        </div>

        <ModalPessoa
          onClose={() => this.setState({ showModalPessoa: false })}
          showModal={this.state.showModalPessoa}
          title={"Busca de Cliente"}
          clientSelected={(res: any) => this.setState({ clientSelected: res, showModalPessoa: false })}
        />
      </>
    );
  }
}

class DetalheProduto extends React.Component<IProdutoDetalheHome, {}> {
  state = {
    showModal: false,
    item_busca_api: {} as IItemBusca,
  };

  onKeyDown = (e: any) => {
    let id = e.target.id;

    switch (e.keyCode) {
      // F5
      case 116:
        if (id === "edtCodigoProduto") {
          this.setState({ showModal: true });
        }
        e.preventDefault();
        break;
    }
  };

  componentDidMount = () => {
    document.body.addEventListener("keydown", this.onKeyDown);
  };

  // quando clicar no submit, executa callback do pai passando um objeto de valores.
  onSubmit = (event: any) => {
    console.log(event.target.edtCodigoProduto.value)
    const itens: IItemPedido = {
      id: event.target.edtCodigoProduto.value,
      desconto: event.target.edtDescontoTotal.value,
      preco: event.target.edtPrecoUnitario.value,
      quantidade: event.target.edtQuantidade.value,
      IItem: {
        id: event.target.edtCodigoProduto.value,
        descricao: this.state.item_busca_api.descricao,
      },
    };

    this.props.callBackProdutoDetalheHome(itens);
    event.preventDefault();
  };

  callBackItemSelecionado = (it: IItemBusca) => {
    this.setState({
      item_busca_api: {
        id: it.id,
        descricao: it.descricao,
        preco: it.preco,
      },
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col">
              <Campo
                caption="Produto (F5)"
                id="edtCodigoProduto"
                name="edtCodigoProduto"
                conteudoPadrao={this.state.item_busca_api.descricao}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <CampoNumberFormat
                title="Quantidade"
                name="edtQuantidade"
                placeholder="0,00"
                decimalSize={jsonValue.casas_decimais.quantidade_venda}
              />
            </div>
            <div className="col">
              <CampoNumberFormat
                title="Preço Unit."
                value={this.state.item_busca_api.preco}
                name="edtPrecoUnitario"
                placeholder="0,00"
                decimalSize={jsonValue.casas_decimais.preco_venda}
              />
            </div>
            <div className="col">
              <CampoNumberFormat
                title="Desconto"
                name="edtDescontoTotal"
                placeholder="0,00"
                decimalSize={jsonValue.casas_decimais.preco_venda}
              />
            </div>
            <div className="col">
              <CampoNumberFormat
                title="Estoque atual"
                name="edtEstoqueAtual"
                placeholder="0,00"
                decimalSize={jsonValue.casas_decimais.estoque}
              />
            </div>
          </div>
          <button type="submit" hidden={true} />
        </form>

        <ModalSelecaoItem
          onClose={() => this.setState({ showModal: false })}
          showModal={this.state.showModal}
          title={"Busca de produtos"}
          callbackModalItem={this.callBackItemSelecionado}
        />
      </>
    );
  }
}

class TabelaProdutos extends React.Component<any, {}> {
  render() {
    return (
      <>
        <div className="overflow-auto h-100 bg-light">
          <table className="table table-striped bg-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Descrição</th>
                <th scope="col">Qtde</th>
                <th scope="col">Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {this.props.itens.map((it: IItemPedido) => (
                <tr key={it.sequencia}>
                  <td>{it.sequencia}</td>
                  <td>{it.IItem?.descricao}</td>
                  <td>{it.quantidade}</td>
                  <td>
                    {Number(it.subtotal).toFixed(jsonValue.casas_decimais.preco_venda)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const Totalizador = (props: any) => {
  return (
    <>
      <div id={styles.box_total}>
        <div id={styles.total}>
          Total R$
          <div>{props.total.toFixed(jsonValue.casas_decimais.totalizador)}</div>
        </div>
      </div>
    </>
  );
}

const TituloBox = (props: ITituloBox) => {
  return (
    <>
      <div className={styletitulobox.barra_titulo}>
        <i className={GetBootstrapImgFromTypeImages(props.type_img)}></i>
        &ensp; {props.label}
      </div>
    </>
  )
}

class ModalItem extends React.Component<IModal, {}> {
  state = {
    item: {} as IItem,
  };

  handleDescricaoChange = (descricao: string) => {
    this.setState({ item: { ...this.state.item, descricao: descricao } });
  };

  onFinish = async () => {
    await axios.post("/api/item/gravar", this.state.item).then((response: any) => {
      toast(response.data.message);
    });
  };

  render() {
    return (
      <>
        <Modal
          title="Cadastro de itens"
          onClose={this.props.onClose}
          onFinish={this.onFinish}
          showModal={this.props.showModal}
          btnFinishCaption={"Gravar"}
        >
          <Campo
            caption="Descrição do item"
            id="edtDescricao"
            name="edtDescricao"
            maxLength={jsonValue.tabela_bd_size.item.descricao}
            onChangeValue={this.handleDescricaoChange}
          />
          <ToastContainer />
        </Modal>
      </>
    );
  }
}

class ModalPessoa extends React.Component<IModalPessoa, {}> {
  state = {
    pessoa: {} as IPessoa,
  };

  handleRazaoSocialChange = (razao_social: any) => {
    this.setState({ pessoa: { ...this.state.pessoa, razao_social: razao_social } });
  };

  handleFantasiaChange = (fantasia: any) => {
    this.setState({ pessoa: { ...this.state.pessoa, fantasia: fantasia } });
  };

  onFinish = async () => {
    let resultado = await axios.post("/api/cliente/gravar", this.state.pessoa);
    alert("finalizou processo do modal cliente... agora tratar isso com loading etc... colocar consulta...");
  };

  AbaBusca = () => {
    const FiltroBusca = () => {
      return (
        <div className="row" >
          <div className="col">
            <Campo caption="Razão social" id="razao" name="edtRazao" />
          </div>
          <div className="col">
            <Campo caption="Fantasia" id="fantasia" name="edtFantasia" />
          </div>
        </div>
      )
    }

    return (
      <>
        <FiltroBusca />
        <TableBusca
          key={"busca"}
          titles={[{ caption: "ID" }, { caption: "Razão social" }, { caption: "Fantasia" }]}
          data={
            [{ razao_social: "MBM Solutions", fantasia: "MBM" }, { razao_social: "AO3", fantasia: "IOB" }]
          }
          callbackSelectedData={
            (res: any) => {
              this.props.clientSelected(res);
            }
          }
        />
      </>
    )
  }

  AbaDetalhe = () => {
    return (
      <>
        <div className="row">
          <div className="col">
            <Campo
              caption="Razão social"
              id="edtRazaoSocial"
              name="edtRazaoSocial"
              onChangeValue={this.handleRazaoSocialChange}
              maxLength={jsonValue.tabela_bd_size.pessoa.razao_social} />
          </div>
          <div className="col">
            <Campo
              caption="Fantasia"
              id="edtFantasia"
              name="edtFantasia"
              onChangeValue={this.handleFantasiaChange}
              maxLength={jsonValue.tabela_bd_size.pessoa.fantasia} />
          </div>
        </div>
      </>
    );
  }

  TabCliente = () => {
    return (
      <Tab id_tab_default="busca"
        tabs={[
          {
            caption: "Busca",
            content: <this.AbaBusca />,
            id: "busca",
          },
          {
            caption: "Detalhe",
            content: <this.AbaDetalhe />,
            id: "detalhe"
          }
        ]}
      />
    );
  };

  render() {
    return (
      <>
        <Modal
          title="Cliente"
          footer_title="Duplo clique no cliente para selecionar"
          onClose={this.props.onClose}
          onFinish={this.onFinish}
          showModal={this.props.showModal}
          btnFinishCaption={"Gravar"}
        >
          <this.TabCliente />
        </Modal>
      </>
    );
  }
}

class ModalSelecaoItem extends React.Component<IModalProduto, {}> {
  state = {
    itens: [],
  };

  async componentDidUpdate(nextProps: IModal) {
    if (this.props.showModal != nextProps.showModal) {
      let api = await axios.get("/api/item/busca").then(function (it: any) {
        return it.data.itens;
      });

      this.setState({ itens: api });
    }
  }

  clickItemGrid(index: number) {
    let itemSelecionado = this.state.itens[index];

    this.props.callbackModalItem(itemSelecionado);
    this.props.onClose();
  }

  handleTable = () => {
    const columns = [
      {
        title: "Cód.",
      },
      {
        title: "Descrição",
      },
      {
        title: "Valor",
      },
    ];

    return (
      <table className="table table-striped ">
        <thead>
          <tr>
            {columns.map((it: any, index: number) => {
              return <th scope="col" key={index}>{it.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {this.state.itens.map((it: any, index: number) => (
            <tr key={index} onClick={() => this.clickItemGrid(index)}>
              <td>{it.id}</td>
              <td>{it.descricao}</td>
              <td>{Number(it.preco).toFixed(jsonValue.casas_decimais.preco_venda)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  render() {
    return (
      <Modal
        title="Consulta de produtos"
        onClose={this.props.onClose}
        showModal={this.props.showModal}
      >
        {this.handleTable()}
      </Modal>
    );
  }
}

export default Home;
