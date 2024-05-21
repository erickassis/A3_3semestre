const cartoes = document.querySelectorAll(".card-container");

let indexCartoes = 1;
mostrarCartoes(indexCartoes);

function adicionarCartoes(n){
    mostrarCartoes(indexCartoes += n)
}

function cartaoAtual(n){
    mostrarCartoes(indexCartoes = n)
}

function mostrarCartoes(n) {
    let cartoes = document.getElementsByClassName("card-container");
    let categorias = document.getElementsByClassName("categoria");

    if(n > cartoes.length){
        indexCartoes = 1;
    }

    if(n < 1){
        indexCartoes = cartoes.length;
    }

    for(let i = 0; i < cartoes.length; i++){
        cartoes[i].style.display = "none";
        categorias[i].className = categorias[i].className.replace(" ativo", "");
    }

    cartoes[indexCartoes-1].style.display = "flex";
    categorias[indexCartoes-1].className += " ativo";
}