import React from "react";
import Tab from "../../Tab";
import AbaBusca from "./fragments/AbaBusca";
import AbaDetalhe from "./fragments/AbaDetalhe";

interface IProps {
  handleRazaoSocialChange: any,
  handleFantasiaChange: any
}

export default class TabCliente extends React.Component<IProps, {}> {

  render() {
    return (
      <Tab id_tab_default="busca"
        tabs={[
          {
            caption: "Busca",
            content: <AbaBusca />,
            id: "busca"
          },
          {
            caption: "Detalhe",
            content: <AbaDetalhe handleFantasiaChange={this.props.handleFantasiaChange} handleRazaoSocialChange={this.props.handleRazaoSocialChange} />,
            id: "detalhe"
          }
        ]}
      />
    );
  }
};