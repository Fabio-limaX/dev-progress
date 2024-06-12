// Readonly --> Significado é de apenas leitura

// NÃO PODE ALTERAR NENHUM TIPO DE 

type Pessoa  = {
    nome: string
    email: string
    idade: number
}

const usuarios: Readonly<Pessoa>[] = []

usuarios[usuarios.length] = {
    nome: 'Fabio',
    idade: 19,
    email: 'fabio@gmail.com'
}

usuarios[0].nome = 'kdkkakdkd' // Utilizando o Readonly no array

const usuario: Readonly<Pessoa> = {
    nome: 'Fabio',
    idade: 19,
    email: 'fabio@gmail.com'
}

usuario.nome = 'Felipe'

console.log()