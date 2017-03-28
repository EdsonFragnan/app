'use strict';

const http = require('http');
const Boom = require('boom');
const async = require('async');

module.exports.buscacep = (req, res) => {
    try {
      const nomeVal = req.query.nome;
      const idadeVal = req.query.idade;

      const funcNome = (callback) => {
        callback(null, nomeVal);
      };

      const funcIdade = (val1, callback) => {
        let descPessoa = [
          val1,
          idadeVal
        ];
        callback(null, descPessoa)
      };

      const funcDone = (desc, callback) => {
        let valDone = {
          'pessoa': {
            'nome': desc[0],
            'idade': desc[1]
          }
        };
        callback(null, valDone);
      };

      async.waterfall([
        funcNome,
        funcIdade,
        funcDone,
      ], (err, result) => {
        if (err) {
          res(Boom.badRequest('Errou.'));
        } else {
          res(result);
        }
      });

    } catch (e) {
      res(Boom.serverUnavailable('Erro Interno no servidor.'))
    }
}
