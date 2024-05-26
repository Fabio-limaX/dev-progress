const nomeDigitado: string = "Camila";
const listaAprovadosOrdenada: string[] = [
  "Camila",
  "Lucas",
  "Ariel",
  "Fernado",
  "Ana",
];

let posicaoEncontrada: number = -1;
for (let i = 0; i < listaAprovadosOrdenada.length; i++) {
  if (listaAprovadosOrdenada[i] === nomeDigitado) {
    posicaoEncontrada = i;
    break;
  }
}

if (posicaoEncontrada === -1) {
  console.log("REPROVADO!");
} else {
  console.log(posicaoEncontrada + 1);
}
