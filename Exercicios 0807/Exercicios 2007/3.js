let filmes = [
    { titulo: 'Titanic', duracao: 195, nota: 7.5 },
    { titulo: 'Django Livre', duracao: 'xxx', nota: 8.5 },
    { titulo: 'Janela Secreta', duracao: 'xxx', nota: 8.2 },
    { titulo: 'SEVEN', duracao: 'xxx', nota: 9.1 },
    { titulo: 'The Avengers', duracao: 203, nota: 3.5 },
    { titulo: 'Bean', duracao: 90, nota: 3.5 }
]

let goodfilms = filmes.filter(({ nota }) => nota >= 8)
console.log(goodfilms)
let badFilms = filmes.filter(({ nota }) => nota < 8)
console.log(badFilms)
