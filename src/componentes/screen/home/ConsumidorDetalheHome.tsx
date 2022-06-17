import WrapperConteudo from "../../screen/home/WrapperConteudo";

interface IConsumidorDetalheHome {
  caixa_status: string
}

const ConsumidorDetalheHome = (props: IConsumidorDetalheHome) => {
  return (
    <>
      <div className="mb-4">
        <WrapperConteudo title={{ type_img: "", label: props.caixa_status }}>
          <div className="color_geral p-2">
            ae
          </div>
        </WrapperConteudo>
      </div>
    </>
  );
}

export default ConsumidorDetalheHome;
