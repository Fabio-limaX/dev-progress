import { Router } from "express";
import { cadastrar, detalhar, editar, listar } from "./controladores/instrutores";


const rotas = Router()

rotas.get('/instrutores', listar) // Listar todos os intrutores

rotas.get('/instrutores/:id', detalhar) // detalhar as informações de um instrutor

rotas.post('/instrutores', cadastrar) // cadastrar instrutor 

rotas.put('/instrutores/:id', editar)// editar um istrutor 

// excluir um instrutor

// cadastrar uma aula para um instrutor 
// excluir uma aula para um instrutorn

export default rotas