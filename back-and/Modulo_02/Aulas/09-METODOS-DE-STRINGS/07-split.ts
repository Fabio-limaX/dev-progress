// Split --> converte uma string para um array contendo a string sepadara

const texto: string = 'Fabio Lima kdhahafaf hdjakjdfah hajajf hfjahjf'

console.log(texto)

const arrayString = texto.split('')
const arrayString2 = texto.split(' ')
const arrayString3 = texto.split('h')

console.log(arrayString)
console.log(arrayString2)
console.log(arrayString3)

console.log(arrayString3.length)