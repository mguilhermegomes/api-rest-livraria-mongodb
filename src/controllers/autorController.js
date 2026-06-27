import ErroNaoEncontrado from "../errors/ErroNaoEncontrado.js";
import { autor } from "../models/index.js";
import { livro } from "../models/index.js";

class AutorController {
  static listarAutores(req, res, next) {
    try {
      const listaAutores = autor.find();
      req.resultado = { busca: listaAutores, message: "Não há autores cadastrados." };
      next();
    } catch (err) {
      next(err);
    }
  }

  static async listarAutorPorId(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      return autorEncontrado !== null
        ? res.status(200).json(autorEncontrado)
        : next(new ErroNaoEncontrado("ID do autor não encontrado."));
    } catch (err) {
      next(err);
    }
  }

  static async listarLivrosDoAutor(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      if (autorEncontrado === null) return next(new ErroNaoEncontrado("ID do autor não encontrado."));

      const livrosEncontrados = await livro.find({ "autor._id": id });
      return livrosEncontrados.length > 0
        ? res.status(200).json(livrosEncontrados)
        : next(new ErroNaoEncontrado("Nenhum livro cadastrado para o autor especificado."));
    } catch (err) { 
      next(err);
    }
  }

  static async cadastrarAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      return res
        .status(201)
        .json({
          message: "Autor cadastrado com sucesso!",
          novoAutor: novoAutor,
        });
    } catch (err) {
      next(err);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findByIdAndUpdate(id, req.body);
      return autorEncontrado !== null
        ? res.status(200).send("Autor atualizado com sucesso!")
        : next(new ErroNaoEncontrado("ID do autor não encontrado."));
    } catch (err) {
      next(err);
    }
  }

  static async deletarAutor(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findByIdAndDelete(id);
      return autorEncontrado !== null
        ? res.status(200).send("Autor deletado com sucesso!")
        : next(new ErroNaoEncontrado("ID do autor não encontrado."));
    } catch (err) {
      next(err);
    }
  }
}

export default AutorController;
