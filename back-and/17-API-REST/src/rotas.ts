import { Router } from "express";
import { teste } from "./controladores/controladores";

const rotas = Router()

rotas.get('/', teste)

export default rotas