import React from "react";
import style from "../../../../styles/componentes/screen/home/TituloBox.module.scss";
import { ITituloBox, TypeImages } from "../../../interfaces/componentes/screen/home/interface/ITituloBox";

function getImageFromType(type: TypeImages) {
    switch (type) {
        case "client": {
            return "fa-solid fa-user-pen";
        }
        case "detail": {
            return "fas fa-sitemap";
        }
        case "seller": {
            return "fa-solid fa-user-helmet-safety";
        }
        case "product": {
            return "fas fa-bookmark";
        }
    }
}

const TituloBox = (props: ITituloBox) => {
    return (
        <>
            <div className={style.barra_titulo}>
                <i className={getImageFromType(props.type_img)}></i>
                &ensp; {props.label}
            </div>
        </>
    )
}

export default TituloBox;