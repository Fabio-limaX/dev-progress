// localeCompare --> método de comparação de strings

const letra1 = 'Dado'
const letra2 = 'dado'

console.log(letra1.localeCompare(letra2));

const usuarios = ['João', 'Maria', 'ana', 'rodrigo', 'Rodrigo']

//ordenação crescente
usuarios.sort((item1, item2) => {
    return item2.localeCompare(item1)
})


const usuarios2 = [
    {nome:'Ana', idade: 23},
    {nome:'João', idade: 18},
    {nome:'paulo', idade: 30},
    {nome:'rodrigo', idade: 17},
    {nome:'Rodrigo', idade: 25}
]

//ordenação drecrescente 
usuarios2.sort((item1, item2) => {
    return item1.nome.localeCompare(item2.nome)
})
