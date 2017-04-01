'use strict';

const bibliotecas = require('./config/configHapi')();

bibliotecas.server.connection({
  host: 'localhost',
  port: 8080
});

bibliotecas.rotas.readDir(bibliotecas.dir, function(data) {
   bibliotecas.log.info('API - ' + data.path + ' - ' + data.method + ' - ' + 'online.'.green);
   bibliotecas.server.route(data);
});

bibliotecas.server.register([
  bibliotecas.Inert,
  bibliotecas.Vision,
  {
    'register': bibliotecas.HapiSwagger,
    'options': bibliotecas.options
  }
], (err) => {
  bibliotecas.server.start((err) => {
    if (err) {
      throw err;
    } else {
      console.log('Server rodando na porta: 8080'.green);
    }
  });
});
