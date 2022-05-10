import styles from "../../../styles/componentes/campo/Campo.module.scss";
import React from "react";

interface ICampo {
  title?: string;
  name: string;
  type?: string;
  placeholder?: string
}

export default class Campo extends React.Component<ICampo, {}> {
  render() {
    return (
      <>
        <div id={styles.conteudo}>
          <section id={styles.titulo}>{this.props.title}</section>
          <input id={styles.campo} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} />
        </div>
      </>
    );
  }
}
