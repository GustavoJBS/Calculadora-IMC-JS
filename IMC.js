/*
<18.5        Abaixo do peso
>=18.5&<24.9 Peso normal
>=25&<29.9   SobrePeso
>=30&<34.9   Obesidade Grau 1
>=35&<39.9   Obesidade Grau 2
>40          Obesidade Grau 3

Usa-se a fórmula IMC=Peso/Altura*Altura
*/
var peso;
var altura;
var imc;
var resultado;
function calcular() {
  peso = document.getElementById('peso').value;
  altura = document.getElementById('altura').value;
  imc = peso / (altura * altura);
  if (imc < 18.5) {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br> O Resultado do seu Imc e: ' + imc.toFixed(2) + '<h3>Cuidado voce esta abaixo do peso!!';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
  } else if (imc >= 18.5 && imc < 24.9) {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br> O Resultado do seu Imc e: ' + imc.toFixed(2) + '<h3>Voce esta com o peso ideal a sua altura!!';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
  } else if (imc >= 25 && imc < 29.9) {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br> O Resultado do seu Imc e: ' + imc.toFixed(2) + '<h3>Voce esta acima do peso!!';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
  } else if (imc >= 30 && imc < 34.9) {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br> O Resultado do seu Imc e: ' + imc.toFixed(2) + '<h3>Voce esta com Obesidade de Grau nivel 1!!';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
  } else if (imc >= 35 && imc < 39.9) {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br> O Resultado do seu Imc e: ' + imc.toFixed(2) + '<h3>Voce esta com Obesidade de Grau nivel 2!!';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
  } else {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br> O Resultado do seu Imc e: ' + imc.toFixed(2) + '<h3>Voce esta com Obesidade de Grau nivel 3!!';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
  }
  return false;
}
