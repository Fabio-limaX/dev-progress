type TNome =  string

const nome: TNome = 'Fabio'

console.log(nome)

//type para organizar os codigos
type TPessoa = {
    nome: string, 
    idade: number, 
    email: string}

const usuario: TPessoa = {
    nome:'Fabio',
    idade: 18, 
    email:'Fabio@gmail.com'
}

// Array com type junto
const usuarios: TPessoa[] = [
    { 
        nome: 'Felipe', 
        idade: 19, 
        email: 'Felipe@gmail.com'
    },
    {
        nome: 'Maria', 
        idade: 22,
        email: 'Maria@gmail.com'
    },
    {
        nome: 'Pedro', 
        idade: 30, 
        email: 'Pedro@gamil.com'
    }
]