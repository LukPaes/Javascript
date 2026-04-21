//Crie um script que mostre no console uma 
// "ficha de apresentação" formatada. 
// Declare três constantes (`nome`, `idade`, `cidade`) e 
// imprima uma única mensagem usando **template literals** (crase), no formato:

//```
//Olá, eu sou <nome>, tenho <idade> anos e moro em <cidade>.
//```

//> 💡 **Dica:** template literals usam crases (`` ` ``) e permitem interpolação com `${ }`.

const nome = "Luciano Paes";
const idade = 50;
const cidade = "Florianópolis";

console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e moro em ${cidade}.`);