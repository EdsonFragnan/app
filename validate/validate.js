const fs = require('fs');
const path = require('path');
const dir = './api';
const links = [];

module.exports = {
  validateFiles: (file, dir, callback) => {
    for(var i in file){
      var dirFile = file[i];
    };
    file.map((files) => {
      var diretorio = path.join(dirFile, dir);
      var config = [__dirname, '/api', '/', file, '/config.js'].join('').replace('rotas/', '').replace('validate/', '');
      console.log(config);
      var validate = [__dirname, '/api', '/', file, '/validate.js'].join('').replace('rotas/', '').replace('validate/', '');;
      var controller = [__dirname, '/api', '/', file, '/controller.js'].join('').replace('rotas/', '').replace('validate/', '');;
      if (!fs.existsSync(config)) {
        throw new Error('Arquivo config.js não encontrado ' + dir + '/' + file);
      } else if (!fs.existsSync(validate)) {
        throw new Error('Arquivo validate.js não encontrado' + dir + '/' + file);
      } else if (!fs.existsSync(controller)) {
        throw new Error('Arquivo controller.js não encontrado' + dir + '/' + file);
      } else {
        links.push([
          config,
          validate,
          controller
        ]);
      }
      callback(links);
    });
  }
};
