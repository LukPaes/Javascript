
let numero = 6;

//1. Verificar se o número é positivo, negativo ou zero
function verificaNumero(numero){
    if (numero > 0) {
        console.log("Esse Número é positivo:" + numero);
      } else if (numero < 0) {
        console.log("Esse Número é Negativo:" + numero);
      } else {
        console.log("Esse Número é Zero: "+numero);
      }
}

//2. Operador Ternário
function operadorTernário(numero){
    numero >= 18 ? "Maior que 18" : "Menor de Idade";
    console.log(`Sua idade é? ${numero}!`);

}

//3.  Classificar Temperatura
function classificarTemperatura(numero){
  if (numero < 15) {
    console.log("O espaço está FRIO");
  } else if (numero >= 15 && numero <= 25) {
    console.log("O Espaço está com temperatura AGRADÁVEL");
  } else if (numero >= 26 && numero <= 35) {
    console.log("O Espaço está muito QUENTE ");
  } else {
    console.log("Agora tá muito Quente!!!");
  }
}

//4. Operadores Lógicos
function verifcaNumeroIntervalo(numero){
  if (numero >= 5 && numero <= 10) {
    console.log("O número está entre 5 e 10");
  } else {
    console.log("Tente mais uma vez");
  }
}

//5. Função refatorada para  operador Ternário
function verifcaNumeroIntervaloTernãrio(numero){
  console.log(
    numero >= 5 && numero <= 10
      ? `Número entre 5 e 10: ${numero}`
      : `Fora do intervalo 5–10: ${numero}`
  );
}

//Main começa por aqui
verificaNumero(numero);

operadorTernário(numero);

classificarTemperatura(numero);

verifcaNumeroIntervalo(numero);

verifcaNumeroIntervaloTernãrio(numero);