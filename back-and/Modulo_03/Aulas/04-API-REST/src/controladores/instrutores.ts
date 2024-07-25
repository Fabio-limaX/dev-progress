import { Request, Response } from "express";

type TIstrutores = {
    id: number
    nome: string
    gmail: string
}


const instrutores: TIstrutores[] = [
    {
        id: 1,
        nome: 'Fabio',
        gmail: 'fabio@gmail.com'
    },
    {
        id: 2,
        nome: 'Ana',
        gmail: 'Ana@gmail.com'
    },
    {
        id: 3,
        nome: 'Paulo',
        gmail: 'paulo@gmail.com'
    }
]

export function listar (req: Request, res: Response) {
    return res.status(200).json(instrutores)
}

export function detalhar (req: Request, res: Response) {
    const { id } = req.params

    const instrutor = instrutores.find((item) => {
        return item.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({
            mensagem: 'Instrutor não encontrado'
        })
    }

    return res.status(200).json(instrutores)
}