let lista = [10, 18, 1, 15, 2, 12, 21, 4, 33, 100]
let vinteMais = lista.filter((item) => item % 2 == 0).map((item) => item * 2).filter((item) => item > 20)
console.log(vinteMais)