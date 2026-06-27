import mongoose from "mongoose";
import ErroBase from "../errors/ErroBase.js";
import ErroValidacao from "../errors/ErroValidacao.js";
import ErroRequisicaoInvalida from "../errors/ErroRequisicaoInvalida.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError)
    return new ErroRequisicaoInvalida().enviarResposta(res);

  if (err instanceof mongoose.Error.ValidationError)
    return new ErroValidacao(err).enviarResposta(res);

  if (err instanceof ErroBase)
    return err.enviarResposta(res);
  
  return new ErroBase().enviarResposta(res);
}

export default manipuladorDeErros;