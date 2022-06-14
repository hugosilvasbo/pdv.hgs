import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../src/db/config/Conexao";
import json_msg from "../../../src/utils/json/mensagens.json"

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  let coalesce_preco = db.raw("coalesce(ip.preco, 0) as preco");

  const query = db("item as i")
    .select("i.id", "i.descricao", coalesce_preco)
    .leftJoin("item_preco as ip", function () {
      this.on("i.id", "=", "ip.fk_item").andOnIn("ip.principal", ["S"]);
    });

  let resultado: any = await query;

  if (!resultado) {
    res.status(400).json({
      message: json_msg.registros_nao_encontrados,
      status: 400
    });
  } else {
    res.status(200).json({
      message: json_msg.registros_encontrados,
      itens: resultado,
      status: 200
    });
  }
}
