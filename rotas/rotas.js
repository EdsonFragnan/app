const fs = require('fs');
const path = require('path');
const validate = require('../validate/validate.js');
/*unction readDir(callback) {
  fs.readdir(dir, (err, files) => {
      if (err) {
        throw err;
      }
      console.log(files);
      return files;
  });
}*/

module.exports = {
  readDir: (dir, callback) => {
    var links = [];
    fs.readdir(dir, (err, file) => {
        if (err) {
          throw err;
        }
        validate.validateFiles(file, dir, function(response) {
          callback(response);
        });
    });
  }
};
/*
const rotas = () => {
  var teste = readDir;
  console.log('Teste: ', teste);
};

const readDir =


rotas();

*/

  /*fs.readdir(dir, (err, files) => {
    if (err) {
      throw err;
    }
    return files;
    //var response = validate.validateFiles(files);
    //console.log('Validate: ', validate.validateFiles(files));
  });*/


/*module.exports = {
  rotas: () => {
    var teste = readDir((data, callback) => {
      console.log('AQUI');
    });
    return teste;
  }
};

const readDir = () => {
  callback(fs.readdir(dir, (err, files) => {
    if (err) {
      throw err;
    }
    console.log(files);
  });
}*/
