import React from "react";
import style from "../../../../styles/componentes/screen/home/TotalizadorHome.module.scss";
import CampoNumberFormat from "../../fields/CampoNumberFormat";

interface ICampos {
  total: number;
}

export default function Totalizador(props: ICampos) {
  return (
    <>
      <div id={style.box_total}>
        <div id={style.total}>
          Total R$
          <CampoNumberFormat
            value={props.total}
            name="edtTotalizador"
            className={style.total}
          />
        </div>
      </div>
    </>
  );
}
