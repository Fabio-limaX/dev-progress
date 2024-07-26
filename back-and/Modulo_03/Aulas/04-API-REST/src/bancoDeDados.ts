
type TIdentificador = number

type TAulas = {
    id: number
    nome: string
}

type TInstrutores = {
    id: number
    nome: string
    email: string
    aulas?: TAulas[]
}

type TBancodedados = {
    proximoIdentificador: TIdentificador
    proximoIndentificadorAula: TIdentificador
    instrutores: TInstrutores[]
}

const bancodedados: TBancodedados = {
    proximoIdentificador: 3, 
    proximoIndentificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: 'Fabio',
            email: 'fabio@gmail.com',
            aulas:[{
                id: 1, nome: 'Aula de API REST'
            }]
        },
        {
            id: 2,
            nome: 'Ana',
            email: 'Ana@gmail.com',
            aulas:[]
        }
    ]
}

export default bancodedados




