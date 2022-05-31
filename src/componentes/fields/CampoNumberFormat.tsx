import React from "react";
import NumberFormat from "react-number-format";
import styles from "../../../styles/componentes/campo/Campo.module.scss";

interface ICampoNumberFormat {
  conteudo?: any;
  titulo?: string;
  nomeDoCampo: string;
  inputType?: "text" | "input";
  showPlaceHolder?: boolean;
  floatValue?: number;
  className?: string;
  fixedDecimalScale?: boolean;
}

export default class CampoNumberFormat extends React.Component<
  ICampoNumberFormat,
  {}
> {
  render() {
    const inputTitle = (
      <label className={styles.titulo}>{this.props.titulo}</label>
    );
    return (
      <>
        <div className={styles.flex_column}>
          {this.props.titulo ? inputTitle : ""}

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
        </div>
      </>
    );
  }
}
