import style from "../../../../styles/componentes/screen/home/TituloBox.module.scss";
import { ITituloBox } from "../../../interfaces/componentes/screen/home/interface/ITituloBox";
import { GetBootstrapImgFromTypeImages } from "../../../types/TypeImages";

const TituloBox = (props: ITituloBox) => {
    return (
        <>
            <div className={style.barra_titulo}>
                <i className={GetBootstrapImgFromTypeImages(props.type_img)}></i>
                &ensp; {props.label}
            </div>
        </>
    )
}

export default TituloBox;