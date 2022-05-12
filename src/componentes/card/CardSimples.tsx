import React from "react";
import styles from "../../../styles/componentes/card/CardSimples.module.scss";

interface ICardSimples {
    informacao: string
}

export default class ProdutoCard extends React.Component<ICardSimples, {}> {
    render() {
        return (
            <>

                <div id={styles.conteudo}>
                    <div id={styles.conteudo_imagem}>
                        BATATA
                    </div>
                    <div id={styles.conteudo_infos}>
                        {this.props.informacao}
                    </div>
                </div>
            </>
        );
    }
}