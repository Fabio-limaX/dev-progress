




type TProfessores = {
    nome: string
    stack: string
}

const professores = [
    {nome: 'Fabio', stack: "backend"},
    {nome: 'Ana', stack: "frontend"},
    {nome: 'Bia', stack: "backend"},
    {nome: 'Paulo', stack: "backend"},
    {nome: 'Carlos', stack: "frontend"},
    {nome: 'José', stack: "backend"},
    {nome: 'Gomes', stack: "frontend"}
]

const professoresBackend = professores.filter((professor) => {
    return professor.stack === 'backend'
})

const professoreFrontend = professores.filter((professor) => {
    return professor.stack === 'frontend'
})

console.log(professoresBackend);
console.log(professoreFrontend);
