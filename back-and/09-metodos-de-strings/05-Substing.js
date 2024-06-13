// Substring --> retorna a parte de uma string a partir do indice incial e final (opcional)

const texto = 'Fabio Lima'

console.log(texto)

const parteDaString = texto.trim().substring(6, 11)
const parteDaString2 = texto.substring(texto.length - 4)
const parteDaString3 = texto.substring(15)

console.log(parteDaString)
console.log(parteDaString2)
console.log(parteDaString3)