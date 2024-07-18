// Crie um obejto qie represetará uma calculadora. 
// o objeto deve conter quatro métodos que realizará as 
// quatro operações matemática: soma, subtração, mutiplicação, divisão 

//Cada método deverá retornar o resultado da operação 
//implementada os métodos com suas respectivas tipagens de parâmetros e retorno 

type TFuncaoCalc = ((numero1: number, numero2: number) => number)

type TCalculadora = {
    soma: TFuncaoCalc
    subtracao: TFuncaoCalc
    mutiplicacao: TFuncaoCalc
    divisao: TFuncaoCalc
}

const calculadora: TCalculadora = {
    soma: function (numero1: number, numero2: number): number {
        return numero1 + numero2
    },
    subtracao: function (numero1: number, numero2: number): number {
        return numero1 - numero2
    },
    mutiplicacao: function (numero1: number, numero2: number): number {
        return numero1 * numero2
    },
    divisao: function (numero1: number, numero2: number): number {
        return numero1 / numero2
    },
}

console.log(calculadora.soma(10, 10))
console.log(calculadora.subtracao(30, 15))
console.log(calculadora.mutiplicacao(5, 2))
console.log(calculadora.divisao(10, 2))

