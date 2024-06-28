import soma from './soma'

describe('Testes de soma1', () => {
    test('deve verificar o resultado de uma soma', () => {
        expect(soma(1, 2)).toBe(3);
      });

      test('deve verificar o resultado icorreto de uma soma', () => {
        expect(soma(1, 3)).not.toBe(3);
      });
})

describe('Testes de soma2', () => {
    it('deve verificar o resultado de uma soma', () => {
        expect(soma(1, 2)).toBe(3);
      });

      it('deve verificar o resultado icorreto de uma soma', () => {
        expect(soma(1, 3)).not.toBe(3);
      });
})


// test ou it são exatamente a mesma coisa
// describe é um agrupamento de teste 


