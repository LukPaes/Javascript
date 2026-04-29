//Escreva uma função chamada `somar(a, b)` que recebe dois números e retorna a soma deles. Em seguida, reescreva a mesma função usando **arrow function** e chame as duas versões no console.
function somar(a, b) {
    return a + b;
}
console.log(somar(1, 2));
const somarArrow = (a, b) => a + b;
console.log(somarArrow(1, 2));

somar(1, 2);
somarArrow(1, 2);
console.log(somar(1, 2));
console.log(somarArrow(1, 2));

