import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../src/db/config/Conexao";
import { IItem } from "../../../src/db/modelagem/interfaces/IItem";
import msg from "../../../src/utils/json/mensagens.json";

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse<any>
) {
    const { body } = request;

    let insert = db("item")
        .insert({
            descricao: body.descricao
        }).returning('id');

    let result: IItem[] = await insert;

    response.status(200).json({
        mensagem: msg.operacao_sucesso,
        id: result
    });
}
