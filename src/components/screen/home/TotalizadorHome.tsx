import React from "react";
import style from "../../../../styles/componentes/screen/home/TotalizadorHome.module.scss";
import jsonValores from "../../../json/valores.json";

interface ICampos {
  total: number;
}

export default function Totalizador(props: ICampos) {
  return (
    <>
      <div id={style.box_total}>
        <div id={style.total}>
          Total R$
          <div>{props.total.toFixed(jsonValores.casas_decimais.totalizador)}</div>
        </div>
      </div>
    </>
  );
}
