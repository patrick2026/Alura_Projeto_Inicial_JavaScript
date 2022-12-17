const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id)
  const categoria = elementoBtn.value
  let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
  exibirOsLivrosNaTela(livrosFiltrados)
}

// btnFiltrarLivrosFront => esse nome veio do html

//getElementoById => pegando id do html

//addEventListener('click', filtarLivros) => um evento de colocar um clik.

/*document.querySelectorAll() => vai no HTML e pega todos elementos. 
O querySelectorAll()método retorna todos os elementos que correspondem a um(s) seletor(es) CSS.
O querySelectorAll()método retorna um NodeList .
O querySelectorAll()método lança uma exceção SYNTAX_ERR se o(s) seletor(es) for(em) inválido(s)*/

//document.querySelectorAll('.btn') => eu tenho uma lista de botoes e guardei tudo dentro

/*forEach => O método forEach é usado para percorrer arrays, 
mas usa uma função de modo diferente do "laço for" tradicional.
 O método forEach passa uma função de callback para cada elemento do array juntamente aos seguintes parâmetros: 
 Valor atual (obrigatório) - O valor do elemento atual do array.é um for, 
 subistitui o for, forma mas simples.*/
