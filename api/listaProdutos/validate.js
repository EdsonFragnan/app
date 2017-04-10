const Joi = require('joi');
module.exports.validate = {
  validate: {},
  response: {
    schema: Joi.array().items(
      Joi.object({
        '_id': Joi.object().required(),
        'id_produto': Joi.string().required(),
        'nome_produto': Joi.string().required(),
        'preco_produto': Joi.string().required(),
        'descricao_produto': Joi.string().required(),
        'tamanho_memoria': Joi.string().required(),
        'tipo_transmissao': Joi.string().required(),
        'quantidade_produto': Joi.number().required(),
        'marca_produto': Joi.string().required(),
        'fabricante_produto': Joi.string().required(),
        'data_entrada_produto': Joi.date().iso().required(),
        'imagem_produto': Joi.string().required()
      })
    )
  }
};
