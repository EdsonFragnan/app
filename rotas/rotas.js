const fs = require('fs');
const path = require('path');
const validate = require('../validate/validate.js');

module.exports = {
  readDir: (dir, callback) => {
    const links = [];
    fs.readdir(dir, (err, file) => {
        if (err) {
          throw err;
        }
        validate.validateFiles(file, dir, function(response) {
          response.map((resp) => {
              const respConstruct = Object.assign(resp.config.config.config, resp.validate.validate);
              const objeto = {
                method: resp.config.config.method,
                path: resp.config.config.path,
                config: respConstruct
              }
              callback(objeto);
          });
        });
    });
  }
};
