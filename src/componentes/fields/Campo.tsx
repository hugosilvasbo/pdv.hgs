import React from "react";

interface ICampo {
  titulo: string,
  nomeDoCampo: string,
}

export default class Campo extends React.Component<ICampo, {}> {
  render() {
    return (
      <>
        <label>{this.props.titulo}</label>
        <input name={this.props.nomeDoCampo} type="text" className="form-control" id="usr"></input>
      </>
    );
  }
}
