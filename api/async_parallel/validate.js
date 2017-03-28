const Joi = require('joi');

module.exports.validate = {
  validate: {
    query: {
      nome : Joi.string().description('Insira seu nome.'),
      idade : Joi.number().description('Insira sua idade.')
    }
  }
}
