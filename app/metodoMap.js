function aplicarDesconto(livros) {
  const desconto = 0.3
  livrosComDesconto = livros.map(livro => {
    return { ...livro, preço: livro.preco - livro.preco * desconto }
  })
  return livrosComDesconto
}
// a função map tem que retornar alguma coisa.
//vou pegar todos o livros e vou alterar somente os preços.
// no return usamos {} para retornar um objeto
// {...livro} quando usso os ... ele vai fazer uma copia de todo nosso array


