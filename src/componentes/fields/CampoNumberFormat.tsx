import React from "react";
import styles from "../../../styles/componentes/campo/Campo.module.scss";

interface ICampoNumberFormat {
  title?: string;
}

/*
<NumberFormat
            defaultValue={this.props.conteudo}
            displayType={this.props.inputType ? this.props.inputType : "input"}
            decimalScale={2}
            decimalSeparator="."
            placeholder={this.props.showPlaceHolder ? "0,00" : ""}
            className={
              this.props.className ? this.props.className : styles.campo
            }
            name={this.props.nomeDoCampo}
            fixedDecimalScale={this.props.fixedDecimalScale}
            onValueChange={(val: any) => {
              this.setState({ floatValue: val.floatValue });
            }}
            value={this.props.floatValue}
          />
*/

export default class CampoNumberFormat extends React.Component<
  ICampoNumberFormat & React.HTMLProps<HTMLInputElement>, {}> {
  render() {
    const inputTitle = (
      <label className={styles.titulo}>{this.props.title}</label>
    );
    return (
      <>
        <div className={styles.flex_column}>
          {this.props.title ? inputTitle : ""}

          <input
            name={this.props.name}
            value={this.props.value}
            placeholder={this.props.placeholder}
            className={
              this.props.className ? this.props.className : styles.campo
            }
          />
        </div>
      </>
    );
  }
}
