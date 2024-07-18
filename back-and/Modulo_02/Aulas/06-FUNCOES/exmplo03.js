function nomecompleto(nome, sobrenome) {
    const nomeUsuario = `${nome} ${sobrenome}`
    return nomeUsuario
}

const imprimir = nomecompleto('Fabio', 'Lima')

console.log(imprimir)

function verificaIdade(idade) {
    if (idade <= 17) {
        return 'Não é maior de idade'
    }

    return 'É maior de idade'
}

console.log( verificaIdade(19))


//array function 

const verificaIdade2 = () => {
    if (idade <= 17) {
        return 'Não é maior de idade'
    }

    return 'É maior de idade'
}

console.log(verificaIdade2(17))