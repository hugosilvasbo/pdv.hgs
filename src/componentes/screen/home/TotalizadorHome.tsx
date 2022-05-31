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
            conteudo={props.total}
            nomeDoCampo="edtTotalizador"
            inputType="text"
            className={style.total}
            fixedDecimalScale={true}
          />
        </div>
      </div>
    </>
  );
}
