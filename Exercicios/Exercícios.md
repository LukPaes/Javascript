# JavaScript — Lista de Exercícios

> **Do básico às funções**
> Aluno: Luk • Professor: Claude • Data: 17/04/2026

---

## Como usar este material

Este documento contém 12 exercícios de JavaScript, divididos em 4 tópicos. Para cada tópico você terá 3 exercícios: um fácil, um médio e um difícil. O objetivo é consolidar o conteúdo que você já estudou no curso.

**Sugestão de abordagem:**

1. Leia o enunciado com calma e entenda o que é pedido antes de codar.
2. Resolva primeiro no papel ou em comentários, depois no editor (pode usar o Cursor).
3. Teste sua solução com diferentes entradas antes de consultar o gabarito.
4. Só olhe o gabarito **depois** de tentar. Se travar, leia a dica primeiro.
5. Compare sua solução com a do gabarito — soluções diferentes podem estar ambas corretas.

---

## Tópico 1 — Introdução à linguagem e ambiente

> **Objetivo:** praticar a execução de código JavaScript, uso do console, comentários e a estrutura mínima de um programa.

### 🟢 Exercício 1.1 — FÁCIL

Crie um arquivo chamado `ola.js` que imprima no console exatamente três linhas: seu nome, sua profissão e sua linguagem favorita. Use `console.log()`.

> 💡 **Dica:** lembre-se que cada chamada de `console.log()` gera uma nova linha.

---

### 🟠 Exercício 1.2 — MÉDIO

Crie um script que mostre no console uma "ficha de apresentação" formatada. Declare três constantes (`nome`, `idade`, `cidade`) e imprima uma única mensagem usando **template literals** (crase), no formato:

```
Olá, eu sou <nome>, tenho <idade> anos e moro em <cidade>.
```

> 💡 **Dica:** template literals usam crases (`` ` ``) e permitem interpolação com `${ }`.

---

### 🔴 Exercício 1.3 — DIFÍCIL

Escreva um script que, ao ser executado via Node.js no terminal, receba o nome da pessoa como argumento de linha de comando e imprima uma saudação personalizada. Se nenhum nome for passado, imprima `"Olá, visitante!"`. Considere também o caso em que o usuário passa apenas espaços em branco.

```bash
node saudacao.js "Luk"
# Saída esperada: Olá, Luk!

node saudacao.js
# Saída esperada: Olá, visitante!
```

> 💡 **Dica:** argumentos chegam em `process.argv`. O primeiro argumento real começa no índice 2. Use `.trim()` para lidar com espaços.

---

## Tópico 2 — Variáveis e tipos de dados

> **Objetivo:** praticar `let`, `const`, `var`, os tipos primitivos (string, number, boolean, null, undefined) e conversões entre eles.

### 🟢 Exercício 2.1 — FÁCIL

Declare quatro variáveis com tipos diferentes: uma string, um número, um booleano e um valor `null`. Em seguida, imprima o valor e o tipo de cada uma usando `typeof`.

```js
console.log(typeof minhaVariavel);
```

> 💡 **Dica:** `typeof` retorna uma string descrevendo o tipo. Cuidado: `typeof null` é `"object"` — isso é um bug histórico do JS.

---

### 🟠 Exercício 2.2 — MÉDIO

Você recebe a idade de uma pessoa como string (por exemplo, vinda de um formulário). Converta a string para número, calcule em que ano ela nasceu (considere o ano atual como 2026) e imprima uma mensagem no formato: `"Você nasceu em <ano>."`. Teste com a entrada `"28"`.

```js
const idadeTexto = "28";
// seu código aqui
```

> 💡 **Dica:** `Number(string)` ou `parseInt(string, 10)` convertem texto em número.

---

### 🔴 Exercício 2.3 — DIFÍCIL

Escreva uma função pura chamada `inspecionar(valor)` que recebe qualquer valor e retorna um objeto contendo três propriedades:

- `tipo`: o `typeof` do valor
- `ehVazio`: `true` se for `null`, `undefined`, `""`, `0`, `NaN` ou `false`
- `representacao`: uma string descrevendo o valor de forma legível, tratando especialmente `null` e `undefined`

Teste com pelo menos 5 entradas diferentes cobrindo todos os tipos primitivos.

```js
inspecionar(null);
// { tipo: "object", ehVazio: true, representacao: "null" }

inspecionar("Luk");
// { tipo: "string", ehVazio: false, representacao: "\"Luk\"" }
```

> 💡 **Dica:** cuidado com `NaN`: use `Number.isNaN(valor)` para detectá-lo, pois `NaN !== NaN`.

---

## Tópico 3 — Operadores e estruturas de controle

> **Objetivo:** praticar operadores aritméticos, lógicos e de comparação, além de `if/else`, `switch`, `for` e `while`.

### 🟢 Exercício 3.1 — FÁCIL

Escreva um programa que, dado um número armazenado em uma variável, imprima no console se ele é `"Par"` ou `"Ímpar"`. Teste com os números `7`, `10` e `0`.

> 💡 **Dica:** o operador `%` (resto da divisão) é seu melhor amigo aqui.

---

### 🟠 Exercício 3.2 — MÉDIO

Crie um programa que percorra os números de 1 a 50 e imprima:

- `"FizzBuzz"` se o número for divisível por 3 **e** por 5
- `"Fizz"` se for divisível apenas por 3
- `"Buzz"` se for divisível apenas por 5
- O próprio número caso contrário

Use um loop `for`.

> 💡 **Dica:** a ordem das condições importa — teste o caso mais específico (divisível por 3 E por 5) primeiro.

---

### 🔴 Exercício 3.3 — DIFÍCIL

Escreva um programa que simule um caixa eletrônico simples. Dado um valor de saque (por exemplo, `387`), o programa deve calcular quantas notas de cada valor serão entregues, usando o **menor número possível** de notas. As notas disponíveis são: `100, 50, 20, 10, 5, 2 e 1`. Imprima o resultado indicando a quantidade de cada nota (apenas as que tiverem quantidade maior que zero).

```js
saque(387);
// 3 nota(s) de R$ 100
// 1 nota(s) de R$ 50
// 1 nota(s) de R$ 20
// 1 nota(s) de R$ 10
// 1 nota(s) de R$ 5
// 1 nota(s) de R$ 2
```

> 💡 **Dica:** use um array com os valores das notas em ordem decrescente e um loop `for` percorrendo esse array.

---

## Tópico 4 — Funções

> **Objetivo:** praticar declaração de funções, parâmetros, retorno, arrow functions, escopo e funções como valores.

### 🟢 Exercício 4.1 — FÁCIL

Escreva uma função chamada `somar(a, b)` que recebe dois números e retorna a soma deles. Em seguida, reescreva a mesma função usando **arrow function** e chame as duas versões no console.

> 💡 **Dica:** a arrow function pode ficar em uma única linha: `const somar = (a, b) => a + b;`

---

### 🟠 Exercício 4.2 — MÉDIO

Crie uma função `calcularIMC(peso, altura)` que retorna um objeto com duas propriedades: `valor` (o IMC calculado com 2 casas decimais) e `classificacao` (uma string: `"Abaixo do peso"`, `"Normal"`, `"Sobrepeso"` ou `"Obesidade"`, segundo os limites padrão da OMS). A fórmula é `peso / (altura * altura)`. Teste com peso `72` e altura `1.75`.

```js
// Limites de referência:
// < 18.5   -> Abaixo do peso
// 18.5–24.9 -> Normal
// 25–29.9  -> Sobrepeso
// >= 30    -> Obesidade
```

> 💡 **Dica:** use `.toFixed(2)` para formatar o número com 2 casas decimais. Cuidado: `toFixed` retorna uma **string**.

---

### 🔴 Exercício 4.3 — DIFÍCIL

Implemente uma função de ordem superior chamada `criarContador(inicial = 0)`. Ela deve retornar um objeto com três métodos:

- `incrementar()`: soma 1 e retorna o novo valor
- `decrementar()`: subtrai 1 e retorna
- `obter()`: retorna o valor atual sem alterar

O contador interno **não deve ser acessível diretamente de fora** — apenas pelos métodos (use **closure**). Crie dois contadores independentes para testar que eles não compartilham estado.

```js
const c1 = criarContador();
const c2 = criarContador(10);
c1.incrementar(); // 1
c1.incrementar(); // 2
c2.decrementar(); // 9
c1.obter();       // 2
```

> 💡 **Dica:** closure = uma função interna "lembra" das variáveis da função externa, mesmo depois que a externa já retornou.

---

# 📘 Gabarito comentado

> ⚠️ Só consulte esta seção **depois** de tentar resolver. As soluções abaixo são **uma** das muitas possíveis — se a sua funciona corretamente, ela também está certa.

---

## Tópico 1 — Introdução

### Gabarito 1.1

```js
console.log("Luk");
console.log("Project Manager");
console.log("JavaScript");
```

**Explicação:** três chamadas de `console.log()`, cada uma imprime em uma linha. Simples e direto.

---

### Gabarito 1.2

```js
const nome = "Luk";
const idade = 30;
const cidade = "Florianópolis";

console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
```

**Explicação:** template literals (crases) permitem interpolar variáveis com `${ }`. É muito mais legível do que concatenar com `+`.

---

### Gabarito 1.3

```js
const nome = process.argv[2];

if (!nome || nome.trim() === "") {
  console.log("Olá, visitante!");
} else {
  console.log(`Olá, ${nome.trim()}!`);
}
```

**Explicação:** `process.argv` é um array onde `[0]` é o node, `[1]` é o caminho do script e `[2]` em diante são os argumentos. O operador `!` trata tanto `undefined` (sem argumento) quanto string vazia. O `.trim()` evita espaços em branco.

---

## Tópico 2 — Variáveis e tipos

### Gabarito 2.1

```js
const texto = "JavaScript";
const numero = 42;
const ativo = true;
const vazio = null;

console.log(texto, typeof texto);   // JavaScript string
console.log(numero, typeof numero); // 42 number
console.log(ativo, typeof ativo);   // true boolean
console.log(vazio, typeof vazio);   // null object  (bug histórico do JS)
```

**Explicação:** o detalhe importante aqui é `typeof null` retornar `"object"`. Esse bug nunca foi corrigido por compatibilidade.

---

### Gabarito 2.2

```js
const idadeTexto = "28";
const idade = Number(idadeTexto);
const anoAtual = 2026;
const anoNascimento = anoAtual - idade;

console.log(`Você nasceu em ${anoNascimento}.`);
// Saída: Você nasceu em 1998.
```

**Explicação:** `Number()` é a forma mais limpa de converter string para número. `parseInt()` também funciona, mas aceita strings como `"28anos"` (ignorando o texto depois). Para entrada limpa, prefira `Number()`.

---

### Gabarito 2.3

```js
function inspecionar(valor) {
  const tipo = typeof valor;

  const ehVazio =
    valor === null ||
    valor === undefined ||
    valor === "" ||
    valor === 0 ||
    valor === false ||
    (typeof valor === "number" && Number.isNaN(valor));

  let representacao;
  if (valor === null) representacao = "null";
  else if (valor === undefined) representacao = "undefined";
  else if (typeof valor === "string") representacao = `"${valor}"`;
  else representacao = String(valor);

  return { tipo, ehVazio, representacao };
}

console.log(inspecionar(null));       // { tipo: 'object',    ehVazio: true,  representacao: 'null' }
console.log(inspecionar(undefined));  // { tipo: 'undefined', ehVazio: true,  representacao: 'undefined' }
console.log(inspecionar(""));         // { tipo: 'string',    ehVazio: true,  representacao: '""' }
console.log(inspecionar("Luk"));      // { tipo: 'string',    ehVazio: false, representacao: '"Luk"' }
console.log(inspecionar(42));         // { tipo: 'number',    ehVazio: false, representacao: '42' }
console.log(inspecionar(NaN));        // { tipo: 'number',    ehVazio: true,  representacao: 'NaN' }
```

**Explicação:** `Number.isNaN()` é a forma correta de detectar `NaN` — `NaN === NaN` é `false`, então comparação direta não funciona. `String(valor)` converte qualquer coisa para representação textual.

---

## Tópico 3 — Operadores e controle de fluxo

### Gabarito 3.1

```js
const numero = 7;

if (numero % 2 === 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}
```

**Explicação:** o operador `%` devolve o resto da divisão. Se o resto da divisão por 2 é 0, o número é par. O zero é considerado par — e o código acima lida com isso corretamente.

---

### Gabarito 3.2

```js
for (let i = 1; i <= 50; i++) {
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
```

**Explicação:** clássico problema de entrevista. A chave é testar o caso mais específico primeiro (divisível por 3 **E** 5), senão nunca cairíamos nele — o número já teria sido capturado por `"Fizz"`.

---

### Gabarito 3.3

```js
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

saque(387);
```

**Explicação:** algoritmo guloso (*greedy*) — sempre escolho a maior nota possível primeiro. `Math.floor(restante / nota)` dá quantas notas cabem; o `%` atualiza o que ainda falta pagar. Funciona porque o sistema de notas tem propriedade canônica.

---

## Tópico 4 — Funções

### Gabarito 4.1

```js
// Declaração clássica
function somar(a, b) {
  return a + b;
}

// Arrow function equivalente
const somarArrow = (a, b) => a + b;

console.log(somar(2, 3));        // 5
console.log(somarArrow(10, 20)); // 30
```

**Explicação:** quando a função tem um único `return`, a arrow function fica bem enxuta. Uma diferença importante: arrow functions **não** têm `this` próprio — isso será útil em React e quando trabalhar com métodos de objeto.

---

### Gabarito 4.2

```js
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
// { valor: 23.51, classificacao: "Normal" }
```

**Explicação:** `toFixed(2)` retorna string — envolver em `Number()` devolve número de novo. A cascata de `else if` funciona porque cada condição só é avaliada se a anterior foi falsa, então não precisamos repetir limites (não precisa escrever `imc >= 18.5 && imc < 25`).

---

### Gabarito 4.3

```js
function criarContador(inicial = 0) {
  let valor = inicial; // variável "privada" via closure

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

// console.log(c1.valor); -> undefined: não há acesso direto à variável
```

**Explicação:** este é o padrão clássico de **closure** — a variável `valor` é criada dentro de `criarContador()` e **não** é propriedade do objeto retornado. Os métodos têm acesso a ela porque foram definidos no mesmo escopo. Cada chamada de `criarContador()` gera um novo `valor`, independente dos outros. Esse padrão é a base de muitas bibliotecas e é essencial entender antes de React Hooks.

---

<p align="center"><strong>Bons estudos, Luk! 💡</strong></p>
<p align="center"><em>Se quiser, podemos continuar com exercícios de Arrays, Objetos, Promises ou DOM.</em></p>