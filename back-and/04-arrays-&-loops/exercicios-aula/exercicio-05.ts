// Faça um programa que conta quantas letras "a" existem 
// numa derterminada palavra. Imprima o resultado na tela 

const Palavra: string = 'Banana'

let contador = 0

for (let letra of palavra) {
    if (letra === 'a') {
        contador += 1
    }
}

console.log(contador)

