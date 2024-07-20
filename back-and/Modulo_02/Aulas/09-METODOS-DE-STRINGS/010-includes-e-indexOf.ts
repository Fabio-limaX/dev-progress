// indexOf --> retorna o indece da correspondencia em uma string 
// includes --> retorna verdadeiro ou falso caso encontre ou não a correspondencia em uma string

const texto: string = 'Eu adoro a cubos academy e adoro as aulas de logica'

console.log(texto)

const indeceDaCorrespondencia = texto.indexOf('Academy')


if (indeceDaCorrespondencia !== -1) {
    console.log('Encontrou a palavra')
} else {
    console.log('Não encontrou a palavra')
}

console.log(indeceDaCorrespondencia)

const existeConrrenpondencia = texto.includes('aula')

console.log(existeConrrenpondencia)
