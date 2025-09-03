//importando o modulo os (operating system)
const os = require('os');

//exibindo informações do sistema operacional
//exibindo a arquitetura do sistema
console.log('Arquitetura do sistma:', os.arch());
//exibindo a quantidade de CPUs
console.log('Quantidade de CPUs:', os.cpus().lenght);
//exibindo o total de memoria em bytes
console.log('Memoria total (bytes):',os.totalmem());
//exibindo a memoria livre em bytes
console.log('Memória livre (bytes)', os.freemem());
//exibindo o sistema operacinal
console.log(os.platform());

