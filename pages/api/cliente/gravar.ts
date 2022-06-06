import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../src/db/config/Conexao";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  res.status(200).json({
    opa: "Suave?",
  });
}
