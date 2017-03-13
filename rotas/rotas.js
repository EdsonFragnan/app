const fs = require('fs');
const path = require('path');
const validate = require('../validate/validate.js');

module.exports = {
  readDir: (dir, callback) => {
    var links = [];
    fs.readdir(dir, (err, file) => {
        if (err) {
          throw err;
        }
        validate.validateFiles(file, dir, function(response) {
          for(var i in response) {
            var resp = response[i];
            var endpoint = {
              method: resp.config.method,
              path: resp.config.path,
              config: {
                handler: resp.config.handler,
                description: resp.config.description,
                notes: resp.config.notes,
                tags: resp.config.tags,
                validate: resp.validate.validate
              }
            };
          }
          callback(endpoint);
        });
    });
  }
};
