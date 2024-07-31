import fs from 'fs/promises'

console.log('Antes de ler o arquivo')

const texto1 = fs.readFile('./texto1.txt')

texto1.then((resultado) => {
	console.log(resultado.toString())
})

const texto2 = fs.readFile('./texto2.txt')

texto2.then((resultado) => {
	console.log(resultado.toString())
})

fs.writeFile('./teste.txt', 'Guido Cerqueira')

const teste = fs.readFile('./teste.txt')
teste.then((resultado) => {
	console.log(resultado)
}).catch((erro) => {
	console.log(erro.message)
})

console.log('Depois de ler o arquivo')