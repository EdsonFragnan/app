'use strict';

const http = require('http');
const Boom = require('boom');
const db = require('../../metodos/metodos.js');

module.exports.listarClientes = (req, res) => {
    try {
      db.find('clientes', 'cliente', (err, data) => {
        console.log(data);
        if (err) {
          res(Boom.badData(err))
        } else {
          if (data === null || data.length === 0) {
            res(Boom.badData('Clientes não encontrados.'));
          } else {
            const resp = {
              'clientes': data
            }
            res(resp);
          }
        }
      });
    } catch (e) {
      res(Boom.serverUnavailable('Erro Interno no servidor.'))
    }
}
