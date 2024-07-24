const matriz = [
    [3, 6, 8],
    [3, 9, 23],
    [54, 21, 1]
]

const array = matriz.reduce(function(acumulador, valorAtual, indice, array){
    return [...acumulador, ...valorAtual]
}, [])