 
module.exports ={

    cadastrar:(id,descricao,quantidade,preco) => {
    
    return `O produto ${descricao}, com ID: ${id} - Quantidade: ${quantidade}
    - Valor Umitário ${preco} foi cadastrado com sucesso!`;
    }
};