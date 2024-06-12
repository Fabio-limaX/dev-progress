//Tipos utilitários
//Pick: cria um novo modelo adicionando propriedades
//Omit: cria um novo modelo removendo propriedades
//Diferença entre Pick e Omit
//Possibilidade de remover mais de uma propriedade
//Utilização do Omit em situações específicas
//Comparação da sintaxe e comprimento do código entre Pick e Omit
//Uso do Omit para manter o código mais elegante em situações específicas. 


type Carro = {
    marca: string
    modelo: string
    ano: number
    portas: number
}


//Adciona as propriedades em um novo tipo 
type NovoCarro = Pick<Carro, 'marca' | 'modelo' | 'ano' >

// Remove as propriedades em um novo tipo
type NovoCarroOmmit = Omit<Carro, 'marca' | 'modelo' | 'ano' >

type Usuario = {
    nome: string
    email: string
    senha: string
}

type UsuarioSemSenha = Pick<Usuario, 'nome' | 'email'>

type UsuarioSemSenhaOmmit = Omit<Usuario, 'nome'>