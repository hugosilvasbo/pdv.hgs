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
                <div id={style.body}>
                    <div id={style.box_tab}>
                        <button className={style.tab}>Busca</button>
                        <button className={style.tab}>Info</button>
                    </div>
                    <div className={style.main_none}>
                        {/*{console.log(this.props.caption)}
                        {this.props.caption} <br />
                        {this.props.id} <br />
                        {this.props.content} <br />*/}
                        Paris
                    </div>
                    <div className={style.main_none}>
                        Alemanha
                    </div>
                    <div className={style.main_block}>
                        Holanda
                    </div>
                </div>
            </>
        );
    }
}