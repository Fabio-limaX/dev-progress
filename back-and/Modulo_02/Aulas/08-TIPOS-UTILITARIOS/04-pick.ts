// pick<Tipo, Propriedades> 
//Instruções para criar um novo tipo usando o Pique
//Exemplo de definição de tipo "Carro" com propriedades específicas
//Criação de um novo tipo "NovoCarro" baseado no tipo "Carro"
//Exemplo prático de criação do tipo "NovoCarro"
//Uso real do Pique para um tipo de usuário com determinadas propriedades
//Criação de um novo tipo "UsuárioSemSenha" baseado no tipo "Usuário" sem a propriedade de senha
//Utilização do Pique para adicionar apenas as propriedades desejadas em um novo tipo
//Definição do novo tipo "UsuárioSemSenha" com propriedades específicas: nome, email

type Carro = {
    marca: string
    modelo: string
    ano: number
    portas: number
}

type NovoCarro = Pick<Carro, 'marca' | 'modelo' | 'ano' >

type Usuario = {
    nome: string
    email: string
    senha: string
}

type UsuarioSemSenha = Pick<Usuario, 'nome' | 'email'>