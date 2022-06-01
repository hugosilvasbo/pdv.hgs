import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../src/db/config/Conexao";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const query = db("item as i")
    .select("i.id", "i.descricao", "ip.preco")
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
