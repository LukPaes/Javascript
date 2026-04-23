//Você recebe a idade de uma pessoa como string (por exemplo, vinda de um formulário). 
// Converta a string para número, calcule em que ano ela nasceu (considere o ano atual como 2026)
// e imprima uma mensagem no formato: `"Você nasceu em <ano>."`. 
// Teste com a entrada `"28"`.

const idadeTexto = "28";
const idade = Number(idadeTexto);
const anoAtual = 2026;
const anoNascimento = anoAtual - idade;

console.log(`Você nasceu em ${anoNascimento}.`);
