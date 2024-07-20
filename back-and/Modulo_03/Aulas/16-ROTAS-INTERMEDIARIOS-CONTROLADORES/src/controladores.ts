import { Request, Response } from 'express'

const pessoas = [
    {nome: 'guido', email: 'fabio@email.com'},
    {nome: 'joao', email: 'joao@email.com'},
    {nome: 'kevin', email: 'kevin@email.com'},
]

export const itemProdutos =  (req: Request, res: Response) => {
    console.log(req.params.item)
    return res.send('Cheguei no controlador')
}


export const buscarUsuario = (req: Request, res: Response) => {
    const{ email } = req.params

    const pessoa = pessoas.find(item => {
        return item.email === email
    })

    if(!pessoa) {
        return res.send('Pessoa não encontarada!')
    }

    return res.send(pessoa)
}

export const buscarUsuarioQuery = (req: Request, res: Response) => {
    const { email } = req.query

    if (!email) {
        return res.send('Parametro não informado')
    }

    const pessoa = pessoas.find((item) => {
        return item.email === email
    })

    if(!pessoa) {
        return res.send('Pessoa não encontrada!')
    } 

    return res.send(pessoa) 
}