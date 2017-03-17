'use strict';

const http = require('http');
const Boom = require('boom');

module.exports.buscacep = (req, res) => {
    try {
      const options = {
        host: 'viacep.com.br',
        path: '/ws/' + req.query.cep + '/json/'
      };

      const callback = (response) => {
        var resp = '';
        response.on('data', (data) => {
          resp += data;
        });

        response.on('end', () => {
          if (JSON.parse(resp).erro === true) {
            res(Boom.badRequest('CEP não encontrado.'));
          } else {
            res(resp);
          }
        });
      }

      req = http.request(options, callback);
      req.end();

    } catch (e) {
      res(Boom.serverUnavailable('Erro Interno no servidor.'))
    }
}
