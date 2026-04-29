//### 🔴 Exercício 3.3 — DIFÍCIL

//Escreva um programa que simule um caixa eletrônico simples. Dado um valor de saque (por exemplo, `387`), o programa deve calcular quantas notas de cada valor serão entregues, usando o **menor número possível** de notas. As notas disponíveis são: `100, 50, 20, 10, 5, 2 e 1`. Imprima o resultado indicando a quantidade de cada nota (apenas as que tiverem quantidade maior que zero).

//```js
//saque(387);
// 3 nota(s) de R$ 100
// 1 nota(s) de R$ 50
// 1 nota(s) de R$ 20
// 1 nota(s) de R$ 10
// 1 nota(s) de R$ 5
// 1 nota(s) de R$ 2
//```

//> 💡 **Dica:** use um array com os valores das notas em ordem decrescente e um loop `for` percorrendo esse array.

//---

function saque(valor) {
    const notas = [100, 50, 20, 10, 5, 2, 1];
    let restante = valor;
    for (const nota of notas) {
        const quantidade = Math.floor(restante / nota);
        if (quantidade > 0) {
            console.log(`${quantidade} nota(s) de R$ ${nota}`);
            restante = restante % nota;
        }
    }
}

//teste
console.log(saque(387));