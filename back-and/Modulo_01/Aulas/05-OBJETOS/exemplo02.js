const usuarios = [
    {
        nome: 'João',
        email: 'joao@gmail.com'
    }, 
    {
        nome: 'Shirlei',
        email: 'Shirlei@gmai.com'
    },
    {
        nome: 'Fábio',
        email: 'Fabio@gmail.com'
    }
]

for (let usuario of usuarios) {
    console.log(`Nome: ${usuario.nome}, Email: ${usuario.email}`)
}