let livros = []
const endpointDaAPI =
  'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endpointDaAPI)
  livros = await res.json()
  livros = aplicarDesconto(livros)
  exibirOsLivrosNaTela(livrosComDesconto)
}

//getBucarLivrosAPI()=> ta buscando os livros da API

//async => significa que vai ser uma função assincrona

//async function getBucarLivrosAPI() => função assincrona

/* await=> para dizer que essa função precisa esperar uma promessa,
 e receber todos os livros*/

// res => resposta

/*fetch (enderecoDaAPI)=> manipular API, realizar uma requisição,
 const res = await fetch(enderecoDaAPI)*/

/* livros = await res.json() => pegar a resposta e atribuir em livros,
  a resposta da requisição(res) transforma em json*/

/*const elementoParaInserirLivros = document.getElementById('livros') 
  essa função eu estou pegando o id la no html  */
