//Implemente uma função de ordem superior chamada `criarContador(inicial = 0)`. Ela deve retornar um objeto com três métodos:

//- `incrementar()`: soma 1 e retorna o novo valor
//- `decrementar()`: subtrai 1 e retorna
//- `obter()`: retorna o valor atual sem alterar

//O contador interno **não deve ser acessível diretamente de fora** — apenas pelos métodos (use **closure**). Crie dois contadores independentes para testar que eles não compartilham estado.

function criarContador(inicial = 0) {
    let valor = inicial;
    return {
        incrementar: () => ++valor,
        decrementar: () => --valor,
        obter:       () => valor
    };
}
const c1 = criarContador();
const c2 = criarContador(10);
console.log(c1.incrementar()); // 1
console.log(c1.incrementar()); // 2
console.log(c2.decrementar()); // 9
console.log(c1.obter());       // 2  (c1 não foi afetado por c2)
console.log(c2.obter());       // 9
console.log(c1.valor);         // undefined: não há acesso direto à variável
console.log(c2.valor);         // undefined: não há acesso direto à variável
console.log(c1.incrementar()); // 3
console.log(c1.incrementar()); // 4
console.log(c2.decrementar()); // 8
console.log(c1.obter());       // 4  (c1 não foi afetado por c2)
console.log(c2.obter());       // 8
console.log(c1.valor);         // undefined: não há acesso direto à variável
console.log(c2.valor);         // undefined: não há acesso direto à variável