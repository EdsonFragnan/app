'use strict';

const http = require('http');
const Boom = require('boom');
const jwt = require('jwt-simple');

module.exports.buscacep = (req, res) => {
    try {
      const token = jwt.encode(req.query.nome, 'token');
      res('token: ' + token);
    } catch (e) {
      res(Boom.serverUnavailable('Erro Interno no servidor.'))
    }
}
