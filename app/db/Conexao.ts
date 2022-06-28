import knex from "knex";
import config from "./Service";

const conexao = knex(config);

export default conexao;
