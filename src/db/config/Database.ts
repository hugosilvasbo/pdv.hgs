const knex = require("knex")({
  client: "pg",
  version: "9.4",
  connection: {
    host: "127.0.0.1",
    port: 5433,
    user: "postgres",
    password: "postgres",
    database: "dbestudo",
  },
});

export default knex;