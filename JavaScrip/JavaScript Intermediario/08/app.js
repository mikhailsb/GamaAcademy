const livros = require('./database.js')

//console.log(livros)

// pegar o input por categoria

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N ')

// Se for Sim, mastra as categorias disponíveis, pergunta qual categoria ela escolhe
// Se não, mostra todos os livros em ordem crescente pela quantidade de páginas

if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:')
    console.log('/Produtividade e estilo de vida','/História brasileira','/Américas','/Estilo de vida','/Tecnologia')

    const entradaCategoria = readline.question('Qual categoria você escolhe: ')
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else{
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todos os livros disponíveis: ')
    console.table(livrosOrdenados)
}