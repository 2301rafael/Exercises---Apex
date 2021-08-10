let convidados = [
    { nome: "felipe", vip: false },
    { nome: "danIEl", vip: true },
    { nome: "João", vip: true }
]

let bigNames = convidados.map(({ nome }) => nome = nome.toUpperCase())
console.log(bigNames)
