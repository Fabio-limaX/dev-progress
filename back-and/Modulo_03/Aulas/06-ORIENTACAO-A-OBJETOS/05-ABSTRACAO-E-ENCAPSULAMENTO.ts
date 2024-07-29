type TCarro = {
    cor: string 
    marca: string 
    modelo: string 
    ano: number 
    potencia?: number
}


// Abstração
class Carro{
    public cor: string 
    private marca: string 
    private modelo: string 
    private ano: number 
    private potencia: number 

    private ligado: boolean
    private aceleracao: number

    public constructor (Carro: TCarro) {
        this.cor = Carro.cor
        this.marca = Carro.marca
        this.modelo = Carro.modelo
        this.ano = Carro.ano
        this.potencia = Carro.potencia ?? 90
        this.ligado = false
        this.aceleracao = 0
    }

    public ligarOuDesligar(): void{
        if (this.ligado) {
            this.desacelerar()
            this.ligado = false
        } else {
            this.ligado = true
        }
    }

    public acelerar(rpm: number): void{
        this.aceleracao += rpm 
    }

    public estadoDoCarro(){
        return this.ligado ? 'O carro está Ligado' : 'O carro está desligado'
    }

    public turboCarro (cv: number) {
        this.potencia += cv
    }

    private desacelerar(){
        this.aceleracao = 0
    }

}

const palio = new Carro({
    cor: 'Prata',
    modelo: 'Pálio',
    marca: 'Fiat',
    ano: 2008
})

console.log(palio)

palio.turboCarro(50)

console.log(palio)
console.log(palio.estadoDoCarro())
palio.ligarOuDesligar()
console.log(palio.estadoDoCarro())
palio.acelerar(10)
palio.acelerar(20)
palio.acelerar(30)
palio.ligarOuDesligar
console.log(palio)