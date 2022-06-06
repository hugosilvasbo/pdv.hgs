import React from "react";
import styles from "../../../styles/componentes/campo/Campo.module.scss";

interface ICampo {
  titulo: string;
  nomeDoCampo: string;
  conteudoPadrao?: any;
  onChangeValue?: any;
}

export default class Campo extends React.Component<ICampo, {}> {
  handleChange = (e: any) => {
    if (this.props.onChangeValue) {
      console.log({ CampoTSX: e });
      this.props.onChangeValue(e.target.value);
    }
  };

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
            onChange={this.handleChange}
          ></input>
        </div>
      </>
    );
  }
}
