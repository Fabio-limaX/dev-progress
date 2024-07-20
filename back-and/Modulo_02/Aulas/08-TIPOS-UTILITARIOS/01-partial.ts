// Tipo Utilitario <tipo> --> resulta em um novo tipo manipulado 

// Tipo Partil <tipo> 

// Constrói um tipo com todas as propriedades Types definidas como opcionais

type Pessoa  = {
    nome: string
    email: string
    idade: number
}

type PessoaOpciobal = Partial<Pessoa>

const usuarios: Pessoa[] = []

function atualizarPessoa (pessoa: PessoaOpciobal) {

}

atualizarPessoa ({
    nome: 'fabio', 
    idade: 19
})

usuarios[usuarios.length] = {
    nome: 'Fabio',
    idade: 18,
    email: 'fabio@gmail.com'
}