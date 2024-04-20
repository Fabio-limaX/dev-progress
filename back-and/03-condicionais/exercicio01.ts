// Escreva um programa que receba uma nota média escolar e imprima o resultado 
// conforme as condições abaixo:
// Média menor que 4 -> reprovado 
// Média maior ou igual a 4 e maior que 7  -> Recuperação
// Média maior ou igual a 7 -> Aprovado 

const media:number = 3

if (media < 4) {
    console.log('Reprovado, talvez na proxima!')
} else if (media < 7) {
    console.log('Recuperação, foi por 1 fio')
}else {
    console.log('Aprovado, Uhuueue ai sim')
}