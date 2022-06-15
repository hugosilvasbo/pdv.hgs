import React from "react";
import Tab from "../Tab";

const TabCliente = (props: any) => {
  const tab_busca = <div key={"busca"}>Tab Busca do Cliente</div>;
  const tab_detalhe = <div key={"detalhe"}>Tab Detalhe do Cliente</div>;

  return (
    <Tab tabs={[tab_busca, tab_detalhe]}></Tab>
  );
};

export default TabCliente;
