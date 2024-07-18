//Tipagem de funções com TypeScript

function soma(numero1: number, numero2: number) {
    return numero1 + numero2
}

console.log(soma(6,12))

// Tipagem de retorno de funções 

const soma2 = (numero3: number, numero4: number) => {
    return numero3 + numero4
}

console.log(soma2(10,10))

function nomeCompleto(nome: string, sobrenome:string): string {
    return `${nome} ${sobrenome}`
}

//Metodo arrow function 
const nomeCompleto2 = (nome: string, sobrenome:string): string => {
    return `${nome} ${sobrenome}`
}


console.log(nomeCompleto('Fabio', 'Lima'))
nomeCompleto2('Pedro', 'Moura')