'use strict';

const EasyXml = require('easyxml');
const fs = require('fs');
const Boom = require('boom');

module.exports.convert = (req, res) => {
  const arquivo = req.payload.file;
  const objVazio = (obj) => {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
        return false;
    }
    return true;
  }

  const serializer = new EasyXml({
    singularize: false,
    rootElement: 'RESPOSTA',
    dateFormat: 'ISO',
    manifest: false
  });

  const resp = objVazio(arquivo);
  if (resp === true) {
    res(Boom.badRequest('Arquivo inválido ou vazio.'));
  } else {
    const val = new Buffer(arquivo, 'utf8').toString().toUpperCase();
    const valParse = JSON.parse(val);
    res(serializer.render(valParse));
  }
};
