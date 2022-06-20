let conexao: any;

// consigo fazer algumas tratativas...
if (true) {
  conexao = {
    client: "pg",
    version: "9.4",
    connection: {
      host: "127.0.0.1",
      port: 5432,
      user: "postgres",
      password: "postgres",
      database: "dbestudo",
    },
  };
}

export default conexao;
