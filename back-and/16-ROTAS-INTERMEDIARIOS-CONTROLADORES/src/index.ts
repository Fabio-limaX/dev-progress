import "dotenv/config";

import express from 'express'

const servidor = express()

servidor.get('/', (req, res) => {
    return res.send('Servidor está ok!')
})

servidor.listen(process.env.PORT)