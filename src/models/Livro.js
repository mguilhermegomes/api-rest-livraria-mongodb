import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório"],
    },
    autor: autorSchema,
    editora: {
      type: String,
      required: [true, "O nome da editora é obrigatório"],
      enum: {
        values: ["Harper Business, Sextante, Objetiva, Maquinaria"],
        message: "A editora {VALUE} não é um valor permitido"
      }
    },
    preco: { 
      type: Number, 
      required: [true, "O preço do livro é obrigatório"],
      min: [1, "O livro não pode custar menos de 1. Valor fornecido: {VALUE}"],
      max: [10000000, "O valor {VALUE} é muito alto e não é permitido"]
    },
    paginas: {
      type: Number,
      min: [10, "O número de páginas deve estar entre 10 a 50000. Valor fornecido: {VALUE}"],
      max: [5000, "O número de páginas deve estar entre 10 a 5000. Valor fornecido: {VALUE}"],
    },
  },
  { versionKey: false },
);

const livro = mongoose.model("livros", livroSchema);

export default livro;
