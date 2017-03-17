const Joi = require('joi');

module.exports = {
  validate: () => {
    res = {
      validate: {
        query: {
          cep : Joi.string().description('Insira o CEP.')
        }
      }
    }
    return res;
  }
}
