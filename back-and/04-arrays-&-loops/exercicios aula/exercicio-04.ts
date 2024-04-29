const listaDeUsuarios: string[] = ['Maria', 'Fábio', 'Pedrinho', 'Paulo', 'Lucas']

let encontrado: boolean = false

for (let usuario of listaDeUsuarios) {
    if (usuario === "João") {
        encontrado = true
        break
    } 
}

if (encontrado) {
    console.log('Encontrado')
} else {
    console.log('Não encontrado')
}