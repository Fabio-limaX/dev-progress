// some --> testa se pelo menos um dos elementos atende a 
// condição implementada e retorna verdadeiro ou falso

const pessoas = [
    {
        nome: 'Fabio',
        idade: 19
    },
    {
        nome: 'Ana',
        idade: 20
    },
    {
        nome: 'Bia',
        idade: 17
    }
]

const resultado = pessoas.some((pessoa) => {
    return pessoa.idade < 18
})

console.log(resultado);


if (resultado) {
   console.log('Existe uma pessoa de menor na lista');    
}