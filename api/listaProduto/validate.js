const Joi = require('joi');
module.exports.validate = {
  validate: {
    params: {
      id_produto: Joi.string().description('Insira o id do produto.').required()
    }
  }
}
