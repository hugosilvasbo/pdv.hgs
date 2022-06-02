import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../src/db/config/Conexao";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  let coalesce_preco = db.raw("coalesce(ip.preco, 0) as preco");

  const query = db("item as i")
    .select("i.id", "i.descricao", coalesce_preco)
    .leftJoin("item_preco as ip", function () {
      this.on("i.id", "=", "ip.fk_item").andOnIn("ip.principal", ["S"]);
    });

  let resultado = await query;

  if (!resultado) {
    res.status(400).json({
      error: "Registros de itens não encontrados na base de dados.",
    });
  } else {
    res.status(200).json({
      itens: resultado,
    });
  }
}
