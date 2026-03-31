//Exercícios
// For Loop Básico: Escreva um programa que use um laço for para imprimir os números de 1 a 10.
// Iterando um Array com For…of: Use o laço for...of para iterar sobre um array de strings e imprimir cada string.
// While Loop com Controle de Fluxo: Escreva um laço while que imprima os números ímpares de 1 a 20, mas pare a iteração quando chegar a 15.
// Do…While com Input do Usuário: Use o laço do...while para perguntar ao usuário um número entre 1 e 10 até que ele digite o número correto. (Dica: Você pode precisar de uma biblioteca como readline-sync para a entrada do usuário).
// Aninhamento de Laços: Crie um laço aninhado para imprimir uma matriz 5×5 de asteriscos.
// Desafio – Fibonacci com For Loop: Use um laço for para calcular os primeiros 10 números da sequência de Fibonacci.

const material_treino = ['kimono', 'faixa', 'toalha', 'produtos de limpeza'];
let numeros = 1;

//1. For Loop Básico
function meuPrimeiroLoop(){
    for (let i = 0; i < 10; i++) {
        console.log("Esse é meu primeiro Loop: " + i); // Imprimirá os números de 0 a 9
    }
}

//2. Array com For of
function meuArrayForOf(material_treino){
    for(const mtreino of material_treino){
        console.log("Esse é meu primeiro for of: " + mtreino); // Imprimirá os materiais de treino.
    }
}


//3. While loop com controle de fluxo.
function meuWhileLoop() {
    let i = 1;

    while (i <= 20) {
        if (i % 2 !== 0) {
            console.log(i);
            if (i === 15) break;
        }
        i++;
    }
}
//4. Do... While com Input de usuário
function meuDoWhile() {
    const numeroCorreto = 7; // número "certo" entre 1 e 10
    const tentativas = [0, 12, 3, 7]; // simula o usuário digitando

    let i = 0;
    let numeroDigitado;

    do {
        numeroDigitado = tentativas[i];
        console.log("Número digitado:", numeroDigitado);
        i++;

        if (!Number.isInteger(numeroDigitado) || numeroDigitado < 1 || numeroDigitado > 10) {
            console.log("Valor inválido. Digite um inteiro entre 1 e 10.");
            continue;
        }

        if (numeroDigitado !== numeroCorreto) {
            console.log("Errou, tente novamente.");
        }
    } while (numeroDigitado !== numeroCorreto);

    console.log("Acertou!");
}

//5. Aninhamento de Laços
//6. Desafio

meuPrimeiroLoop();
meuArrayForOf(material_treino);
meuWhileLoop();
meuDoWhile();