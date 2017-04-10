'use strict';

const http = require('http');
const Boom = require('boom');
const db = require('../../metodos/metodos.js');

module.exports.listaCliente = (req, res) => {
    try {
      db.findOne(req.params, 'clientes', 'cliente', (err, data) => {
        if (err) {
          res(Boom.badData(err))
        } else {
          if (data === null || data.length === 0) {
            res(Boom.badData('Cliente não encontrado.'));
          } else {
            res(data);
          }
        }
      });
    } catch (e) {
      res(Boom.serverUnavailable('Erro Interno no servidor.'))
    }
}
