'use strict';

const http = require('http');
const Boom = require('boom');
const async = require('async');

module.exports.asyncSeries = (req, res) => {
    try {
      const nomeVal = req.query.nome;
      const idadeVal = req.query.idade;

      const nome = (callback) => {
        callback(null, nomeVal);
      };

      const idade = (callback) => {
        callback(null, idadeVal);
      };

      async.series([
        nome,
        idade
      ], (err, results) => {
        if (err) {
          res(Boom.badRequest('Errou.'));
        } else {
          res({
            'nome': results[0],
            'idade': results[1]
          });
        }
      });

    } catch (e) {
      res(Boom.serverUnavailable('Erro Interno no servidor.'))
    }
}
