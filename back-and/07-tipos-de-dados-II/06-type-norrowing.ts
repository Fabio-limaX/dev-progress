// Type Narrowing é muito conhecido como "Estreitamento" 
// Type Norriwing é uma técnica utilizada no javacript para deixar o mais assertivo possivel um tipo utilizado

let teste = 'fabio'
console.log(typeof teste) // Utilizar o Typeof para indentificar de que type é o elemento 

function soma1(nun1: string | number, nun2: string | number) {
    if (typeof nun1 === 'number' && typeof nun2 === 'number') {
        //return nun1 + nun2
        console.log(typeof nun1, typeof nun2)
    } else if (typeof nun1 === 'number' && typeof nun2 === 'string' ) {
        console.log(typeof nun1, typeof nun2)
    } else if (typeof nun1 === 'string' && typeof nun2 === 'number') {
        console.log(typeof nun1, typeof nun2)
    } else {
        console.log(typeof nun1, typeof nun2)
    }
}

soma1(123, 321)
soma1(123, '123')
soma1('123', 321)
soma1('123', '123')

// Refatorando o código

function soma2(nun1: string | number, nun2: string | number) {
    if (typeof nun1 === 'number' && typeof nun2 === 'number') {
        return nun1 + nun2
    } else if (typeof nun1 === 'number' && typeof nun2 === 'string' ) {
        return nun1 + Number(nun2)
    } else if (typeof nun1 === 'string' && typeof nun2 === 'number') {
        return Number(nun1) + nun2
    } else {
        return Number(nun1) + Number(nun2)
    }
}

console.log(soma2('4', '2')) // Exemplo com string 
console.log(soma2(50, 50))  // Exemplo com Number
// Não vai concatenar sempre vai somar mesmo sendo duas String pois utilizando o 
//type norrowing para identicar o tipo de dados que está sendo utilizado podendo ser um number ou string

soma2(123, 321)
soma2(123, '123')
soma2('123', 321)
soma2('123', '123')

