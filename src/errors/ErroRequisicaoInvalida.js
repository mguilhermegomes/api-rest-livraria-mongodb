import ErroBase from "./ErroBase.js";

class ErroRequisicaoInvalida extends ErroBase {
  constructor(message = "Um ou mais dados fornecidos estão incorretos.", status = 400) {
    super(message, status);
  }
}

export default ErroRequisicaoInvalida;