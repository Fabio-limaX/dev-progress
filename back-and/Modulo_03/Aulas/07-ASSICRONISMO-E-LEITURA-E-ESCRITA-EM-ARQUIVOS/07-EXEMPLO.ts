import fs from 'fs/promises'

async function principal(){
	// const bancodedados = await fs.readFile('./bancodedados.json')
	// console.log(bancodedados)

	await fs.writeFile('./teste.txt', 'Guido Cerqueira')

	const arquivo = await fs.readFile('teste.txt')

	console.log(arquivo.toString())
}
principal()