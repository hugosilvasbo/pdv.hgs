import Tab from "../Tab";
import React from "react"
import Campo from "../../fields/Campo";
import json_valor from "../../../utils/json/valores.json"

interface IProps {
  handleRazaoSocialChange: any,
  handleFantasiaChange: any
}

export default class TabCliente extends React.Component<IProps, {}> {

  tab_busca = <div key={"busca"}>Criar tab com busca dos clientes...</div>;
  tab_detalhe = <>
    <Campo
      label="Razão social"
      id="edtRazaoSocial"
      name="edtRazaoSocial"
      onChangeValue={this.props.handleRazaoSocialChange}
      maxLength={json_valor.tabela_bd_size.pessoa.razao_social}
    />
    <Campo
      label="Fantasia"
      id="edtFantasia"
      name="edtFantasia"
      onChangeValue={this.props.handleFantasiaChange}
      maxLength={json_valor.tabela_bd_size.pessoa.fantasia}
    />
  </>;

  render() {
    return (
      <Tab id_tab_default="busca"
        tabs={[
          { caption: "Busca", content: this.tab_busca, id: "busca" },
          { caption: "Detalhe", content: this.tab_detalhe, id: "detalhe" }]}
      />
    );
  }
};