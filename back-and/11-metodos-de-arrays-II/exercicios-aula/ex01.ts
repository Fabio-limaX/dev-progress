// Crie uma função que percorra um array com nomes de arquivos
// A função deve verificar se possui ao menos um arquivo com extensão ".bat"
// Caso exista, deverá exibir a mensagem "virus detectado", caso contrário,
// deverar exibir a mensagem "nenhum viros encontado"

const arquivos = [
    {nome: 'Virus',formato: '.bat'},
    {nome: 'GTA',formato: '.exe'},
    {nome: 'Foto',formato: '.png'}
]

const resultado = arquivos.some((arquivo) => {
    return arquivo.formato === '.bat'
})

console.log(resultado);


if (resultado) {
   console.log('Virús detectado, destrua seu pc!');    
} else {
   console.log('Nenhum virús encontrado, tome cuidado!');
    
}