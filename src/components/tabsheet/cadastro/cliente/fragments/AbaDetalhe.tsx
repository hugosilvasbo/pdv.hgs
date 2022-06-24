import React from "react";
import Campo from "../../../../input/Campo";
import jsonValor from "../../../../../../utils/json/valores.json"

interface IProps {
    handleRazaoSocialChange: any;
    handleFantasiaChange: any;
}

const AbaDetalhe = (props: IProps) => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <Campo
                        caption="Razão social"
                        id="edtRazaoSocial"
                        name="edtRazaoSocial"
                        onChangeValue={props.handleRazaoSocialChange}
                        maxLength={jsonValor.tabela_bd_size.pessoa.razao_social} />
                </div>
                <div className="col">
                    <Campo
                        caption="Fantasia"
                        id="edtFantasia"
                        name="edtFantasia"
                        onChangeValue={props.handleFantasiaChange}
                        maxLength={jsonValor.tabela_bd_size.pessoa.fantasia} />
                </div>
            </div>
        </>
    );
}

export default AbaDetalhe;