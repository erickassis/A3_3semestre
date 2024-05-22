const main = require('./main');

describe('mostrarCartoes', () => {
    let cartoes;
    let categorias;

    beforeEach(() => {
        document.body.innerHTML = `
            <div class="card-container" style="display: none;"></div>
            <div class="card-container" style="display: none;"></div>
            <div class="categoria"></div>
            <div class="categoria"></div>
        `;

        cartoes = document.getElementsByClassName("card-container");
        categorias = document.getElementsByClassName("categoria");
    });

    test('Deve exibir o primeiro cartão e ativar sua categoria', () => {
        mostrarCartoes(1, cartoes, categorias);

        expect(cartoes[0].style.display).toBe('flex');
        expect(categorias[0].className).toContain('ativo');
    });

    test('Deve exibir o último cartão e ativar sua categoria', () => {
        mostrarCartoes(2, cartoes, categorias); 

        expect(cartoes[1].style.display).toBe('flex');
        expect(categorias[1].className).toContain('ativo');
    });
});
