// indexOf --> retorna o indice do elemento no array 

const arrayPessoas = [
    {
        nome: 'Ana',
        email: 'Ana@gmail.com'
    },
    {
        nome: 'Fabio',
        email: 'Fabio@gmail.com'
    },
    {
        nome: 'Pedro',
        email: 'Pedro@gmail.com'
    }
]


console.log(arrayPessoas.indexOf({
    nome: 'Fabio',
    email: 'Fabio@gmail.com'
}));

console.log(arrayPessoas[0]);
