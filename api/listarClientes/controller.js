'use strict';

const http = require('http');
const Boom = require('boom');
const db = require('../../configDB/metodos.js');

module.exports.listarClientes = (req, res) => {
    try {
      db.find((err, data) => {
        if (err) {
          res(Boom.badData(err))
        } else {
          if (data === null || data.length === 0) {
            res(Boom.badData('Clientes não encontrados.'));
          } else {
            res(data);
          }
        }
      });
    } catch (e) {
      res(Boom.serverUnavailable('Erro Interno no servidor.'))
    }
}
