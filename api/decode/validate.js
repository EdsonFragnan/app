const Joi = require('joi');

module.exports.validate = {
  validate: {
    query: {
      token : Joi.string().description('Insira seu token.').required()
    }
  }
}
