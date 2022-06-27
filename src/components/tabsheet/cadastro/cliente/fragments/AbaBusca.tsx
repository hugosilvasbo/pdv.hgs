import TableBusca from "../../../../table/Table";
import FiltroBusca from "./FiltroBusca";

const Busca = () => {
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
                        console.log({ resultado_callback: res })
                    }
                }
            />
        </>
    )
}

export default Busca;
