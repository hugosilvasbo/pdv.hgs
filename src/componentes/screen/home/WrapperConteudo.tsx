import { ITituloBox } from "../../../interfaces/componentes/screen/home/interface/ITituloBox";
import TituloBox from "./TituloBox";

interface IConteudoBox {
    title: ITituloBox;
    children: any;
    className?: string
}

const WrapperConteudo = (props: IConteudoBox) => {
    return (
        <div className={props.className}>
            <TituloBox
                label={props.title.label}
                type_img={props.title.type_img}
            />
            {props.children}
        </div>
    )
}

export default WrapperConteudo;