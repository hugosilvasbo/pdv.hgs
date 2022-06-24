import React from "react";
import Campo from "../../../../input/Campo";
import TableBusca from "../../../../table/Table";

const Busca = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <Campo caption="Razão social" id="razao" name="edtRazao" />

                </div>
                <div className="col">
                    <Campo caption="Fantasia" id="fantasia" name="edtFantasia" />
                </div>
            </div>
            <TableBusca
                key={"busca"}
                titles={[{ caption: "ID" }, { caption: "Razão social" }, { caption: "Fantasia" }]}
                values={
                    [{ razao_social: "MBM Solutions", fantasia: "MBM" }, { razao_social: "AO3", fantasia: "IOB" }]
                }
            />
        </>
    )
}

export default Busca;
