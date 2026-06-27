import { autor } from "../models/index.js";
import { livro } from "../models/index.js";
import ErroNaoEncontrado from "../errors/ErroNaoEncontrado.js";
import processaBusca from "./processaBusca.js";

class LivroController {
  static listarLivros(req, res, next) {
    try {
      const listaLivros = livro.find();
      req.resultado = { busca: listaLivros, message: "Nenhum livro cadastrado." };
      next();
    } catch (err) {
      next(err);
    }
  }

  static async listarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      return livroEncontrado !== null
        ? res.status(200).json(livroEncontrado)
        : next(new ErroNaoEncontrado("ID do livro não encontrado"));
    } catch (err) {
      next(err);
    }
  }

  static listarLivroPorFiltro(req, res, next) {
    const busca = processaBusca(req.query);

    try {
      const livrosEncontrados = livro.find(busca);
      req.resultado = { busca: livrosEncontrados, message: "Nenhum livro encontrado." };
      next();
    } catch (err) {
      next(err);
    }
  }

  static async cadastrarLivro(req, res, next) {
    const novoLivroDados = req.body;
    const idAutor = novoLivroDados.autor;

    try {
      const autorEncontrado = await autor.findById(idAutor);
      if (autorEncontrado === null)
        return next(new ErroNaoEncontrado("ID de autor não localizado"));

      const novoLivro = await livro.create({
        ...novoLivroDados,
        autor: { ...autorEncontrado._doc }
      });
      return res.status(201).json({ message: "Livro cadastrado com sucesso!", livro: novoLivro });
    } catch (err) {
      next(err);
    }
  }

  static async atualizarLivro(req, res, next) {
    const livroAtualizadoDados = req.body;
    const idAutor = livroAtualizadoDados.autor;
    const idLivro = req.params.id;

    try {
      const livroEncontrado = await livro.findById(idLivro);
      if (livroEncontrado === null)
        return next(new ErroNaoEncontrado("ID de livro não encontrado"));

      const autorEncontrado = await autor.findById(idAutor);
      if (autorEncontrado === null)
        return next(new ErroNaoEncontrado("ID de autor não encontrado"));

      await livro.findByIdAndUpdate(idLivro, {
        ...livroAtualizadoDados,
        autor: { ...autorEncontrado._doc }
      });
      return res.status(200).send("Livro atualizado com sucesso!");
    } catch (err) {
      next(err);
    }
  }

  static async deletarLivro(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findByIdAndDelete(id);
      return livroEncontrado !== null
        ? res.status(200).send("Livro deletado com sucesso!")
        : next(new ErroNaoEncontrado("ID de livro não encontrado"));
    } catch (err) {
      next(err);
    }
  }
}

export default LivroController;