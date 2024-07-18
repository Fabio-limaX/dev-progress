//Assim como podemos unir tipos, tambem podemos fazer um conjuntos de tipos em um operador que permite que faça a mescla de um tipo com outro

//let nome: string & number // nunca vai acontecer vai apresentar um never pois não tem como juntar um number com string
//nome = 1234

type TUsuario = {
    nome: string
    email: string
    idade: number
}

type TEndereco = {
    rua: string
    numero: number
    cidade: string
}

type TUsuarioEndereco = TUsuario & TEndereco // Criação de um conjunto de dois types e fazendo a mesclagem com & comercial!

const usuarios: TUsuarioEndereco[] = [
    {
        nome: 'fabio',
        email: 'fabio@gmail.com',
        idade: 19,
        rua: 'Rua barreto de Menezes',
        numero: 540,
        cidade: 'Recife'
    }
]
