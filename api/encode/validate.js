const Joi = require('joi');

module.exports.validate = {
  validate: {
    query: {
      nome : Joi.string().description('Insira seu nome.').required()
    }
  }
}
