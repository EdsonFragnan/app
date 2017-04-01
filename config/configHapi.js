'use strict';

module.exports = () => {
  const Hapi = require('hapi');
  const Inert = require('inert');
  const Vision = require('vision');
  const Log = require('log'),
        log = new Log('info');
  const colors = require('colors');
  const HapiSwagger = require('hapi-swagger');
  const rotas = require('../rotas/rotas.js');
  const Pack = require('../package');
  const dir = './api';
  const server = new Hapi.Server();
  const options = {
    info: {
      'title': 'Documentação API',
      'version': Pack.version
    }
  };
  const fs = require('fs');
  const path = require('path');

  return {
    'Hapi': Hapi ,
    'Inert': Inert ,
    'Vision': Vision ,
    'Log': Log ,
    'log': log ,
    'colors': colors ,
    'HapiSwagger': HapiSwagger ,
    'rotas': rotas ,
    'Pack': Pack ,
    'dir': dir,
    'server': server,
    'options': options,
    'fs': fs,
    'path': path
  };
};
