'use strict';

const http = require('http');
const Boom = require('boom');
const db = require('../../metodos/metodos.js');

module.exports.listaProduto = (req, res) => {
    try {
      db.findOne(req.params, 'produtos', 'produto', (err, data) => {
        if (err) {
          res(Boom.badData(err))
        } else {
          if (data === null || data.length === 0) {
            res(Boom.badData('Produto não encontrado.'));
          } else {
            res(data);
          }
        }
      });
    } catch (e) {
      res(Boom.serverUnavailable('Erro Interno no servidor.'))
    }
}
