// splice --> altera um array removendo e/ou  adicionando outros elementos

const arrayPaises = ['Brasil', 'Argentina', 'Alemanha', 'Portugal', 'Polonia']

console.log(arrayPaises.splice(1,3, 'Japão', 'China'));
console.log(arrayPaises.splice(2, 0, 'Japão', 'China'));
console.log(arrayPaises);


