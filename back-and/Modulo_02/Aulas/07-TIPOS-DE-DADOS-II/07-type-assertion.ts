type TPessoa = {
    nome: string
    idade?: number
}

function saudacao(nome: string, idade: number) {
    console.log(`Meu nome é ${nome}, tenho ${idade} anos`)
}

const fabio: TPessoa = {
    nome: 'Fabio'
}

const idade = fabio.idade as number // (as) está forçando o elemento ter um tipo expecifico

//Sempre que ver um (as) em algum código sempre ter acerteza que é uma conversão para algum tipo expecifico

saudacao(fabio.nome, idade)


