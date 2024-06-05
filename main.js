let indexCartoes = 1;
mostrarCartoes(indexCartoes);

function adicionarCartoes(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        throw new Error('Parâmetro inválido: n deve ser um número.');
    }
    mostrarCartoes(indexCartoes += n);
}

function cartaoAtual(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        throw new Error('Parâmetro inválido: n deve ser um número.');
    }
    mostrarCartoes(indexCartoes = n);
}

function mostrarCartoes(n) {
// Instancia-se os cartoes e categorias e cria um "loop" caso o prox cartao nao exista
    let cartoes = document.getElementsByClassName("card-container");
    let categorias = document.getElementsByClassName("categoria");

    if (n > cartoes.length) {
        indexCartoes = 1;
    }

    if (n < 1) {
        indexCartoes = cartoes.length;
    }

// Alterna entre os cartoes definindo qual cartao sera visualizado
 
    for (let i = 0; i < cartoes.length; i++) {
        cartoes[i].style.display = "none";
        categorias[i].classList.remove("ativo");
    }

    if (cartoes[indexCartoes - 1]) {
        cartoes[indexCartoes - 1].style.display = "flex";
        categorias[indexCartoes - 1].classList.add("ativo");
    }
}

module.exports = { adicionarCartoes, cartaoAtual};