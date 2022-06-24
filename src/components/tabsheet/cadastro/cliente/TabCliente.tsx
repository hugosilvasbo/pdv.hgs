import Tab from "../../Tab";
import AbaBusca from "./fragments/AbaBusca";
import AbaDetalhe from "./fragments/AbaDetalhe";

interface IProps {
  handleRazaoSocialChange: any,
  handleFantasiaChange: any
}

const TabCliente = (props: IProps) => {
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
          content: <AbaDetalhe handleFantasiaChange={props.handleFantasiaChange} handleRazaoSocialChange={props.handleRazaoSocialChange} />,
          id: "detalhe"
        }
      ]}
    />
  );
};

export default TabCliente;