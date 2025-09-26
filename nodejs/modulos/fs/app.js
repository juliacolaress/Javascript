//importando o modulo fs (file system)
//const fs = require('fs');
import fs from 'fs';
//lendo um arquivo de forma assincroma
fs.readFile('exemplo.txt', 'utf8',(erro,dados) => {
    //tratando erro
    if(erro) {
        //adicionando o erro no console
        console.error('Erro ao ler o arquivo', erro);
        //retornando para nao executar o console.log baixo
        return;
    }
    //se nao houver erro,exibindo o conteudo do arquivo
    console.log('Conteúdo do arquivo:', dados);
});
//imprimimindo uma mensagem antes da leitura do arquivo
console.log('Esta mensagem aparece primeiro');