function processaBusca(query) {
  const { editora, titulo, nomeAutor, minPag, maxPag } = query;
  const busca = {};

  if (editora) {
    const regexEditora = new RegExp(editora, "i");
    busca.editora = regexEditora;
  }
  if (titulo) {
    const regexTitulo = new RegExp(titulo, "i");
    busca.titulo = regexTitulo;
  }
  if (nomeAutor) {
    const regexNomeAutor = new RegExp(nomeAutor, "i");
    busca["autor.nome"] = regexNomeAutor; // foi feito dessa forma pois "autor.nome", assim, com strings, é a sintaxe que o MongoDB entende para buscar em campos aninhados.
  } 
  if (minPag || maxPag) busca.paginas = {};
  if (minPag) busca.paginas.$gte = minPag;
  if (maxPag) busca.paginas.$lte = maxPag;

  return busca;
}

export default processaBusca;
