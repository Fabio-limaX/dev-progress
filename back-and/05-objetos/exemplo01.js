const nome = 'Felipe'
const idade = 33
const temCNH = true

const usuario = { 
    nome: 'Fábio',
    Idade: 18, 
    temCNH: true, 
    habilidades: ['JS', 'PHP', 'Java', 'HTML']
}

// usuario['nome'][2] ==> acessa uma propriedade de um objeto
// usuario.nome ==> acessa uma propriedade de um objeto
// usuario['teste'] ==> retorna underfined pois a propriedade não foi definida

usuario.nome = 'Fábio lima'

usuario.email = 'Fabio@gmail.com'

console.log(`Meu nome é ${usuario.nome} e tenho ${usuario.Idade} anos.`)