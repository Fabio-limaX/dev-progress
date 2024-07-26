
type TAulas = {
    id: number
    nome: string
}

type TIstrutores = {
    id: number
    nome: string
    email: string
    aulas?: TAulas[]
}

type TBancodedados = {
    proximoIdentificador: number
    instrutores: TIstrutores[]
}

const bancodedados: TBancodedados = {
    proximoIdentificador: 4, 
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
        },
        {
            id: 3,
            nome: 'Pedro',
            email: 'pedro@gmail.com',
            aulas:[]
        }
    ]
}

export default bancodedados




