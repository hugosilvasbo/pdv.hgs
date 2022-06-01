import React from "react";
import styles from "../../../styles/componentes/campo/Campo.module.scss";

interface ICampoNumberFormat {
  className?: any;
  defaultValue?: number;
  disabled?: boolean;
  name?: string;
  placeholder?: string;
  title?: string;
  value?: any;
  valueFormatted?: any;
  decimalSize?: number;
}

export default class CampoNumberFormat extends React.Component<ICampoNumberFormat, {}> {
  state = {
    value: "",
    valueFormatted: "",
  };

  handleChange = (event: any) => {
    let valor = event.target.value;
    this.setState({ value: valor });

    let valorFormatador = valor;
    this.setState({ valueFormatted: valorFormatador })
  };

  render() {
    const inputTitle = <label className={styles.titulo}>{this.props.title}</label>;
    return (
      <>
        <div className={styles.flex_column}>
          <label>{this.props.title ? inputTitle : ""}</label>
          <input
            className={styles.campo}
            defaultValue={this.props.defaultValue}
            name={this.props.name}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
            value={this.state.valueFormatted}
          />
        </div>
      </>
    );
  }
}
