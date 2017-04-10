'use strict';

const http = require('http');
const Boom = require('boom');
const db = require('../../metodos/metodos.js');

module.exports.alterar = (req, res) => {
    try {
      const request = {
        nome: req.payload.nome,
        sobrenome: req.payload.sobrenome,
        cpf: req.payload.cpf,
        rg: req.payload.rg,
        estado_civil: req.payload.estado_civil,
        email: req.payload.email,
        logradouro: req.payload.logradouro,
        complemento: req.payload.complemento,
        bairro: req.payload.bairro,
        localidade: req.payload.localidade,
        uf: req.payload.uf,
        cep: req.payload.cep
      };
      db.updateOne(request, 'produtos', 'produto', (err, data) => {
        if (err) {
          res(Boom.badData(err))
        } else {
          res(data.result);
        }
      });
    } catch (e) {
      res(Boom.serverUnavailable('Erro Interno no servidor.'))
    }
}
