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

    ligado: boolean
    aceleracao: number

    constructor (Carro: TCarro) {
        this.cor = Carro.cor
        this.marca = Carro.marca
        this.modelo = Carro.modelo
        this.ano = Carro.ano
        this.potencia = Carro.potencia ?? 90
        this.ligado = false
        this.aceleracao = 0
    }

    ligarOuDesligar(): void{
        this.ligado = !this.ligado
    }

    acelerar(rpm: number): void{
        this.aceleracao += rpm 
    }

    estadoDoCarro(){
        return this.ligado ? 'O carro está Ligado' : 'O carro está desligado'
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

console.log(fusca.estadoDoCarro());

fusca.ligarOuDesligar()

console.log(fusca);

console.log(fusca.estadoDoCarro());

fusca.acelerar(10)
fusca.acelerar(10)
fusca.acelerar(10)
fusca.acelerar(10)

console.log(fusca);

