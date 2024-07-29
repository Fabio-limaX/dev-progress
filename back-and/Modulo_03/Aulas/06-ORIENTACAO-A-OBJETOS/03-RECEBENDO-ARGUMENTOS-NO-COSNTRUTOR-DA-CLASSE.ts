type TCarro = {
    cor: string 
    marca: string 
    modelo: string 
    ano: number 
    potencia?: number
}

class Carro {
    cor: string 
    marca: string 
    modelo: string 
    ano: number 
    potencia: number 

    constructor (Carro: TCarro) {
        this.cor = Carro.cor
        this.marca = Carro.marca
        this.modelo = Carro.modelo
        this.ano = Carro.ano
        this.potencia = Carro.potencia ?? 90
    }

}

const novoCarro = {
    cor: 'Preto',
    ano: 1970,
    marca: 'Volkswagen',
    modelo: 'Fusca',
    potencia: 120
}

const fusca = new Carro(novoCarro)

console.log(fusca);

fusca.cor = 'Branco' // Alterando atributo da classe

console.log(fusca);
