'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Log = require('log'),
      log = new Log('info');
const colors = require('colors');
const HapiSwagger = require('hapi-swagger');
const rotas = require('./rotas/rotas.js');
const Pack = require('./package');
const dir = './api';

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080
});

const options = {
  info: {
    'title': 'Documentação APP',
    'version': Pack.version
  }
};

rotas.readDir(dir, function(data) {
   log.info('API - ' + data.path + ' - ' + data.method + ' - ' + 'online.'.green);
   server.route(data);
});

server.register([
  Inert,
  Vision,
  {
    'register': HapiSwagger,
    'options': options
  }
], (err) => {
  server.start((err) => {
    if (err) {
      throw err;
    } else {
      console.log('Server rodando na porta: 8080'.green);
    }
  });
});
