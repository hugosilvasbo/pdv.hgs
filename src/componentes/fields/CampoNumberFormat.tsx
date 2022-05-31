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

export default class CampoNumberFormat extends React.Component<ICampoNumberFormat & React.HTMLProps<HTMLInputElement>, {}> {

  state = {
    value: ""
  };

  handleChange = (event: any) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const inputTitle = (
      <label className={styles.titulo}>{this.props.title}</label>
    );
    return (
      <>
        <div className={styles.flex_column}>
          <label>{this.props.title ? inputTitle : ""}</label>
          <input
            className={
              this.props.className ? this.props.className : styles.campo
            }
            defaultValue={this.props.value}
            name={this.props.name}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
            value={this.state.value}
          />
        </div>
      </>
    );
  }
}
