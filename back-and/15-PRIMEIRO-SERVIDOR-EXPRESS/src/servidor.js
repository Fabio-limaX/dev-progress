import express from "express";


const servidor = express()

const controlador = (requisicao, resposta) => {
    return resposta.send('Meu primeiro servidor Node.js com express')
}

servidor.get('/home', controlador)

servidor.listen(3000)