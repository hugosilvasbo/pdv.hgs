import React from "react";
import Campo from "../../../../input/Campo";

const FiltroBusca = () => {
    return (
        <div className="row">
            <div className="col">
                <Campo caption="Razão social" id="razao" name="edtRazao" />

            </div>
            <div className="col">
                <Campo caption="Fantasia" id="fantasia" name="edtFantasia" />
            </div>
        </div>
    )
}

export default FiltroBusca;