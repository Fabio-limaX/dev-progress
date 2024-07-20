import subtracao from "./subtracao";

describe('testes de subtração', () => {
    test('deve verificar o resultado de uma subtração', () => {
        expect(subtracao(6.7, 2.5)).toBeCloseTo(4.2)
        expect(subtracao(6, 8)).toBeCloseTo(-2)
        expect(subtracao(60, 2)).toBeCloseTo(58)
    })

    test('deve verificar o resultado incorreto de uma subtração', () => {
        expect(subtracao(6, 2)).toBeCloseTo(5)
    })
})