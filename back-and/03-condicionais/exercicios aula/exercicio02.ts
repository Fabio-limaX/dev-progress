// O sistema de um instituição financeira apresentou um problema ao 
// imprimir a mensagem do saldo de um clearInterval. O saldo era de 1 real e o sistema estava
// imprimindo a mensagem "Seu saldo pe R$ 1 reais" com o nome no plural, mas sabemos 
// que o correto seria "1 real" e seria no plural  apeas se o saldo fosse maior que 1.
// crie um origrama que receba o saldo, e imprima a mensagem do saldo de acordo com seu valor.

// Meu Código
const saldo:number = 2

if (saldo === 1) {
    console.log(`Seu saldo é R$ ${saldo} Real`)
} else {
    console.log(`Seu saldo é R$ ${saldo} Reais`)
}

// Código do professor Guido

const unidade = saldo === 1 ? 'real' : 'reais'

console.log(`Seu saldo é R$ ${saldo} ${unidade}`)