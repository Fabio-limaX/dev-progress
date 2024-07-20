//Tipos extract e stract 1.1. extract: extrai itens de uma união de tipos 1.1.1. Exemplo: extract<int | string, string> resulta em int 1.2. stract: cria um novo tipo com os itens extraídos da união de tipos 1.2.1. Exemplo: stract<A | B | C, B> resulta em A | C
//Diferença entre exclude e stract 2.1. exclude: exclui itens de uma união de tipos criando um novo tipo somente com os restantes 2.2. stract: extrai itens da união de tipos para criar um novo tipo somente com aqueles itens
//Exemplo com stract 3.1. União A | B | C, extrair B resulta em novo tipo A | C
//Utilização do stract 4.1. stract<Bank1 | Bank2, Credit> para remover Credit 4.2. Exemplo: stract<'debit' | 'credit' | 'boleto' | 'pix', 'boleto' | 'pix'> resulta em 'debit' | 'credit'
//Escolha entre exclude e stract 5.1. Use exclude para exclusão simples de tipos 5.2. Use stract para extração de tipos específicos
//Simplifique sempre a solução escolhendo o método que demanda menos trabalho na escrita.

// Extract<UniãoTipos, ItensExtraidos>

type T1 = Exclude< 'a' | 'b' | 'C', 'b'>

type Tansacao = 'Credito' | 'Debito' | 'Boleto' | 'Pix'

type banco1 = Exclude<Tansacao, 'Credito'>

type banco2 = Exclude<Tansacao, 'Boleto' | 'Pix'>

type T2 = Extract< 'a' | 'b' | 'c', 'b' | 'a'>

type banco1Extract = Extract<Tansacao, 'Debito' | 'Boleto' | 'Pix'>

type banco2Extract = Extract<Tansacao, 'Credito' | 'Debito'>