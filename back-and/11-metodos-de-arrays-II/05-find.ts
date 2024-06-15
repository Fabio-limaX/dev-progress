// find --> busca um elemento em um array e retorna o elemento, caso exista

import { log } from "console";

const pessoas = [
    {nome: 'Fabio', idade: 19},
    {nome: 'Ana', idade: 20},
    {nome: 'Bia', idade: 17}
]

const pessoaEncontrada = pessoas.find((pessoa) => {
    return pessoa.nome === 'Ana'
})

console.log(pessoaEncontrada);

const numeros = [1, 27, 384, 848, 64]

const responsta = numeros.find(function(numero) {
    return numero === 848
})

if (responsta) {
    console.log('Número encontrado');
} else {
    console.log('Não entrontrado');
}

console.log(responsta);
