//1. Escreva um código que verifica se duas variáveis
let x = 20;
let y = 10;

if (x == y){
    console.log("x é igual a y");
} else {
    console.log( "x é NÃO igual a y ");
}


//2. Escreva um código que utilize operadores de comparação para verificar se um número num está entre 10 e 20 (inclusive)

if (x > 10 && x < 20){
    console.log("O número está entre 10 e 20");
} else {
    console.log( "O número não está entre 10 e 20");
}

//3. Escreva um código que utilize operadores lógicos para verificar se um número z não é nem menor que 5 nem maior que 15.

let z = 6;
if (z < 5 || z > 15){
    console.log( "z é menor que 5 ou é maior que 15: " + z);
} else {
    console.log("z não é menor que 5 e não é maior que 15" + z);
}