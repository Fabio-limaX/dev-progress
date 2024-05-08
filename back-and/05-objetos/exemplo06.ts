//Desestruturação de um objeto
//Sintaxe para desestruturação: const { propriedade1, propriedade2 } = objeto
//Extraindo informações de um objeto e armazenando em variáveis
//Exemplo prático de desestruturação com objeto contendo usuários
//Acessando propriedades de um objeto desestruturado
//Utilização de desestruturação com objeto dentro de objeto
//Exemplo prático com objeto de endereço
//Acessando propriedades de um objeto interno desestruturado

const usuario = {
    nome: 'Fabio',
    email: 'Fabio@gmail.com',
    endereco: {
        rua: 'Rua B',
        numero: 7
    }
}

const { nome, email, endereco: {numero, rua} } = usuario

console.log(numero)