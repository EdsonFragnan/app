'use strict';

const http = require('http');
const Boom = require('boom');
const db = require('../../metodos/metodos.js');

module.exports.deletar = (req, res) => {
    try {
      db.deleteOne(req.params, 'clientes', 'cliente', (err, data) => {
        if (err) {
          res(Boom.badData(err))
        } else {
          res(data);
        }
      });
    } catch (e) {
      res(Boom.serverUnavailable('Erro Interno no servidor.'))
    }
}
