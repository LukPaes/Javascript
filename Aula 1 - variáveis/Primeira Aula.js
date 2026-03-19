let mensagem = "Olá Mundo!";
console.log(mensagem); 



function testeHoisting() {
    let sobrenome = "Paes";
    var curso;
    console.log("Meu sobrenome é:", sobrenome);
    console.log("Meu curso é:", curso);
    curso = "javascript";
}

testeHoisting();

function exemploHoisting() {
    // Chamando a função antes da declaração
    iniciar();

    function iniciar() {
        console.log("Função iniciar foi executada!");
    }
}

exemploHoisting();