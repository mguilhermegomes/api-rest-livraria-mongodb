import mongoose from "mongoose";

export const autorSchema = mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: [true, "O nome do autor é obrigatório"] },
    nacionalidade: { type: String },
  },
  { versionKey: false },
);

export const autor = mongoose.model("autores", autorSchema);
