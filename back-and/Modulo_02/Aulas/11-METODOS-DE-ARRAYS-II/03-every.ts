// every --> testa de todos os elementos do array passam 
// pelo teste implementado e retona verdadeiro ou falso

const numeros = [23, 4, 54, 14, 54, 36]

function every(item: number) {
    return item < 100
}

const resultado = numeros.every(every)

console.log(resultado)