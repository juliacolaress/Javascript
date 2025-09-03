//importanto o modulo http
const http =require('http');

//criando um servidor que responde com "Hello World!" para todas as requisiçoẽs
http.createServer((req,res) =>{
    //definindo o cabeçalho da resposta com status 200 (OK) e tipo conteudo text/plain
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    //enviando a resposta "Hello World!"
    res.end('Hello World!');
    //adicionando um log no console para cada requisição recebida
}).listen(8080);0