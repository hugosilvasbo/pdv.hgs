import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../app/db/Conexao";
import jsonMsg from "../../../src/json/mensagens.json"

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const query = req.query;
    const { table } = query;

    let qry = db(table.toString()).select("*");
    let result: any = await qry;
    console.log(result)

    if (!result) {
        res.status(400).json({
            mensagem: jsonMsg.falha_operacao,
            status: 400
        });
    } else {
        res.status(200).json({
            mensagem: jsonMsg.operacao_sucesso,
            data: result.data
        });
    }
}
