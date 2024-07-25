import { Router } from "express";
import { detalhar, listar } from "./controladores/instrutores";


const rotas = Router()

rotas.get('/instrutores', listar) // Listar todos os intrutores

rotas.get('/instrutores/:id', detalhar) // detalhar as informações de um instrutor

// cadastrar instrutor 
// editar um istrutor 
// excluir um instrutor

// cadastrar uma aula para um instrutor 
// excluir uma aula para um instrutorn

export default rotas