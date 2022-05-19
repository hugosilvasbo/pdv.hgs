import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import style from "../../../../styles/componentes/screen/home/ConsumidorDetalheHome.module.scss";

export class ConsumidorDetalheHome extends React.Component {
  render() {
    return (
      <>
        <div id={style.box_detalhe_pedido}>
          <div className={style.barra_titulo}>Informações do pedido</div>
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
}

export default ConsumidorDetalheHome;
