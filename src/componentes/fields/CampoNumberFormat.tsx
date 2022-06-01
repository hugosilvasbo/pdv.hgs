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
  decimalSize?: number;
}

export default class CampoNumberFormat extends React.Component<ICampoNumberFormat, {}> {
  state = {
    value: "",
  };

  handleChange = (event: any) => {
    console.log(event);
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
          />
        </div>
      </>
    );
  }
}
