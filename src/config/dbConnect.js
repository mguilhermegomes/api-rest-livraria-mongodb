import mongoose from "mongoose";

async function conectarDataBase() {
  let conexao;
  console.log("Iniciando conexão com o banco...");

  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION_STRING);
    conexao = mongoose.connection;
    console.log("Conexão com o banco estabelecida com sucesso.");

    conexao.on("error", (err) => {
      console.log("Erro critico na comunicação com o banco:", err);
    });
  } catch (err) {
    console.log("Falha ao iniciar conexão com o banco:", err);
  }

  return conexao;
}

export default conectarDataBase;