const Joi = require('joi');

module.exports.validate = {
  validate: {
    payload: {
      nome: Joi.string().description('Insira seu nome.').required(),
      sobrenome: Joi.string().description('Insira seu sobrenome.').required(),
      cpf: Joi.number().description('Insira seu CPF.').required(),
      rg: Joi.number().description('Insira seu RG.').required(),
      estado_civil: Joi.string().description('Insira seu estado civil.').required(),
      email: Joi.string().description('Insira seu email.').required(),
      logradouro: Joi.string().description('Insira o logradouro.').required(),
      complemento: Joi.string().description('Insira o complemento.').required(),
      bairro: Joi.string().description('Insira o bairro.').required(),
      localidade: Joi.string().description('Insira a localidade.').required(),
      uf: Joi.string().description('Insira a uf.').required(),
      cep: Joi.number().description('Insira o CEP.').required()
    }
  }
}
