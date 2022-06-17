import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import style from "../../../../styles/componentes/screen/home/ConsumidorDetalheHome.module.scss";

interface IConsumidorDetalheHome {
  caixa_status: string
}

const ConsumidorDetalheHome = (props: IConsumidorDetalheHome) => {
  return (
    <>
      <div id={style.box_detalhe_pedido}>
        <div className={style.barra_titulo}>
          <div className={style.text_align_center}>
            {props.caixa_status}
          </div>
        </div>
        <div id={style.infos}>
          <div className="row">
            <div className="col">Nro. do pedido</div>
          </div>
          <div className="row">
            <div className="col">Cliente</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConsumidorDetalheHome;
