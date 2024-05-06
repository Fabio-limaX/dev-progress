const usuario = {
    nome: 'Fábio',
    idade: 18,
    altura: 1.74,
    temCNH: true, 
    habilidades: ['JS', 'PHP', 'PY', 'Java', 'SQL']
}

const possuiCNH = usuario.temCNH ? 'possui CNH' : 'não possui CNH'

console.log(`${usuario.nome} tem ${usuario.idade}, ${usuario.altura}m de altura, ${possuiCNH} e as seguintes habilidades`)
for (let item of usuario.habilidades) {
    console.log(`- ${item}`)
}