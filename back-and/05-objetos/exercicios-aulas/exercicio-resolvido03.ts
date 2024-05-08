type TProduto = {
    nome: string
    preco: number
    quantidade: number
}

type TCliente = {
    nome: string
    idade: number
    produto: TProduto[]
}

const cartaoFabio: TCliente = {
    nome: 'Fábio',
    idade: 18,
    produto: [
        {
            nome: 'Pizza charque',
            preco: 9500,
            quantidade: 1
        },
        {
            nome: 'Coca Cola lata',
            preco: 500,
            quantidade: 2
        },
        {
            nome: 'Pudin',
            preco: 2000,
            quantidade: 3
        }
    ]
}

console.log(cartaoFabio)

