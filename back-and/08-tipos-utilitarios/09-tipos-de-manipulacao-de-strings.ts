//Tipos literais
//Tipos utilitários

//Uppercase<TipoString>
//Lowercase<TipoString>
//Capitalize<TipoString>

//Exemplos práticos: crédito, débito, transação, tipo 2, tipo 3
//Importância do padrão de escrita
//Manipulação de tipos literais com tipos utilitários e exemplos de uso de Uppercase, Lowercase e Capitalize

type TransacaoCredito = 'Credito'
type TrancaoDebito = 'dEbiTo'

type Trancao = TransacaoCredito | TrancaoDebito

type Trasacao1 = Uppercase<TransacaoCredito> | Uppercase<TrancaoDebito > // maíusculo
type Trasacao2 = Lowercase<TransacaoCredito> | Lowercase<TrancaoDebito > // Minúscula
type Trasacao3 = Capitalize<Trasacao2> // Primeira letra maíuscula

const tipo1: Trasacao1 = 'DEBITO'
const tipo2: Trasacao2 = 'credito'
const tipo3: Trasacao3 = 'Credito'