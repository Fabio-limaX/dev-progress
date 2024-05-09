const usuario = []

function cadastroUsuario (nome, email, idade) {
    usuarios[usuarios.length] = {
        nome, email, idade
    }
}

cadastroUsuario('Fabio', 'Fabio@gmail.com', 18)

console.log(usuario)

cadastroUsuario('Pedro', 'Pedro@gmail.com', 26)

console.log(usuario)

function cadastroUsuario (usuario) {
    usuarios[usuarios.length] = {
        nome: usuario.nome, 
        email: usuario.email, 
        idade: usuario.idade
    }
}

cadastroUsuario({
    nome: 'Fabio',
    email: 'Fabio@gmail.com',
    idade: 33
})

console.log(usuario)

const maria = {
    nome: 'Maria',
    email: 'Maria@gmail.com',
    idade: 22
}

cadastroUsuario(maria)

console.log(usuario)