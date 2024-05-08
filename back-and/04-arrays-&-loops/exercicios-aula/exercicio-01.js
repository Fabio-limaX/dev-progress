// 1. Crie um array com 5 nomes de países 
// 2. adicione um país ao fim da lista
// 3. Imprima a lista na tela 
// 4. Altere o quinto país da lista para um novo país 
// 5. Imprima a lista na tela
// 6. Imprima o último país da lista na tela 
// 7. imprima o segundo país na lista na tela 
// 8. Imprima o país de índece 2 na tela


const paises = ['Brasil', 'Argentina', 'França', 'EUA', 'Russia']

paises[paises.length] = 'Alemanha'

console.log(paises)

paises[4] = 'Polonia'

console.log(paises)

console.log(paises[paises.length - 1])
console.log(paises[1])
console.log(paises[2])