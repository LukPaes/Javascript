// **Objetivo:** praticar operadores aritméticos, lógicos e de comparação, além de `if/else`, `switch`, `for` e `while`.
// ### 🟢 Exercício 3.1 — FÁCIL

// Escreva um programa que, dado um número armazenado em uma variável, imprima no console se ele é `"Par"` ou `"Ímpar"`. Teste com os números `7`, `10` e `0`.

// > 💡 **Dica:** o operador `%` (resto da divisão) é seu melhor amigo aqui.

//---

const numero = 7;

if (numero % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}

console.log(numero % 2 === 0 ? "Par" : "Ímpar");