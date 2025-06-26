
function criarLista(){
    const listaNumeros = [];

    for(let i = 0;i < quantidadeGerada();i++){
        const numeroAleatorio = gerarNumeroAleatorio();
        listaNumeros.push(numeroAleatorio);
    }
    console.log(listaNumeros);
    return listaNumeros;
}

function calcularMedia(lista){
    let soma = 0;

    for(let i = 0;i < lista.length;i++){
        soma += lista[i];
    }

    return (soma/lista.length).toFixed(2);
}

function mostrarResultados() {

    const resultado = document.getElementById("resultado");
    const maiorNumero = document.getElementById("maiorNumero");
    const menorNumero = document.getElementById("menorNumero");
    const quantidadeImpares = document.getElementById("quantidadeImpares");
    const quantidadePares = document.getElementById("quantidadePares");
    const mediaNumeros = document.getElementById("mediaNumeros");
    const lista = criarLista();

    const maior = Math.max(...lista);
    const menor = Math.min(...lista);
    const pares = lista.filter(n => n % 2 === 0);
    const impares = lista.filter(n => n % 2 !== 0);

    // resultado.textContent = "Números Gerados: " + lista.join(", ");
    // maiorNumero.textContent = "Maior Número: " + maior;
    // menorNumero.textContent = "Menor Número: " + menor;
    // quantidadePares.textContent = "Números Pares: " + pares.join(", ");
    // quantidadeImpares.textContent = "Números Ímpares: " + impares.join(", ");

    resultado.textContent = `Números Gerados: ${lista.join(", ")}`
    mediaNumeros.textContent = `Média: ${calcularMedia(lista)}`
    maiorNumero.textContent = `Maior Número: ${maior}`
    menorNumero.textContent = `Menor Número: ${menor}`
    quantidadePares.textContent = `Números Pares: ${pares.length}`
    quantidadeImpares.textContent = `Números Ímares: ${impares.length}`
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function quantidadeGerada(){

    const quantidadeGerada = document.getElementById("numero").value;

    return quantidadeGerada;
}