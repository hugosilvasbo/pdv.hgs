import React from "react";
import style from "../../../styles/componentes/tab/Tab.module.scss"
//https://www.w3schools.com/w3css/w3css_tabulators.asp

interface ITab {
    caption: any,
    content: any,
    id: any
}

export default class Tab extends React.Component<ITab, {}> {
    render() {
        return (
            <>
                <div id={style.box_content}>
                    <h2>Apenas teste... fazer os esquemas aqui, ou melhor, criar uma tab especifico pra cada um...</h2>
                    {console.log(this.props.caption)}
                    {this.props.caption} <br />
                    {this.props.id} <br />
                    {this.props.content} <br />
                </div>
            </>
        );
    }
}