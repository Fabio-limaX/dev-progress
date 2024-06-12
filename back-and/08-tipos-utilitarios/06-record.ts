// Record<Chave(s), tipo>

//Criação de um tipo de objeto dinâmico chamado de recorde.
//Estrutura do recorde: definição das chaves e seus respectivos tipos.
//Exemplo de definição de recorde: Type pessoa = recorde { nome: string, email: string, senha: string };
//Exemplo de recorde relacionando outros tipos de dados: Type dupla = recorde { jogador1: usuario, jogador2: usuario };
//Utilização do recorde exigindo que todos os tipos de propriedades sejam iguais.
//Exemplo de uso do recorde em um objeto real: const time1 = { jogador1: { nome: "Guido", email: "guido@email.com", senha: "123" }, jogador2: { nome: "João", email: "joao@email.com", senha: "456" }};
//Simplificação da escrita a partir do uso do recorde para objetos com propriedades do mesmo tipo.
//Progressão da complexidade dos conteúdos ao longo do curso.

type TPessoa = Record<'nome' | 'email' | 'senha', string>

type Usuario = {
    nome: string
    email: string
    senha: string
}

type TDupla = Record<'jogador1' | 'jogador2', Usuario>


const time1: TDupla = {
    jogador1: {
        nome: 'FÁBIO',
        email: 'FABIO@GAMIL.COM',
        senha: 'FABIO231'
    }, 
    jogador2: {
        nome: 'FELIPE',
        email: 'FELIPE@GMAIL.COM',
        senha: 'FELIPE123'
    }
}
