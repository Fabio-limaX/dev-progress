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
            preco: 3500,
            quantidade: 1
        },
        {
            nome: 'Coca Cola 2L',
            preco: 900,
            quantidade: 2
        },
        {
            nome: 'Sorvete',
            preco: 120,
            quantidade: 3
        }
    ]
}

let totalCompra = 0

for (let produto of cartaoFabio.produto) {
    totalCompra += produto.preco * produto.quantidade
}

console.log(`Prazer ${cartaoFabio.nome} o valor da sua conta foi ${totalCompra/100}.`)