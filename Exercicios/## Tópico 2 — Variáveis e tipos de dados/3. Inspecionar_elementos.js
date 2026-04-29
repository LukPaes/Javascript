//Escreva uma função pura chamada `inspecionar(valor)` que recebe qualquer valor e retorna um objeto contendo três propriedades:
// - `tipo`: o `typeof` do valor
// - `ehVazio`: `true` se for `null`, `undefined`, `""`, `0`, `NaN` ou `false`
// - `representacao`: uma string descrevendo o valor de forma legível, tratando especialmente `null` e `undefined`

// Teste com pelo menos 5 entradas diferentes cobrindo todos os tipos primitivos.

//```js
//inspecionar(null);
// // { tipo: "object", ehVazio: true, representacao: "null" }

// inspecionar("Luk");
// { tipo: "string", ehVazio: false, representacao: "\"Luk\"" }
//```

//> 💡 **Dica:** cuidado com `NaN`: use `Number.isNaN(valor)` para detectá-lo, pois `NaN !== NaN`.

//---



function inspecionar(valor) {
    const tipo = typeof valor;
    const ehVazio = valor === null || valor === undefined || valor === "" || valor === 0 || valor === false || (typeof valor === "number" && Number.isNaN(valor));
    let representacao;
    //condições para o representacao
    if (valor === null) representacao = "null";
    else if (valor === undefined) representacao = "undefined";
    else if (typeof valor === "string") representacao = `"${valor}"`;
    else representacao = String(valor);
    return { tipo, ehVazio, representacao };
}

console.log(inspecionar(null));
console.log(inspecionar("Luk"));
console.log(inspecionar(42));
console.log(inspecionar(NaN));
console.log(inspecionar(undefined));
console.log(inspecionar(""));
console.log(inspecionar(true));