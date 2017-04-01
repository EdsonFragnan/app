const Joi = require('joi');
module.exports.validate = {
  validate: {
    params: {
      cpf: Joi.number().description('Insira o cpf do cliente.').required()
    }
  }
}
