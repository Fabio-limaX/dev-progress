import { Router } from "express";
import { teste } from "./controladores/controladores";

const rotas = Router()

rotas.get('/', teste)

// Listar todos os intrutores
// detalhar as informações de um instrutor
// cadastrar instrutor 
// editar um istrutor 
// excluir um instrutor

// cadastrar uma aula para um instrutor 
// excluir uma aula para um instrutorn

export default rotas