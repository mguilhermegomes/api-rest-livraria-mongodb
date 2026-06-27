import ErroRequisicaoInvalida from "./ErroRequisicaoInvalida.js";

class ErroValidacao extends ErroRequisicaoInvalida {
  constructor(err) {
    const mensagemErro = Object.values(err.errors).map((error) => error.message).join("; ");
    super(`Os seguintes erros foram encontrados: ${mensagemErro}`);
  }
}

export default ErroValidacao;