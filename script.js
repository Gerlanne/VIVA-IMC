

const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const calcular = document.getElementById('but');
const resultado = document.getElementById('resultado');

calcular.addEventListener("click", function () {

    const pesoValor = Number(peso.value);
    const alturaValor = Number(altura.value);

    const imc = pesoValor / (alturaValor * alturaValor);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";

    } else if (imc < 25) {
        classificacao = "Peso normal";

    } else if (imc < 30) {
        classificacao = "Sobrepeso";

    } else if (imc < 35) {
        classificacao = "Obesidade grau I";

    } else if (imc < 40) {
        classificacao = "Obesidade grau II";

    } else {
        classificacao = "Obesidade grau III";
    }

    resultado.textContent = "Seu IMC é: " + imc.toFixed(2) +
        " | Classificação: " + classificacao;

});