type TUsuario = {
    nome:string
    idade:number
    email:string
}

const usuarios: TUsuario[] = []

function cadastrarUsuario (usuario: TUsuario) {
    usuarios[usuarios.length] = usuario
    return usuario
}

const resultado = cadastrarUsuario({
    nome: 'Fabio',
    idade: 28, 
    email: 'Fabio@gmail.com'
})

console.log(resultado)