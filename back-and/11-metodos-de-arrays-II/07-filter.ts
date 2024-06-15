// Filter --> filtra e retorna um novo array com todos os elementos encontrados

const nomes = ['fabio', 'Ana', 'Antonio', 'Rodrigo']

const novoAraayNomes = nomes.filter((nome) => {
    return nomes.length < 2
})

console.log(novoAraayNomes)

type TPessoa = {
    nome: string
    idade: number
}

const pessoas = [
    {nome: 'Fabio', idade: 19},
    {nome: 'Ana', idade: 20},
    {nome: 'Bia', idade: 17}
]

function encontrarMaiorIdade(pessoa: TPessoa) {
    return pessoa.idade > 17
}

const maioresIdade = pessoas.filter(encontrarMaiorIdade)

console.log(maioresIdade);
