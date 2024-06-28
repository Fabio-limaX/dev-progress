const soma = require('./soma')

test('Deve verificar o resultado de uma soma', () => {
    expect(soma(3, 8)).toBe(11)
})