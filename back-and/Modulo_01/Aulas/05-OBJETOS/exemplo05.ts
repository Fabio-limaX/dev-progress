//type TCarro = {
  //  modelo: string
  //  marca: string
  //  ano: number
  //  cor?: string
//}

// para fazer ser um  tipo opcional é so colocar o cor?: no Type

//const carro: TCarro = {
//   modelo: 'Pálio',
//    marca: 'Fiat',
//   ano: 2000,
//   cor: 'Vermelho'
//}

//console.log(carro)

type TPessoas = {
    nome: string,
    senha: number
}

const fila = ['Guido', 'João', 'Maria', 'Pedro', 'Fabio', 'Ana']

const pessoas: TPessoas[] = []

for (let i = 0; i < fila.length; i++) {
    pessoas[i] = {
        nome: fila[i],
        senha: i++
    }
}

console.log(pessoas)
