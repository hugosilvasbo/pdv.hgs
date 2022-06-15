import React from "react";
import Tab from "../Tab";

const TabCliente = (props: any) => {
  const tab_busca = <>Tab Busca do Cliente</>;
  const tab_detalhe = <>Tab Detalhe do Cliente</>;

  return (
    <Tab tabs={[tab_busca, tab_detalhe]}></Tab>
  );
};

export default TabCliente;
