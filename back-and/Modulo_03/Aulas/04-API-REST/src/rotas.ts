import { Router } from "express";
import { cadastrar, deletarInstrutor, detalhar, editar, editarEmail, listar } from "./controladores/instrutores";
import { cadastrarAulas, excluirAula } from "./controladores/aulas";


const rotas = Router()

rotas.get('/instrutores', listar) // Listar todos os intrutores

rotas.get('/instrutores/:id', detalhar) // detalhar as informações de um instrutor

rotas.post('/instrutores', cadastrar) // cadastrar instrutor 

rotas.put('/instrutores/:id', editar) // editar um istrutor

rotas.patch('/instrutor/:id/alterarEmail', editarEmail) //editar um email

rotas.delete('/instrutores/id', deletarInstrutor) // excluir um instrutor

rotas.post('/instrutor/:id/aulas', cadastrarAulas)  // cadastrar uma aula para um instrutor

rotas.delete('/instrutor/:id/aulas/:idAula', excluirAula) // excluir uma aula para um instrutorn

export default rotas