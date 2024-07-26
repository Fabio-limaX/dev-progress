import { Request, Response } from "express";
import bancodedados from "../bancoDeDados";

export function cadastrarAulas (req: Request, res: Response) {
    const { id } = req.params
    const { nome } = req.body

    const instrutor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({
            mensagem: 'Instrutor não encontrado'
        })
    }

    const novaAula = {
        id: bancodedados.proximoIndentificadorAula++, 
        nome
    }

    if (instrutor.aulas) {
        instrutor.aulas.push(novaAula)
        return res.status(201).json(novaAula)
    }

    instrutor.aulas = [novaAula]
    return res.status(201).json(novaAula)
}