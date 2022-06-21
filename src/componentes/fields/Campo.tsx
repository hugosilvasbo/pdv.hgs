import React from "react";
import style from "../../../styles/componentes/campo/Campo.module.scss";

interface ICampo {
  caption: string;
  conteudoPadrao?: any;
  onChangeValue?: any;
  maxLength?: number;
  name: string;
  id: string
}

export default class Campo extends React.Component<ICampo, {}> {
  handleChange = (e: any) => {
    if (this.props.onChangeValue) {
      this.props.onChangeValue(e.target.value);
    }
  };

  render() {
    return (
      <>
        <div className={style.d_flex_col}>
          <label className={style.title}>{this.props.caption}</label>
          <input
            className={style.field}
            autoComplete="off"
            defaultValue={this.props.conteudoPadrao}
            maxLength={this.props.maxLength ? this.props.maxLength : undefined}
            name={this.props.name}
            onChange={this.handleChange}
            type="text"
            id={this.props.id}
          />
        </div>
      </>
    );
  }
}
