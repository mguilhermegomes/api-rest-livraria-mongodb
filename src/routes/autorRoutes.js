import express from "express";
import AutorController from "../controllers/autorController.js";
import paginar from "../middlewares/manipuladorPaginacao.js";

const autorRoutes = express.Router();

autorRoutes.get("/", AutorController.listarAutores, paginar);
autorRoutes.get("/:id", AutorController.listarAutorPorId);
autorRoutes.get("/:id/livros", AutorController.listarLivrosDoAutor);
autorRoutes.post("/", AutorController.cadastrarAutor);
autorRoutes.put("/:id", AutorController.atualizarAutor);
autorRoutes.delete("/:id", AutorController.deletarAutor);

export default autorRoutes;