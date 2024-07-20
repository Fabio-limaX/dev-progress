//Criar uma lista de países com 5 
//Adicionar um país ao final da lista
//Imprimir a lista na tela
//Remover um país do final da lista
//Adicionar um país no início da lista
//Remover um país do início da lista
//Imprimir o último país da lista na tela
//Imprimir o segundo país da lista na tela

const arrayPaises = ['Brasil', 'Argentina', 'Alemanha', 'Portugal']

arrayPaises.push('Equador')

console.log(arrayPaises);

arrayPaises.pop()

console.log(arrayPaises);

arrayPaises.unshift('Polonia')

console.log(arrayPaises);

arrayPaises.shift()

console.log(arrayPaises);

console.log(arrayPaises[arrayPaises.length - 1]);
console.log(arrayPaises[2]);
console.log(arrayPaises[2]);