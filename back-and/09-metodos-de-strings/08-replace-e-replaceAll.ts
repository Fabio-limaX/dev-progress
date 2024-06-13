// replace --> substitui a primeira correspondencia de uma string por outra
// replaceAll --> substitui a primeira correspondencia de uma string por outra

const texto: string = 'Eu adoro a cubos academy e adoro as aulas de logica'

console.log(texto)

const textoSubstituido = texto.replace('adoro', 'amo') // Substitui a primeira palavra encontrada

const textoSubstituido2 = texto.replaceAll('adoro', 'amo') // Substitui todas as palavras | só existe a parti do ES2022

console.log(textoSubstituido)
console.log(textoSubstituido2)