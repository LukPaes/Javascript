//Crie uma função `calcularIMC(peso, altura)` que retorna um objeto com duas propriedades: 
// `valor` (o IMC calculado com 2 casas decimais) e 
// `classificacao` (uma string: `"Abaixo do peso"`, `"Normal"`, `"Sobrepeso"` ou `"Obesidade"`, segundo os limites padrão da OMS). A fórmula é `peso / (altura * altura)`. Teste com peso `72` e altura `1.75`.


// Limites de referência:
// < 18.5   -> Abaixo do peso
// 18.5–24.9 -> Normal
// 25–29.9  -> Sobrepeso
// >= 30    -> Obesidade

function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    const valor = Number(imc.toFixed(2));
    let classificacao;
    if (imc < 18.5)     classificacao = "Abaixo do peso";
    else if (imc < 25)  classificacao = "Normal";
    else if (imc < 30)  classificacao = "Sobrepeso";
    else                classificacao = "Obesidade";
    return { valor, classificacao };
}
console.log(calcularIMC(72, 1.75));

