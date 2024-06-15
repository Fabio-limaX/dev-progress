// map --> percorrer todos elementos de um array
//e retornar um novo array com o formato implementado

const nomes = ['Fabio', 'Antonio', 'Pedro', 'Joana']

const arrayPessoas = nomes.map((nome) => {
    return {
        nome
    }
})

const pessoas = [
    {nome: 'Fabio', sobrenome: 'Lima', idade: 40},
    {nome: 'Ana', sobrenome: 'Carla', idade: 33},
    {nome: 'Bia', sobrenome: 'Beatriz', idade: 25},
    {nome: 'João', sobrenome: 'Victor', idade: 22},
    {nome: 'Paulo', sobrenome: 'Gomes', idade: 17}
]

const novoArray = pessoas.map(function(elemento) {
    return {
        nomeCompleto: `${elemento.nome} ${elemento.sobrenome}`, 
        idade: elemento.idade
    }
})

console.log(novoArray);
