'use strict';

const http = require('http');
const Boom = require('boom');
const db = require('../../configDB/metodos.js');

module.exports.encontrar = (req, res) => {
    try {
      db.findOne(req.params, (err, data) => {
        if (err) {
          res(Boom.badData(err))
        } else {
          if (data === null || data.length === 0) {
            res(Boom.badData('CPF não encontrado.'));
          } else {
            res(data);
          }
        }
      });
    } catch (e) {
      res(Boom.serverUnavailable('Erro Interno no servidor.'))
    }
}
