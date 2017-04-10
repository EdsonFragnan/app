const Joi = require('joi');
module.exports.validate = {
  validate: {
    payload: {
      id_produto: Joi.string().description('Insira o id do produto.').required(),
      nome_produto: Joi.string().description('Insira o nome do produto.').required(),
      preco_produto: Joi.string().description('Insira o preço do produto.').required(),
      descricao_produto: Joi.string().description('Insira a descrição do produto.').required(),
      tamanho_memoria: Joi.string().description('Insira a quantidade de memória.').required(),
      tipo_transmissao: Joi.string().description('Insira o tipo de transmissão do aparelho.').required(),
      quantidade_produto: Joi.number().description('Insira a quantidade do produto.').min(1).required(),
      marca_produto: Joi.string().description('Insira a marca do produto.').required(),
      fabricante_produto: Joi.string().description('Insira o nome do fabricante do produto.').required(),
      data_entrada_produto: Joi.date().description('Insira a data de entrada do produto.').required(),
      imagem_produto: Joi.string().description('Insira a imagem do produto.').required(),
    }
  }
}
