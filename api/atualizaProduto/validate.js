const Joi = require('joi');
module.exports.validate = {
  validate: {
    params: {
      id_produto: Joi.string().description('Insira o id do produto.')
    },
    payload: {
      nome_produto: Joi.string().description('Insira o nome do produto.'),
      preco_produto: Joi.string().description('Insira o preço do produto.'),
      descricao_produto: Joi.string().description('Insira a descrição do produto.'),
      tamanho_memoria: Joi.string().description('Insira a quantidade de memória.'),
      tipo_transmissao: Joi.string().description('Insira o tipo de transmissão do aparelho.'),
      quantidade_produto: Joi.number().description('Insira a quantidade do produto.').min(1),
      marca_produto: Joi.string().description('Insira a marca do produto.'),
      fabricante_produto: Joi.string().description('Insira o nome do fabricante do produto.'),
      data_entrada_produto: Joi.date().description('Insira a data de entrada do produto.'),
      imagem_produto: Joi.string().description('Insira a imagem do produto.')
    }
  }
}
