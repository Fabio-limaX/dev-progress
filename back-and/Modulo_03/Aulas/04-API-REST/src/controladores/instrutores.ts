import { Request, Response } from "express";

type TIstrutores = {
    id: number
    nome: string
    email: string
}


const instrutores: TIstrutores[] = [
    {
        id: 1,
        nome: 'Fabio',
        email: 'fabio@gmail.com'
    },
    {
        id: 2,
        nome: 'Ana',
        email: 'Ana@gmail.com'
    },
    {
        id: 3,
        nome: 'Paulo',
        email: 'paulo@gmail.com'
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

export function cadastrar (req: Request, res: Response) {
    const { nome, email } = req.body

    const novoInstrutor = {
        id: 4,
        nome,
        email
    }
    
    instrutores.push(novoInstrutor)

    return res.status(201).json({novoInstrutor})
}