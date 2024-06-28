import multiplicacao from "./multiplicacao";

describe('testes de multiplicação', () => {
    test('deve verificar o resultado de uma multiplicação', () => {
        expect(multiplicacao(6.5, 2)).toBeCloseTo(13.0)
        expect(multiplicacao(6, 8)).toBeCloseTo(16)
        expect(multiplicacao(60, 2)).toBeCloseTo(120)
    })

    test('deve verificar o resultado incorreto de uma multiplicação', () => {
        expect(multiplicacao(6, 2)).toBeCloseTo(12)
    })
})