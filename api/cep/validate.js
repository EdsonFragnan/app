const Joi = require('joi');

module.exports.validate = {
  validate: {
    query: {
      cep : Joi.string().description('Insira o CEP.')
    }
  }
}
