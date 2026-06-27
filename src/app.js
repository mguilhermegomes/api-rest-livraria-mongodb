import express from "express";
import conectarDataBase from "./config/dbConnect.js";
import routes from "./routes/routes.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipuladorNotFound from "./middlewares/manipuladorNotFound.js";

const conexao = await conectarDataBase();

if (!conexao) {
  console.log("Não foi possível estabelecer uma conexão com o banco de dados.");
  console.log("Processo encerrado.");
  process.exit(1);
}

const app = express();

app.use(express.json());
routes(app);
app.use(manipuladorNotFound);
app.use(manipuladorDeErros);

export default app;
