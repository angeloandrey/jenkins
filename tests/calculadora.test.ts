import { somar, subtrair } from '../src/calculadora';

describe('Testes da calculadora', () => {

    test('Deve somar dois números positivos', () => {
        expect(somar(5, 3)).toBe(8);
    });

    test('Deve somar dois números negativos', () => {
        expect(somar(-5, -3)).toBe(-8);
    });

    test('Deve subtrair dois números positivos', () => {
        expect(subtrair(10, 4)).toBe(6);
    });

    test('Deve subtrair dois números negativos', () => {
        expect(subtrair(-10, -4)).toBe(-6);
    });

});
