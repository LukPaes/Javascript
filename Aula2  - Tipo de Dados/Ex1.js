
// 1. String
// a) Crie uma string e a converta para maiúsculas.
let nome = "luciano";
let nomeMaiusculo = nome.toUpperCase();
console.log("Nome em maiúsculas:", nomeMaiusculo);

// b) Utilize template literals para concatenar seu nome e sobrenome.
let sobrenome = "Paes";
let nomeCompleto = `${nome} ${sobrenome}`;
console.log(`Meu nome completo é: ${nomeCompleto}`);

//2. Números
// a) Script que calcula a média de três números.
let n1 = 8;
let n2 = 7;
let n3 = 9;

let media = (n1 + n2 + n3) / 3;
console.log("Média:", media);

// b) Investigue o que acontece ao somar número + string.
let numero = 10;
let texto = "20";

let resultadoSoma = numero + texto;
console.log("Resultado de 10 + '20':", resultadoSoma, " (tipo:", typeof resultadoSoma + ")");
// Aqui o JavaScript concatena e o resultado vira uma string "1020".


//3. Booleanos
let idade = 20;
let temCNH = true;

let podeDirigir = idade >= 18 && temCNH;
console.log("Pode dirigir?", podeDirigir); // true

let ehCrianca = idade < 12;
console.log("É criança?", ehCrianca); // false (nesse exemplo)

//4. Arrays
let frutas = ["maçã", "banana", "laranja"];
console.log("Frutas iniciais:", frutas);

//5. Objectos
frutas.push("uva");
console.log("Frutas depois do push:", frutas);


let livro = {    
    titulo: "JavaScript para Iniciantes",    
    autor: "Luciano Paes",    
    numeroPaginas: 250
}
    console.log("Livro:", livro);
    console.log(`O livro "${livro.titulo}" tem ${livro.numeroPaginas} páginas.`);
