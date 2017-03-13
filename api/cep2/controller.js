'use strict';

module.exports = controllerImpl;
const http = require('http');
const Boom = require('boom');

function controllerImpl(res) {
  res = 'Sucesso';
  return res;
}

/*exports.buscacep = function(req, res) {
  try {
    const options = {
      host: 'viacep.com.br',
      path: '/ws/' + req.query.cep + '/json/'
    };

    const callback = function(response) {
      var retorno = '';
      response.on('data', function (data) {
        console.log(data);
        retorno += data;
      }).on('end', function (err) {
        err = /400/;
        if (err.test(retorno)) {
          res(Boom.badRequest(400, 'CEP não encontrado.'))
        } else {
          res(retorno);
        }
      });
    }
    var req = http.request(options, callback).end();
  } catch (e) {
    res(Boom.serverUnavailable('Erro Interno no servidor.'))
  }
}*/
