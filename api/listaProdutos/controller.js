'use strict';

const http = require('http');
const Boom = require('boom');
const db = require('../../metodos/metodos.js');

module.exports.listarProdutos = (req, res) => {
    try {
      db.find('produtos', 'produto', (err, data) => {
        if (err) {
          res(Boom.badData(err))
        } else {
          if (data === null || data.length === 0) {
            res(Boom.badData('Não há produtos na lista.'));
          } else {
            res(data);
          }
        }
      });
    } catch (e) {
      res(Boom.serverUnavailable('Erro Interno no servidor.'))
    }
}
