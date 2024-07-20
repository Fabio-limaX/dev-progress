// PadStart --> completar o inico a string vom a correspondecia, de acordo com o tamanho definido 
// PadStart --> completar o fim a string com a correspondecia, de acordo com o tamanho definido 

const texto = 'Fábio'

console.log(texto)

const textoFormatado = texto.padStart(20, '-')
const textoFormatado2 = texto.padEnd(20, '-')

console.log(textoFormatado)
console.log(textoFormatado2)

const finalCartao = '1234 5678 9899 0987'

const numeroFormatado = finalCartao.slice(-4).padStart(14, '*')

console.log(numeroFormatado)