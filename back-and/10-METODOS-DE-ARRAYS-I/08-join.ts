// join --> junta todos os elementos de um array e retorna um string

function stringInvertida(palavra: string) {
    const arrayPalavra = palavra.split('')
    const resultado = arrayPalavra.reverse().join('')

    console.log(resultado);
}

stringInvertida('Cubos Academy')

const arrayNumeros = [1, 3, 5, 6, 8]

console.log(arrayNumeros.join('-'));
