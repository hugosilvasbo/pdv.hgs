import React from "react";
import Campo from "../../../../fields/Campo";

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
            {/**
             * 
             * CRIAR UM COMPONENTE PADRÃO PARA A TAB....
             * USAR TBM NO GRID DOS ITENS....
             * 
             */}
            <div className="mt-3 h-100">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Busca;
