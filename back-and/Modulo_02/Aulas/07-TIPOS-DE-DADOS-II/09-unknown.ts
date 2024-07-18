// unknown representa desconhecido 

const json: string = '{"name": "07-tipos-de-dados-ii"}'

const resultado = JSON.parse(json) as unknown

if (resultado !== null && typeof resultado === 'object' && 'name' in resultado && typeof resultado.name === 'string') {
    console.log('É um objeto com uma propriedade name do tipo string')
} else {
    console.log('Formato desconhecido')
}

// SEMPRE QUE FOR UTILIZAR UM CÓDIGO EXTERNO E NÃO SABER O TIPO, FAZER UM VERIFICAÇÃO OU MELHOR UM EXTREITAMENTO QUE SÃO VARIAS VALIDAÇÕES