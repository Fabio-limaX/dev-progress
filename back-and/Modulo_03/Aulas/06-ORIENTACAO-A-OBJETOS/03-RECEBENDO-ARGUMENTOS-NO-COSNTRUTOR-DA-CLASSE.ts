type TCarro = {
    cor: string 
    marca: string 
    modelo: string 
    ano: number 
    potencia?: number
}

class Carro1 {
    cor: string 
    marca: string 
    modelo: string 
    ano: number 
    potencia: number 

    constructor (Carro1: TCarro) {
        this.cor = Carro1.cor
        this.marca = Carro1.marca
        this.modelo = Carro1.modelo
        this.ano = Carro1.ano
        this.potencia = Carro1.potencia ?? 90
    }

}

const novoCarro = {
    cor: 'Preto',
    ano: 1970,
    marca: 'Volkswagen',
    modelo: 'Fusca',
    potencia: 120
}

const Fusca = new Carro1(novoCarro)

console.log(fusca);

fusca.cor = 'Branco' // Alterando atributo da classe

console.log(fusca);
