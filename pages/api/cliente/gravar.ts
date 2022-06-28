import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../app/db/Conexao";
import msg from "../../../src/json/mensagens.json"
import { IPessoa } from "../../../src/interfaces/IPessoa";


export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<any>
) {
  const { body } = request; // obtem o objeto com os valores passados via post.

  let insert = db("pessoa")
    .insert({
      razao_social: body.razao_social,
      fantasia: body.fantasia
    }).returning('id');

  let result: IPessoa[] = await insert;

  if (!result) {
    response.status(400).json({
      mensagem: msg.falha_operacao,
      id: 0,
      status: 400
    });
  } else {
    response.status(200).json({
      mensagem: msg.operacao_sucesso,
      id: result
    });
  }
}
