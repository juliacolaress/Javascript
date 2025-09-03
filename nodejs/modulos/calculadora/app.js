const modulo = require('./meuModulo'); 
const calculadora_idade = require('./calculadora_idade');

const mensagem = modulo.saudacao('Júlia'); // Executando a função
const idadeEm2025 = calculadora_idade.idade('Júlia' , 2008);

console.log(mensagem);
console.log(idadeEm2025);