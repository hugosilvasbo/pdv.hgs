import React from "react";
import style from "../../../../styles/componentes/screen/home/Totalizador.module.scss";

interface ICampos {
  titulo: string;
  total: any;
}

interface ICamposArray {
  conteudo: ICampos[];
}

export default function Totalizador(props: ICamposArray) {
  let conteudo = props.conteudo;

  let resultado = conteudo.map((item: ICampos) => {
    return (
      <div id={style.grupo}>
        <div>{item.titulo}</div>
        <div>{item.total}</div>
      </div>
    );
  });

  return (
    <>
      <div id={style.bloco}>{resultado}</div>
    </>
  );
}
