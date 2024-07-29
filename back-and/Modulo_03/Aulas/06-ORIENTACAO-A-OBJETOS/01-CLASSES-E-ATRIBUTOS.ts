class Carro {
    cor: string = ''
    marca: string = ''
    modelo: string = ''
    ano: number = 0
    potencia: number = 0
}

const fusca = new Carro()
fusca.ano = 1970
fusca.cor = 'Preto'
fusca.marca = 'Volkswagen'
fusca.modelo = 'Fusca'
fusca.potencia = 90

console.log(fusca);
