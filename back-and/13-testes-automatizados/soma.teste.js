const soma = require('./soma');

test('deve verificar o resultado de uma soma', () => {
  expect(soma(1, 2)).toBe(3);
});