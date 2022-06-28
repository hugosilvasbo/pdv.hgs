import { useEffect, useState } from "react";
import { Pessoa } from "../../../../../../app/model/Pessoa";
import TableBusca from "../../../../table/Table";
import FiltroBusca from "./FiltroBusca";

interface IProps {
    clientSelected: any
}

const Busca = (props: IProps) => {
    const [pessoas, setPessoas] = useState(0);

    useEffect(() => {
        async function getPessoas() {
            let p = new Pessoa();
            let data = await p.findAll();
        }

        getPessoas();
    });

    return (
        <>
            <FiltroBusca />
            <TableBusca
                key={"busca"}
                titles={[{ caption: "ID" }, { caption: "Razão social" }, { caption: "Fantasia" }]}
                data={
                    [{ razao_social: "MBM Solutions", fantasia: "MBM" }, { razao_social: "AO3", fantasia: "IOB" }]
                }
                callbackSelectedData={
                    (res: any) => {
                        props.clientSelected(res);
                    }
                }
            />
        </>
    )
}

export default Busca;
