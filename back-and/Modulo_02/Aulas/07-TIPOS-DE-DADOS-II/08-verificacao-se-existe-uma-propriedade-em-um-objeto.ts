type TPessoa = {
    nome: string
    idade?: number
    email?: string
}

function saudacao(nome: string, idade: number) {
    console.log(`Meu nome é ${nome}, tenho ${idade} anos`)
}

const fabio: TPessoa = {
    nome: 'Fabio'
}

const felipe: TPessoa = {
    nome: 'Felipe',
    idade: 19,
    email: 'felipe@gmail.com'
}

console.log('idade' in fabio) // Utilizar o (in) para fazer uma verificação de elemento se é true ou false
console.log('email' in felipe) // Utilizar o (in) para fazer uma verificação de elemento se é true ou false 