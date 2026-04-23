//### 🔴 Exercício 1.3 — DIFÍCIL
// Escreva um script que, ao ser executado via Node.js no terminal, 
// receba o nome da pessoa como argumento de linha de comando e 
// imprima uma saudação personalizada. Se nenhum nome for passado, i
// mprima `"Olá, visitante!"`. Considere também o caso em que o usuário 
// passa apenas espaços em branco.

const nome = "Luciano Paes";

if (!nome || nome.trim() === "") {
  console.log("Olá, visitante!");
} else {
  console.log(`Olá, ${nome.trim()}!`);
}
