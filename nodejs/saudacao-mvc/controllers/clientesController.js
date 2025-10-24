const clientesModel = require('../models/clientesModel');
module.exports = {

    clientes: (req, res) => {
    res.sendFile('clientes.html', {root: './views'});
    },

     login: (req, res) => {
    res.sendFile('login.html', {root: './views'});
    },
    
    verificarLogin: (req, res) => {
        const { nome, senha } = req.body;
        const mensagem = clientesModel.gerarMensagemLogin(nome, senha);
        res.send(`<h1>${mensagem}</h1>`);
      }
};