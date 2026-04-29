//---

// ### 🟠 Exercício 3.2 — MÉDIO

// Crie um programa que percorra os números de 1 a 50 e imprima:

// - `"FizzBuzz"` se o número for divisível por 3 **e** por 5
// - `"Fizz"` se for divisível apenas por 3
// - `"Buzz"` se for divisível apenas por 5
// - O próprio número caso contrário

// Use um loop `for`.

// > 💡 **Dica:** a ordem das condições importa — teste o caso mais específico (divisível por 3 E por 5) primeiro.

//---
function fizzBuzz(numero){
    for (let i = 1; i <= numero; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

//teste
console.log(fizzBuzz(50));