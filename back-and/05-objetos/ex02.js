const fila = ['Guido', 'João', 'Maria', 'Pedro', 'Fabio', 'Ana']

const pessoas = []

for (let i = 0; i < fila.length; i++) {
    pessoas[i] = {
        nome: fila[i],
        senha: i++
    }
}
