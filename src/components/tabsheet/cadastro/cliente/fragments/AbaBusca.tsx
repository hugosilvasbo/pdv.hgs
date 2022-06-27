import TableBusca from "../../../../table/Table";
import FiltroBusca from "./FiltroBusca";

interface IProps {
    clientSelected: any
}

const Busca = (props: any) => {
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
