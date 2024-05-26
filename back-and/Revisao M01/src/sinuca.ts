const jogadorA: number[] = [1, 4, 5, 8, 15, 14, 13, 12, 11, 10];

const totalDaSomaDasBolinhas = 120;

let pontuacaoJogadorA = 0;
for (let bolaEncacapada of jogadorA) {
  pontuacaoJogadorA += bolaEncacapada;
}

let pontuacaoJogadorB: number = totalDaSomaDasBolinhas - pontuacaoJogadorA;

if (pontuacaoJogadorB > pontuacaoJogadorA) {
  console.log("JOGADOR B GANHOU");
} else if (pontuacaoJogadorA === pontuacaoJogadorB) {
  console.log("EMPATE");
} else {
  console.log("JOGADOR A GANHOU");
}
