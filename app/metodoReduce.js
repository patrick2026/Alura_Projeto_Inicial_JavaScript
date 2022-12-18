function calculaValorTotalDeLivrosDisponiveis(livros){
return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}







// acc => acumulador esse parametro
// toFixed(2) => colocar duas casas decimais 