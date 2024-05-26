# Jogo de Truco

## Problema

Você ficou responsavel por fazer uma atualização no software que controla um placar de um ginásio de vôlei. No vôlei de quadra, um set se encerra quando um dos times atinge pelo menos 25 pontos e tem pelo menos 2 pontos de vantagem sobre o adversário. Seu papel é, a partir do placar de um set do jogo, informar se:

- e o time A venceu o set
- Se o time B venceu o set
- Se o time A está vencendo o set (mas ainda não venceu)
- Se o time B está vencendo o set (mas ainda não venceu)
- Se o jogo está empatado

## Entrada

A entrada será sempre composta por duas variáveis:

- `pontosA`: variável numérica que armazena a quantidade de pontos o time A fez no set até o momento
- `pontosB`: variável numérica que armazena a quantidade de pontos o time B fez no set até o momento

## Saída

Você deverá **RETONRAR** apenas um dos quatro status possíveis:

- `TIME A VENCEU O SET`: caso o time A tenha vencido o set
- `TIME B VENCEU O SET`: caso o time B tenha vencido o set
- `TIME A VENCENDO`: caso o time A esteja vencendo o set, mas ainda não tenha vencido
- `TIME B VENCENDO`: caso o time B esteja vencendo o set, mas ainda não tenha vencido
- `JOGO EMPATADO`: caso o jogo esteja empatado

## Exemplo

### Entrada 1

`pontosA = 3`

`pontosB = 0`

### Saída 1

"TIME A VENCEU O SET"

### Explicação 1

O time A já venceu pois atingiu pelo menos 25 pontos e pelo menos dois de vantagem.

### Entrada 2

`pontosA = 25`

`pontosB = 23`

### Saída 2

"TIME A VENCENDO"

### Explicação 2

O time A está vencendo. Ainda não venceu pois, apesar de ter feito mais de 25 pontos, ainda não atingiu pelo menos 2 de vantagem.


---

# Sinuca Brasileira

## Problema
Sinuca é um esporte de mesa, taco e bolas praticado no Brasil. Popularmente, joga-se com bolas menores e coloridas numeradas de 1 a 15 e o chamado bolão, uma bola branca e maior que as demais.

O jogador deve acertar o bolão com o taco para que ele colida com as demais bolas de forma que elas caiam em um dos 6 buracos localizados nos cantos da mesa, denominados caçapas. Quando isso acontece, diz-se que a bola foi encaçapada, ou seja, caiu na caçapa.

Em uma, das várias maneiras de se jogar, soma-se os números correspondentes às bolas encaçapadas por cada um dos dois competidores. Nessa modalidade, ganha quem tiver a maior soma ao final do jogo.

Sabendo que a soma total das bolinhas na mesa é 120, você deve criar um programa que receba um array de números em que cada item representa o número de uma bola encaçapada pelo jogador A e retorne se o jogador A ganhou, se o jogador B ganhou ou se houve empate.

## Entrada

A entrada será sempre um array de números, denominado `jogadorA`, em que cada item é o número de uma bolinha encaçapada pelo jogador A.

## Saída

Você deverá imprimir na tela:

- `JOGADOR A GANHOU`: se o jogador A tiver ganhado;
- `JOGADOR B GANHOU`: se o jogador B tiver ganhado;
- `EMPATE`: se tiver ocorrido empate.

## Exemplos

### Entrada 1

```ts
jogadorA = [1, 4, 5, 8, 15, 14]
```

### Saída 1

"JOGADOR B GANHOU"

### Explicação 1

Somando-se o número das bolinhas encaçapadas pelo jogador A temos um total de 47. Isso significa que somando-se as bolinhas encaçapadas pelo jogador B teremos um total de 73.

