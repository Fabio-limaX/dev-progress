let informacoes: [string, number, boolean] 
// //tornando informações do tipo array e para cada tipo de elemento array eu defino um tipo da dados que ele vai receber

// Regra de Tuplas, o array de tuplas só pode ter a quantidade de elementos que eu definir no tipo . ex: let informacoes: [string, number, boolean]

informacoes = ['fabio', 123, true ]

let usuario: [string, number, string, 'ativo' | 'inativo']

usuario = ['Fabio', 19, 'Fabio@gmail.com', 'ativo']

console.log(usuario)

const useState: [string, () => any] = ['javascript', function () {console.log('Olá pessoal') }]

const [estado, funcao] = useState

console.log(estado)

funcao()