'use strict';

const http = require('http');
const Boom = require('boom');
const jwt = require('jwt-simple');

module.exports.buscacep = (req, res) => {
    try {
      const decoded = jwt.decode(req.query.token, 'token');
      res('decoded: ' + decoded);
    } catch (e) {
      res(Boom.serverUnavailable('Erro Interno no servidor.'))
    }
}
