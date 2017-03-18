const fs = require('fs');
const path = require('path');
const dir = './api';
const links = [];

module.exports = {
  validateFiles: (file, dir, callback) => {
    const files = fs.readdirSync(dir);
    file.map((files) => {
      var config = [__dirname, '/api', '/', files, '/config.js'].join('').replace('rotas/', '').replace('validate/', '');
      var validate = [__dirname, '/api', '/', files, '/validate.js'].join('').replace('rotas/', '').replace('validate/', '');
      var controller = [__dirname, '/api', '/', files, '/controller.js'].join('').replace('rotas/', '').replace('validate/', '');
      if (!fs.existsSync(config)) {
        throw new Error('Arquivo config.js não encontrado ' + dir + '/' + file);
      } else if (!fs.existsSync(validate)) {
        throw new Error('Arquivo validate.js não encontrado' + dir + '/' + file);
      } else if (!fs.existsSync(controller)) {
        throw new Error('Arquivo controller.js não encontrado' + dir + '/' + file);
      } else {
        var config = require(config);
        var validate = require(validate);
        var endpoint = {
          config: config,
          validate: validate
        };
      }
      var endpoints = [];
      endpoints.push(endpoint);
      callback(endpoints);
    });
  }
};
