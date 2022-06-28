import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../app/db/Service"
import { IItem } from "../../../src/interfaces/IItem";
import json_msg from "../../../src/json/mensagens.json"

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

    if (!result) {
        response.status(400).json({
            message: json_msg.falha_operacao,
            id: 0,
            status: 400
        });
    } else {
        response.status(200).json({
            message: json_msg.operacao_sucesso,
            id: result,
            status: 200
        });
    }
}
