'use strict';

const http = require('http');
const Boom = require('boom');
const async = require('async');

module.exports.asyncParallel = (req, res) => {
    try {
      const nomeVal = req.query.nome;
      const idadeVal = req.query.idade;

      async.parallel({
        nome: (callback) => {
          callback(null, nomeVal);
        },
        idade: (callback) => {
          callback(null, idadeVal);
        }
      }, (err, results) => {
        if (err) {
          res(Boom.badRequest('Errou.'));
        } else {
          res({
            'nome': results.nome,
            'idade': results.idade
          });
        }
      });
    } catch (e) {
      res(Boom.serverUnavailable('Erro Interno no servidor.'))
    }
}
