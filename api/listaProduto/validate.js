const Joi = require('joi');
module.exports.validate = {
  validate: {
    params: {
      id_produto: Joi.number().description('Insira o id do produto.').required()
    }
  }
}
