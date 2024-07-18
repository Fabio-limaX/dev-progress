const indentificador: number | string | '123' = 123

//type TPessoa = {
 //   nome: string
 //   email: string
//}

type TPessoa2 = {
    nome: string
    email: string
    idade?: number | string // passar um ? para ficar opcional o type number de idade!
}

// Para unir os dois tipos em uma unica tipagem typescript, apenas colocando uma | ex: const usuarios: TPessoa[] | TPessoa2[]

const usuarios: TPessoa2[] = []

usuarios[usuarios.length] = {
    nome: 'Fabio',
    email: 'fabio@gmail.com',
    idade: 19
}

console.log(usuarios[0].idade)