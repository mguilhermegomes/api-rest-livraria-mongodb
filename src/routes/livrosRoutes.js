import express from "express";
import LivroController from "../controllers/livroController.js";
import paginar from "../middlewares/manipuladorPaginacao.js";

const livrosRoutes = express.Router();

livrosRoutes.get("/", LivroController.listarLivros, paginar);
livrosRoutes.get("/busca", LivroController.listarLivroPorFiltro, paginar);
livrosRoutes.get("/:id", LivroController.listarLivroPorId);
livrosRoutes.post("/", LivroController.cadastrarLivro);
livrosRoutes.put("/:id", LivroController.atualizarLivro);
livrosRoutes.delete("/:id", LivroController.deletarLivro);

export default livrosRoutes;