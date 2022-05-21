import React from "react";
import styles from "../../../styles/componentes/campo/Campo.module.scss";

interface ICampo {
  titulo: string;
  nomeDoCampo: string;
}

export default class Campo extends React.Component<ICampo, {}> {
  render() {
    return (
      <>
        <div className={styles.flex_column}>
          <label className={styles.titulo}>{this.props.titulo}</label>
          <input
            className={styles.campo}
            name={this.props.nomeDoCampo}
            type="text"
          ></input>
        </div>
      </>
    );
  }
}
