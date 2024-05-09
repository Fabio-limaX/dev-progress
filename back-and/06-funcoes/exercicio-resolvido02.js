function verificaIdade(idade) {
    if (idade <= 21) {
        return 'Jovem'
    } else if (idade <= 65) {
        return 'Adulto(a)'
    } else {
        return 'Idoso(a)'
    }
}

console.log(verificaIdade(22))
console.log(verificaIdade(31))
console.log(verificaIdade(71))

// Maneira do arrow function

const verificaIdade2 = (idade) => {
    if (idade <= 21) {
        return 'Jovem'
    } if (idade <= 65) {
        return 'Adulto(a)'
    } 

    return 'Idoso(a)'

}

console.log(verificaIdade(22))
console.log(verificaIdade(31))
console.log(verificaIdade(71))