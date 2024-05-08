// Crie um array de números aleatórios e faça um programa 
// que calcule e imprima na tela a soma dos itens de um array.
// Requesitos: usar o loop for tradicinal

const numeros = [1, 34, 89, 23, 2, 4]

let resultado = 0 

for (let i = 0; i < numeros.length; i++) {
    resultado += numeros[i]
}

console.log(resultado)
