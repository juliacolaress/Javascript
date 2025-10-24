module.exports = {

    gerarMensagemLogin: (login,senha) => {
    let acesso;

    if (login === "Júlia" && senha === "12345") {
        acesso = "liberado";
    } else {
        acesso = "negado";
    }
    return `Olá, ${login}! Seu acesso foi ${acesso}.`;
    }
};