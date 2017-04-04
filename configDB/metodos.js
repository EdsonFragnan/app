"use strict";

const connect = require('./conexao');
const operations = require('./operacoes');
const access = (callback) => {
  connect.connection((err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  insertOne: (request, callback) => {
    const objDAO = new Cliente(request);
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execInsertOne(db, objDAO.insertOne(), (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  insertMany: (request, callback) => {
    const objDAO = new Cliente(request);
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execInsertMany(db, objDAO.insertMany(), (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  updateOne: (request, callback) => {
    const objDAO = new Cliente(request);
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execUpdateOne(db, objDAO.updateOne(), (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  updateMany: (request, callback) => {
    const objDAO = new Cliente(request);
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execUpdateMany(db, objDAO.updateMany(), (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  deleteOne: (request, callback) => {
    const objDAO = new Cliente(request);
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execDeleteOne(db, objDAO.deleteOne(), (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  deleteMany: (request, callback) => {
    const objDAO = new Cliente(request);
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execDeleteMany(db, objDAO.deleteMany(), (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  findOne: (request, callback) => {
    const objDAO = new Cliente(request);
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execFindOne(db, objDAO.findOne(), (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  find: (callback) => {
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execFind(db, (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  }
};

class Cliente {
  constructor(request) {
    this.nome = request.nome;
    this.sobrenome = request.sobrenome;
    this.cpf = request.cpf;
    this.rg = request.rg;
    this.estado_civil = request.estado_civil;
    this.email = request.email;
    this.logradouro = request.logradouro;
    this.complemento = request.complemento;
    this.bairro = request.bairro;
    this.localidade = request.localidade;
    this.uf = request.uf;
    this.cep = request.cep;
  }

  insertOne() {
    return this;
  }
  insertMany() {
    return;
  }
  updateOne() {
    return this;
  }
  updateMany() {
    return;
  }
  deleteOne() {
    return {
      'cpf': this.cpf
    };
  }
  deleteMany() {
    return;
  }
  findOne() {
    return {
      'cpf': this.cpf
    };
  }
  find() {
    return this;
  }

}
