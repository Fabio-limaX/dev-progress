const numeros = [0, 1, 2, 3, 4]

const resultados = numeros.reduce((acumulador, valorAtual, index, array) => {
    return acumulador + valorAtual
})

const resultado = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 100)

