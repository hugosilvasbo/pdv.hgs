import WrapperConteudo from "../../screen/home/WrapperConteudo";
import InfoButton from "../../button/InfoButton"

interface IConsumidorDetalheHome {
  caixa_status: string
}

const ConsumidorDetalheHome = (props: IConsumidorDetalheHome) => {
  return (
    <>
      <div className="mb-3">
        <WrapperConteudo title={{ type_img: "", label: props.caixa_status }}>
          <div className="d-flex justify-content-between mt-2">
            <InfoButton title="Cliente (F2)" subtitle="" icon="client" onClickItem={() => console.log("Clicou no cliente")} />
            <InfoButton title="Vendedor (F3)" subtitle="" icon="seller" onClickItem={() => console.log("Clicou no vendedor...")} />
          </div>
        </WrapperConteudo>
      </div>
    </>
  );
}

export default ConsumidorDetalheHome;
