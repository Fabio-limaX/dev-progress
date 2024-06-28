const usuarios = [
    {nome:'Ana', idade: 23},
    {nome:'João', idade: 18},
    {nome:'paulo', idade: 30},
    {nome:'rodrigo', idade: 17},
    {nome:'Rodrigo', idade: 25}
]

usuarios.sort((a, b) => {
    if (a.idade < b.idade) {
        return -1
    } 

    if (a.idade > b.idade) {
        return 1
    }

    return 0
})

const usuarios2 = [
    {nome:'Ana', idade: 23},
    {nome:'João', idade: 18},
    {nome:'paulo', idade: 30},
    {nome:'rodrigo', idade: 17},
    {nome:'Rodrigo', idade: 25}
]

usuarios2.sort((a2, b2) => {
    return a2.idade - b2.idade
})

console.log(usuarios);
