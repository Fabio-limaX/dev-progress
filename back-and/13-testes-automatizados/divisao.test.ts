import divisao from "./divisao";

describe('testes de divisao', () => {
    test('deve verificar o resultado de uma divisao', () => {
        expect(divisao(6.2, 2.5)).toBeCloseTo(3.3)
        expect(divisao(2, 8)).toBeCloseTo(0.25)
        expect(divisao(60, 2)).toBeCloseTo(30)
    })

    test('deve verificar o resultado incorreto de uma divisao', () => {
        expect(divisao(6, 2)).toBeCloseTo(20)
    })
})