// Se a comparação retornar um valor negativo, o item 1 vem antes do item 2
// Se a comparação retornar um valor negativo, o item 2 vem antes do item 1
// Se a comparação retornar 0, nenhum item sofre alteração

const numeros = [5, 3, 45, 67, 234, 1, 2, 3]

//Ordenação crescente 
numeros.sort(function (item1, item2) {
    if (item1 > item2) {
        return 1
    }
    
    if (item1 < item2) {
        return -1
    } 

    return 0
})

console.log(numeros);

const numeros2 = [5, 3, 45, 67, 234, 1, 2, 3]

//Ordenação decrescente 
numeros2.sort(function (item1, item2) {
    if (item1 < item2) {
        return -1
    }
    
    if (item1 > item2) {
        return 1
    } 

    return 0
})

console.log(numeros2);


const numeros3 = [5, 3, 45, 67, 234, 1, 2, 3]

//Ordenação crescente - forma simples 
numeros3.sort((item1, item2) => {
    return item1 - item2
})

console.log(numeros3);

const numeros4 = [5, 3, 45, 67, 234, 1, 2, 3]

//Ordenação Decrescente - forma simples 
numeros4.sort((item1, item2) => {
    return item2 - item1
})

console.log(numeros4);