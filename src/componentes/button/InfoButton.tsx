import React from "react";
import style from "../../../styles/componentes/button/InfoButton.module.scss";

interface IInfoButton {
    title: string;
    subtitle: string;
    icon: string;
}

const InfoButton = (props: IInfoButton) => {
    return (
        <>
            <div id={style.box}>
                opa
            </div>

        </>
    )
}

export default InfoButton;