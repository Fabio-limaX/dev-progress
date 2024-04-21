const temIngresso: boolean = true
const idade: number = 17
const censura: number = 16
const estaComOsPais: boolean = false

// Operador Lógico OR - || 
// Testa se pelo menos uma condição é verdadeira

if (temIngresso) {
    if (idade >= censura || estaComOsPais){
        console.log('Pode entrar')
    } else {
        console.log('Barrado')
    }
} else {
    console.log('Barrado')
}