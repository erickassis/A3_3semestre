/**
 * @jest-environment jsdom
 */

const { adicionarCartoes, cartaoAtual} = require('./main.js');

// Mock da função mostrarCartoes

beforeEach(() => {
    document.body.innerHTML = `
        <div class="card-container"></div>
        <div class="card-container"></div>
        <div class="categoria"></div>
        <div class="categoria"></div>
    `;
});

describe('Testes para adicionarCartoes e cartaoAtual', () => {
    test('adicionarCartoes deve mostar erro se n não for um número', () => {
        expect(() => adicionarCartoes('a')).toThrow('Parâmetro inválido: n deve ser um número.');
        expect(() => adicionarCartoes(NaN)).toThrow('Parâmetro inválido: n deve ser um número.');
    });

    test('cartaoAtual deve mostar erro se n não for um número', () => {
        expect(() => cartaoAtual('a')).toThrow('Parâmetro inválido: n deve ser um número.');
        expect(() => cartaoAtual(NaN)).toThrow('Parâmetro inválido: n deve ser um número.');
    }); 
});
