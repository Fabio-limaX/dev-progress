// findIndex --> busca um elemento em um array e retorna o indice, caso exista
// ou -1 caso não encontre.

const pessoas = [
    {nome: 'Fabio', idade: 19},
    {nome: 'Ana', idade: 20},
    {nome: 'Bia', idade: 17}
]

const pessoaEncontrada = pessoas.findIndex((pessoa) => {
    return pessoa.nome === 'Ana'
})

console.log(pessoaEncontrada);

const numeros = [1, 27, 384, 848, 64]

const responsta = numeros.findIndex(function(numero) {
    return numero === 848
})

if (responsta !== -1) {
    console.log('Número encontrado');
} else {
    console.log('Não entrontrado');
}

console.log(responsta);
