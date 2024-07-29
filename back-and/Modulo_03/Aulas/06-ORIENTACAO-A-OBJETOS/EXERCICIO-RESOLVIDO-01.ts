// Implemente uma classe Calculadora que contenha as seguintes funcionalidades:
// Somar, Subtrair, Multiplicar, Dividir

// A classe deverá receber em seu método construtor, dois argumentos numéricos que 
// serão manipulados por cada funcionalidade. Cada método deverá retornar o resultado 
// da operação entre os dois números.

// Não deverá ser possível acessar os valores dos números informados no método construtor,
// após a criação do objeto. Faça o teste com outros exemplos.



class Calculadora {
	private numero1: number
	private numero2: number

	constructor(numero1: number, numero2: number){
		this.numero1 = numero1
		this.numero2 = numero2
	}

	soma(): number{
		return this.numero1 + this.numero2
	}

	subtracao(): number{
		return this.numero1 - this.numero2
	}

	multiplicacao(): number{
		return this.numero1 * this.numero2
	}

	divisao(): number{
		return this.numero1 / this.numero2
	}
}

const calculadora = new Calculadora(3, 6)
console.log(calculadora.soma())
console.log(calculadora.subtracao())
console.log(calculadora.multiplicacao())
console.log(calculadora.divisao())