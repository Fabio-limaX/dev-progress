//Função em propriedades de objetos (métodos)

// this - Representa esse Objeto 

type TPessoa = {
    nome: string
    sobrenome: string
    nomeCompleto: () ==> void
}

type TPessoa2 {
    nome: string
    sobrenome: string
    nomeCompleto: (idade: number) ==> void
}

const pessoa: TPessoa = {
    nome: 'Fabio',
    sobrenome: 'lima',
    nomeCompleto: function () {
        console.log(`${pessoa.nome} ${pessoa.sobrenome}`)
    }
}

pessoa.nomeCompleto()

const pessoa2: TPessoa2 = {
    nome: 'Fabio',
    sobrenome: 'lima',
    nomeCompleto: function (idade: number) {
        console.log(`${this.nome} ${this.sobrenome} ${idade} anos `)
    }
}

pessoa2.nomeCompleto(18)