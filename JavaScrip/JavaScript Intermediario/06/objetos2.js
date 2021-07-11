const filmes = [
    {
        id: 1,
        titulo: "Dilema das Redes",
        descricao: "Um documentário sobre as redes sociais",
        duracao: 120
    },
    {
        id: 2,
        titulo: "Us",
        descricao: "Terror sinistro",
        duracao: 120
    },
    {
        id: 3,
        titulo: "Corra",
        descricao: "Suspensão foda",
        duracao: 120
    },
]

const [{id, titulo, descricao, duracao}] = filmes


console.log(titulo)

filmes.map(filme=> console.log(filme.descricao))