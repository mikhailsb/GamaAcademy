const pessoa = {
    nome: "Mikhail",
    idade: 33,
    cidade: "São Paulo"
}

// Notação de ponto 

console.log(pessoa.nome)

// Notação de colchetes

console.log(pessoa['idade'])

// Como desestruturar objetos

const { nome, idade, cidade } = pessoa

console.log(cidade)