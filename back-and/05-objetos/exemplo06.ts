const usuario = {
    nome: 'Fabio',
    email: 'Fabio@gmail.com',
    endereco: {
        rua: 'Rua B',
        numero: 7
    }
}

const { nome, email, endereco: {numero, rua} } = usuario

console.log(numero)