const Joi = require('joi');
module.exports.validate = {
  validate: {
    params: {
      cpf: Joi.number().description('Insira o cpf do cliente.')
    },
    payload: {
      nome: Joi.string().description('Insira seu nome.'),
      sobrenome: Joi.string().description('Insira seu sobrenome.'),
      cpf: Joi.number().description('Insira seu CPF.'),
      rg: Joi.number().description('Insira seu RG.'),
      estado_civil: Joi.string().description('Insira seu estado civil.'),
      email: Joi.string().description('Insira seu email.'),
      logradouro: Joi.string().description('Insira o logradouro.'),
      complemento: Joi.string().description('Insira o complemento.'),
      bairro: Joi.string().description('Insira o bairro.'),
      localidade: Joi.string().description('Insira a localidade.'),
      uf: Joi.string().description('Insira a uf.'),
      cep: Joi.string().description('Insira seu CEP.').min(8)
    }
  }
}
