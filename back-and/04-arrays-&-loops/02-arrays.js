const frutas = ['Banana', 'Maça', 'Abacaxi', 'Pera', 'Uva']

console.log(frutas.length)

frutas[6] = 'Melão'

console.log(frutas.length)

// tamanho - 1
console.log(frutas[frutas.length - 1])

// Ou na Variavel

let i = frutas.length - 1
console.log(frutas[i])

// o próximo indece a ser adicionado é sempre o tamanho do array
frutas[frutas.length] = 'Abacate'

console.log(frutas)