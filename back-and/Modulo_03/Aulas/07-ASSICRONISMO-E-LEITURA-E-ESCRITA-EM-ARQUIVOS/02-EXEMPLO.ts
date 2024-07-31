function verificaIdade(idade) {
	return new Promise((resolver, rejeitar) => {
		if (idade > 17) {
			resolver(`${idade} anos está liberado`)
			return
		}

		rejeitar(`Você é de menor, pois tem ${idade} anos`)
	})
}

console.log('Iniciou a fila da festa')

verificaIdade(18).then((resultado) => {
	console.log(resultado)
}).catch((erro) => {
	console.log(erro)
}).finally(() => {
	console.log('Este console.log foi executado ao final da resolução ou da rejeição da promessa')
})

verificaIdade(19).then((resultado) => {
	console.log(resultado)
}).catch((erro) => {
	console.log(erro)
}).finally(() => {
	console.log('Este console.log foi executado ao final da resolução ou da rejeição da promessa')
})

verificaIdade(17).then((resultado) => {
	console.log(resultado)
}).catch((erro) => {
	console.log(erro)
}).finally(() => {
	console.log('Este console.log foi executado ao final da resolução ou da rejeição da promessa')
})

console.log('Final da fila')