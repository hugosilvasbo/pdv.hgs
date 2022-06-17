import React from "react";
import style from "../../../../styles/Home.module.scss"

interface ICabecalhoHome {
    onShowModalClienteCadastro: any,
    onShowModalItemCadastro: any
}

const CabecalhoHome = (props: ICabecalhoHome) => {
    return (
        <header id={style.box_cabecalho}>
            <div id={style.cabecalho_titulo}>PDV.HGS</div>
            <div id={style.cabecalho_menu}>
                <ul>{handleMenu(props)}</ul>
            </div>
        </header>
    )
}

function handleMenu(props: ICabecalhoHome): React.ReactNode {
    const itens = [
        {
            caption: "Pessoas",
            onClick: () => {
                props.onShowModalClienteCadastro()
            },
        },
        {
            caption: "Itens",
            onClick: () => {
                props.onShowModalItemCadastro()
            },
        },
    ];

    let result = itens.map((item: any, index: number) => {
        return (
            <li key={index}>
                <a href="#" onClick={item.onClick}>
                    {item.caption}
                </a>
            </li>
        );
    });

    return <>{result}</>;
};

export default CabecalhoHome;