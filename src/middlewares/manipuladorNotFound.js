import ErroNaoEncontrado from "../errors/ErroNaoEncontrado.js";

function manipuladorNotFound(req, res, next) {
  const erroNotFound = new ErroNaoEncontrado();
  next(erroNotFound);
}

export default manipuladorNotFound;