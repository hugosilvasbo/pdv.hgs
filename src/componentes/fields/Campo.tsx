import React from "react";
import styles from "../../../styles/componentes/campo/Campo.module.scss";

interface ICampo {
  titulo: string;
  nomeDoCampo: string;
  conteudoPadrao?: any;
}

export default class Campo extends React.Component<ICampo, {}> {
  render() {
    return (
      <>
        <div className={styles.flex_column}>
          <label className={styles.titulo}>{this.props.titulo}</label>
          <input
            autoComplete="off"
            className={styles.campo}
            defaultValue={this.props.conteudoPadrao}
            name={this.props.nomeDoCampo}
            type="text"
          ></input>
        </div>
      </>
    );
  }
}
