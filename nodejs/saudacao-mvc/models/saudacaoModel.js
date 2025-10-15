module.exports = {
  gerarMensagemPersonalizada: (nome,idade,genero) => {
    let faixaEtaria;

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else if (idade < 60) {
      faixaEtaria = "adulto";
    } else {
      faixaEtaria = "idoso";
    }
 let msgGenero
if (genero === "masculino") {
  msgGenero = "você é um homem!";
} else { msgGenero = "você é uma mulher!"}
 
    

    return `Olá, ${nome}! Você é um(a) ${faixaEtaria} e ${msgGenero}.`;
  }
};
