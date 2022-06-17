import { ITituloBox } from "../../../interfaces/componentes/screen/home/interface/ITituloBox";
import TituloBox from "./TituloBox";

interface IConteudoBox {
    title: ITituloBox;
    children: any;
}

const WrapperConteudo = (props: IConteudoBox) => {
    return (
        <>
            <TituloBox
                label={props.title.label}
                type_img={props.title.type_img}
            />
            {props.children}
        </>
    )
}

export default WrapperConteudo;