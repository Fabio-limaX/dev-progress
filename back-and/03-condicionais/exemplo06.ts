const temIngresso: boolean = true
const idade: number = 17
const censura: number = 16

// Operador lógico AND - &&
// Testa todas as condições e todas precisam ser verdadeiras


if (temIngresso && idade >= censura) {
    console.log('Pode entrarS')
} else {
    console.log('Barrado')
}