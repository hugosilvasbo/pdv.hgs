import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../src/db/config/Conexao";
import { IPessoa } from "../../../src/db/modelagem/interfaces/IPessoa";
import msg  from "../../../src/utils/json/mensagens.json";


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

  response.status(200).json({
    mensagem: msg.operacao_sucesso,
    id: result
  });
}
