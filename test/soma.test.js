import soma from '../src/soma';

describe('Testes da função soma', () => {
    it('Deve somar dois números positivos corretamente', () => {
        expect(soma(2, 3)).toBe(5);
    });

    it('Deve lançar um erro se um dos argumentos não for um número', () => {
        expect(() => {
            soma(2, 'a');
        }).toThrow('Por favor, forneça apenas números como argumentos.');
    });

    it('Deve lançar um erro se um dos números for negativo', () => {
        expect(() => {
            soma(-2, 3);
        }).toThrow('A função soma não aceita números negativos.');
    });

    it('Deve lançar um erro se a soma ultrapassar 1000', () => {
        expect(() => {
            soma(999, 2);
        }).toThrow('A soma dos números não pode ultrapassar 1000.');
    });

    it('Deve somar 0 + 0 e o resultado deve ser 0', () => {
        expect(soma(0, 0)).toBe(0);
    });

    it('Deve lançar um erro se um dos números for NaN', () => {
        expect(() => {
            soma(NaN, 2);
        }).toThrow('Por favor, forneça apenas números como argumentos.');
    });

    it('Deve lançar um erro se a soma for um número negativo', () => {
        expect(() => {
            soma(-100, -100);
        }).toThrow('A função soma não aceita números negativos.');
    });

    it('Deve lançar um erro se a soma for maior que 1000', () => {
        expect(() => {
            soma(999, 2);
        }).toThrow('A soma dos números não pode ultrapassar 1000.');
    });

    it('Deve lançar um erro se a soma for soma de números mais caracteres', () => {
        expect(() => {
            soma(9, '*');
        }).toThrow('Favor informar apenas números.');
    });
});
