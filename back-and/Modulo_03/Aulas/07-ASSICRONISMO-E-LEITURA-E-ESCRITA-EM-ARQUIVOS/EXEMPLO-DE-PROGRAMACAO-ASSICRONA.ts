// console.log('primeira etapa')

// setTimeout(() => {
// 	console.log('segunda etapa')
// }, 3000)

// console.log('terceira etapa')

// Promessas (Promises)
// Pending -> Pendente | Fulfiled -> Resolvida | Rejected -> Rejeitada

console.log('primeira etapa')

async function imprimir(texto){
	return new Promise((resolver, rejeitar) => {
		resolver(texto)
	})
}

imprimir('segunda etapa').then((resultado) => {
	console.log(resultado)
})

console.log('terceira etapa')