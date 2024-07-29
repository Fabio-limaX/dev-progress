type TCarrO = {
    cor: string 
    marca: string 
    modelo: string 
    ano: number 
    potencia?: number
}

class Carro2 {
    cor: string 
    marca: string 
    modelo: string 
    ano: number 
    potencia: number 

    ligado: boolean
    aceleracao: number

    constructor (Carro2: TCarrO) {
        this.cor = Carro2.cor
        this.marca = Carro2.marca
        this.modelo = Carro2.modelo
        this.ano = Carro2.ano
        this.potencia = Carro2.potencia ?? 90
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

const novoCarro1 = {
    cor: 'Preto',
    ano: 1970,
    marca: 'Volkswagen',
    modelo: 'Fusca',
    potencia: 120
}

const fusca2 = new Carro2(novoCarro)

console.log(fusca2);

fusca2.cor = 'Branco' // Alterando atributo da classe

console.log(fusca2);

console.log(fusca2.estadoDoCarro());

fusca2.ligarOuDesligar()

console.log(fusca2);

console.log(fusca2.estadoDoCarro());

fusca2.acelerar(10)
fusca2.acelerar(10)
fusca2.acelerar(10)
fusca2.acelerar(10)

console.log(fusca2);

