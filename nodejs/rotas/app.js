//Importa o modulo http nativo do Node.js
import http from 'http';

const port = 3000;

//Cria o servidor
const server = http.createServer((request,response) => {
    const url = request.url;
    const method = request.method;

//Define o cabeçalho da resposta com html
response.setHeader('Content-Type', 'text/html; charset=utf-8');

//roteamento basico
if (url ==='/') {
    response.statusCode = 200; //OK
    response.end('<h1>Página Inicial</h1>');

} else if (url === '/sobre' && method === 'GET') {
    response.statusCode = 200; //ok
    response.end('<h1>Sobre nós</h1><p>Esta é uma aplicação de exemplo com Node.js puro</p>');

} else if (url === '/contato') {
    response.statusCode = 200 //ok
    response.end ('<h1>Fale conosco</h1>');

} else{
    //se nenhuma rota corresponder
    response.statusCode =404; //Not found
    response.end('<h1>404 - Página não encontrada</h1>');
}
});

//inicia o swervidor para ouvir na porta definida
server.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});