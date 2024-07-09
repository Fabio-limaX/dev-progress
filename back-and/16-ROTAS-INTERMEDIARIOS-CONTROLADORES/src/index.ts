import "dotenv/config";

import express from 'express'

const servidor = express()

servidor.get('/produtos/:item', (req, res) => {
    console.log(req.params.item)
    return res.send('Servidor o nodemon está configurado com o typescript!')
})

const pessoas = [
    {nome: 'fabio', email: 'fabio@gmail.com'},
    {nome: 'maria', email: 'maria@gmail.com'},
    {nome: 'pedro', email: 'pedro@gmail.com'}
]

servidor.get('/usuarios/:email', (req, res) => {
    const {email} = req.params

    const pessoa = pessoas.find((item) => {
        return item.email === email
    })

    if (!pessoa) {
        return res.send('pessoa não encontrada')
    }

    return res.send(pessoa)
})


servidor.get('/usuarios', (req, res) => {
   // console.log(req.query);
    const { email } = req.query

    if (!email) {
        return res.send('paramentro não encontrado')
    }

    const pessoa = pessoas.find((item) => {
        return item.email === email
   })

    if (!pessoa) {
        return res.send('pessoa não encontrada')
    }

    return res.send('Ok')
})

servidor.listen(process.env.PORT)