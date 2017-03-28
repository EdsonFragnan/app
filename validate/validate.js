const fs = require('fs');
const path = require('path');
const dir = './api';

module.exports = {
  validateFiles: (file, dir, callback) => {
    const files = fs.readdirSync(dir);
    file.map((files) => {
      const config = [__dirname, '/api', '/', files, '/config.js'].join('').replace('rotas/', '').replace('validate/', '');
      const validate = [__dirname, '/api', '/', files, '/validate.js'].join('').replace('rotas/', '').replace('validate/', '');
      const controller = [__dirname, '/api', '/', files, '/controller.js'].join('').replace('rotas/', '').replace('validate/', '');
      if (!fs.existsSync(config)) {
        throw new Error('Arquivo config.js não encontrado ' + dir + '/' + file);
      } else if (!fs.existsSync(validate)) {
        throw new Error('Arquivo validate.js não encontrado' + dir + '/' + file);
      } else if (!fs.existsSync(controller)) {
        throw new Error('Arquivo controller.js não encontrado' + dir + '/' + file);
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
