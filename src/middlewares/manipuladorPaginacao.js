import ErroRequisicaoInvalida from "../errors/ErroRequisicaoInvalida.js";
import ErroNaoEncontrado from "../errors/ErroNaoEncontrado.js";

async function paginar(req, res, next) {
  const { pagina = 1, limite = 3, ordenacao = "_id:-1" } = req.query;
    
  const [campoOrdem, ordem] = ordenacao.split(":");
    
  const paginaFloor = Math.floor(pagina);
  const limiteFloor = Math.floor(limite);
  const ordemFloor = Math.floor(ordem);
    
  if (isNaN(pagina) || isNaN(limite) || paginaFloor <= 0 || limiteFloor <= 0)
    return next(new ErroRequisicaoInvalida());

  try {
    const { busca, message } = req.resultado;
    const resultadoLista = await busca
      .sort({ [campoOrdem]: ordemFloor })
      .skip((pagina - 1) * limite)
      .limit(limite);
    return resultadoLista.length > 0
      ? res.status(200).json(resultadoLista)
      : next(new ErroNaoEncontrado(message));
  } catch (err) {
    next(err);
  }
}

export default paginar;