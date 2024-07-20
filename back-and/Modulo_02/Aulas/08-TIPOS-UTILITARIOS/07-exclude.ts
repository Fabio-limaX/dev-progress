//  Instrução Type Exclude
//    -Exclusão de itens de uma união de tipos
//    -Exemplo de implementação
// Aplicação do Type Exclude
//    -Exemplo prático em um sistema bancário com diferentes tipos de transações
//        -Banco 1: débito, boleto e pix (exclui crédito)
//        -Banco 2: crédito e débito (exclui boleto e pix)
//Comparação entre Exclude e Omit
//   -Funcionamento do Exclude em uniões de tipos
//   -Funcionalidade do Omit em remoção de propriedades de objetos

// Exclude<UniãoTipos, IntesExcluidos

type T1 = Exclude< 'a' | 'b' | 'C', 'b'>

type Tansacao = 'Credito' | 'Debito' | 'Boleto' | 'Pix'

type banco1 = Exclude<Tansacao, 'Credito'>

type banco2 = Exclude<Tansacao, 'Boleto' | 'Pix'>
