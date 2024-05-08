// rest ==> resto ou sobra

const pessoas = ['Fabio', 'Pedro', 'Maria']

const [item1, ...newArray] = pessoas

const usuario = {
    nome: 'Fabio',
    email: 'Fabio@gmail.com',
    idade: 15
}

const {idade, ...neyObjeto} = usuario

console.log(newArray)

// spread ==> espalhamento

const comidas = ['Patel', 'Banana', 'Bolo']

const novasComidas = [...comidas, 'Feijoada', 'Bolacha']

console.log(novasComidas)

const carro = {
    nome: 'Dodge Ram',
    ano: 2020,
    cor: 'Preto'
}

const informacoesCarros = {
    portas: 4,
    potencia: 600
}

const carroCompleto = {
    ...carro,
    ...informacoesCarros,
    marca: 'Ford',
    modelo: 'dodge ram 3500'
}

console.log(carroCompleto)