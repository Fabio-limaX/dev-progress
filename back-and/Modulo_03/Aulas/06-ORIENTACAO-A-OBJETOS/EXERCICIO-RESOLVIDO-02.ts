// Implemente uma classe Lampada que, ao ser instanciada, deverá receber a sua potência em Watts.
// A classe terá três funcionalidades.

// Ligar (altera o estado da lâmpada para true)
// Desligar (altera o estado da lâmpada para false)
// Medir Potência (retorna a potência da lâmpada em watts)

// Faça o teste com outros exemplos.


class Lampada {
	private potencia: number
	private estado: boolean

	constructor(watts: number){
		this.potencia = watts
		this.estado = false
	}

	ligar(): void{
		this.estado = true
	}

	desligar(): void{
		this.estado = false
	}

	medirPotencia(): number{
		return this.potencia
	}
}

const lampadaLed = new Lampada(50)
console.log(lampadaLed)
console.log(lampadaLed.medirPotencia())
lampadaLed.ligar()
console.log(lampadaLed)
lampadaLed.desligar()
console.log(lampadaLed)

const lampadaIncandescente = new Lampada(120)
console.log(lampadaIncandescente)