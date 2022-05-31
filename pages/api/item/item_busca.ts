import type { NextApiRequest, NextApiResponse } from "next";
import knex from "../../../src/db/config/Database";
import { IItem } from "../../../src/db/modelagem/interfaces/IItem";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let query = knex("item").select("*");
  let resultado: IItem = await query;

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
