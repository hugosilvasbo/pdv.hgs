import type { NextApiRequest, NextApiResponse } from "next";
import knex from "../../../src/db/config/Database";
import { IItem } from "../../../src/interfaces/tables/IItem";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let query = knex("item").select("*");
  let resultado: IItem = await query;

  if (!resultado) {
    res.status(400).json({
      error: "Registros de produtos não encontrados na base de dados.",
    });
  } else {
    res.status(200).json({
      itens: resultado,
    });
  }
}
