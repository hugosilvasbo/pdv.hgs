import React from "react";
import style from "../../../styles/componentes/input/InfoButton.module.scss";
import { GetBootstrapImgFromTypeImages, TypeImages } from "../../types/TypeImages";

interface IInfoButton {
    title: string;
    subtitle: string;
    icon: TypeImages;
    onClickItem: any
}

const InfoButton = (props: IInfoButton) => {
    return (
        <>
            <div id={style.box} onClick={props.onClickItem}>
                <div className={style.img}>
                    <i className={GetBootstrapImgFromTypeImages(props.icon)}></i>
                </div>
                <div>
                    <div className={style.title}>
                        {props.title}
                    </div>
                    <div className={style.subtitle}>
                        {props.subtitle ? props.subtitle : "Conteúdo sem informação"}
                    </div>
                </div>
            </div>

        </>
    )
}

export default InfoButton;