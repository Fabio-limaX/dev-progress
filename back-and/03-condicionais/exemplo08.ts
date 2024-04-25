const temIngresso: boolean = true
const idade: number = 17
const censura: number = 16
const estaComOsPais: boolean = false

if (temIngresso && (idade >= censura || estaComOsPais)) {
    console.log('Pode entrar')
}   else {
    console.log('Barrado')
}