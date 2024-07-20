// Trim --> remove todos os espaçoes do inicio e do fim de uma string

const texto = '  Alguma coisa    '

console.log(texto.length)

const textoSemEspaco = texto.trim()

console.log(textoSemEspaco.length)


const usuario = {
    email: 'Fabio@gmail.com',
    senha: 'abc123'
}


const email = ' Fabio@gmail.com'
const senha = 'abc123'

console.log(usuario.email === email.trim())
