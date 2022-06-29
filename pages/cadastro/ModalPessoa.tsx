import axios from "axios";
import React from "react";
import { IModal } from "../../src/interfaces/IModal";
import { IPessoa } from "../../src/interfaces/IPessoa";
import Campo from "../../src/components/input/Campo";
import Tab from "../../src/components/tabsheet/Tab";
import Modal from "../../src/components/modal/Modal";
import TableBusca from "../../src/components/table/Table";
import jsonValor from "../../src/json/valores.json"

interface IModalPessoa extends IModal {
  clientSelected: any;
}

// useEffect(() => {
//   async function getPessoas() {
//       let p = new Pessoa();
//       let data = await p.findAll();
//   }

//   getPessoas();
// });

export default class ModalPessoa extends React.Component<IModalPessoa, {}> {
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
              maxLength={jsonValor.tabela_bd_size.pessoa.razao_social} />
          </div>
          <div className="col">
            <Campo
              caption="Fantasia"
              id="edtFantasia"
              name="edtFantasia"
              onChangeValue={this.handleFantasiaChange}
              maxLength={jsonValor.tabela_bd_size.pessoa.fantasia} />
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
