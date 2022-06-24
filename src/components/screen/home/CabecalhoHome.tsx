import React from "react";
import style from "../../../../styles/Home.module.scss"
import Image from 'next/image'
import logo_hgs from "../../../../public/banner.png";

interface ICabecalhoHome {
    onShowModalItemCadastro: any
}

const CabecalhoHome = (props: ICabecalhoHome) => {
    return (
        <header id={style.box_cabecalho}>
            <div id={style.cabecalho_titulo}>
                <Image
                    src={logo_hgs}
                    height={50}
                    width={128}
                />

            </div>
            <div id={style.cabecalho_menu}>
                <ul>{handleMenu(props)}</ul>
            </div>
        </header>
    )
}

function handleMenu(props: ICabecalhoHome): React.ReactNode {
    const itens = [
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