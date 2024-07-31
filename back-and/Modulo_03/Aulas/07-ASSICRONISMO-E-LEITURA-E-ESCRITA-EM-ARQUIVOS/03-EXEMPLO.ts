import fs from 'fs'

console.log('Antes de ler o arquivo')

const texto1 = fs.readFileSync('./texto1.txt') // forma de ler aquivo da forma síncrona
console.log(texto1.toString())

fs.writeFileSync('./texto1.txt', 'Um novo texto para o arquivo!') // adiciona uma + uma linha para o arquivo

const texto1Editado = fs.readFileSync('./texto1.txt')
console.log(texto1Editado.toString())

console.log('Depois de ler o arquivo')

fs.writeFileSync('./texto2.txt', 'Ana, João e Maria')