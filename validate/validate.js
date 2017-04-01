'use strict';

const bibliotecas = require('./../config/configHapi')();
module.exports = {
  validateFiles: (file, dir, callback) => {
    const files = bibliotecas.fs.readdirSync(bibliotecas.dir);
    file.map((files) => {
      const config = [__dirname, '/api', '/', files, '/config.js'].join('').replace('rotas/', '').replace('validate/', '');
      const validate = [__dirname, '/api', '/', files, '/validate.js'].join('').replace('rotas/', '').replace('validate/', '');
      const controller = [__dirname, '/api', '/', files, '/controller.js'].join('').replace('rotas/', '').replace('validate/', '');
      if (!bibliotecas.fs.existsSync(config)) {
        throw new Error('Arquivo config.js não encontrado ' + bibliotecas.dir + '/' + file);
      } else if (!bibliotecas.fs.existsSync(validate)) {
        throw new Error('Arquivo validate.js não encontrado' + bibliotecas.dir + '/' + file);
      } else if (!bibliotecas.fs.existsSync(controller)) {
        throw new Error('Arquivo controller.js não encontrado' + bibliotecas.dir + '/' + file);
      } else {
        const configReq = require(config);
        const validateReq = require(validate);
        var endpoint = {
          config: configReq,
          validate: validateReq
        };
      }
      const endpoints = [];
      endpoints.push(endpoint);
      callback(endpoints);
    });
  }
};
