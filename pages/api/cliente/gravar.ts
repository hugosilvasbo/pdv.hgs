import type { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
import db from "../../../src/db/config/Conexao";
import { IPessoa } from "../../../src/db/modelagem/interfaces/IPessoa";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<any>
) {
  const { body} = request; // recebe o valor passado via post.
  console.log({ resultado_obtido: body });

  response.status(200).json({
    opa: "Suave?",
  });
}
