
// Required é o contrario do partial deixando o tudo obrigatorio

type Pessoa  = {
    nome: string
    email: string
    idade?: number
}



const usuarios: Pessoa[] = []

type pssoaObrigatoria = Required<Pessoa>

function CadastrarPessoa (pessoa:  Required<Pessoa>) {
    // cadastra um usuario
}

function atualizarPessoa (pessoa: Pessoa) {
    // Atualiza um usuario
}

atualizarPessoa ({
    nome: 'fabio', 
    idade: 19,
    email: 'fabio@gmail.com'
})

CadastrarPessoa({

})

usuarios[usuarios.length] = {
    nome: 'Fabio',
    idade: 19,
    email: 'fabio@gmail.com'
}