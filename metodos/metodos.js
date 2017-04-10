const connect = require('./../configDB/conexao');
const operations = require('./operacoes');
const cliente = require('./../classes/Cliente');
const produto = require('./../classes/Produto');
const access = (collect, callback) => {
  connect.connection(collect, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const tratativaObjeto = (collect, request) => {
  if (collect === 'produto') {
     const valProduto = produto.ClassProduto(request);
     return valProduto;
  } else {
    const valCliente = cliente.ClassCliente(request);
    return valCliente;
  }
}

module.exports = {
  insertOne: (request, banco, collect, callback) => {
    const objDAO = tratativaObjeto(collect, request);
    access(banco, (err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execInsertOne(db, collect, objDAO.insertOne(), (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  insertMany: (request, banco, collect, callback) => {
    const objDAO = tratativaObjeto(collect, request);
    access(banco, (err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execInsertMany(db, collect, objDAO.insertMany(), (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  updateOne: (request, banco, collect, callback) => {
    const objDAO = tratativaObjeto(collect, request);
    access(banco, (err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execUpdateOne(db, collect, objDAO.updateOne(), (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  updateMany: (request, banco, collect, callback) => {
    const objDAO = tratativaObjeto(collect, request);
    access(banco, (err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execUpdateMany(db, collect, objDAO.updateMany(), (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  deleteOne: (request, banco, collect, callback) => {
    const objDAO = tratativaObjeto(collect, request);
    access(banco, (err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execDeleteOne(db, collect, objDAO.deleteOne(), (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  deleteMany: (request, banco, collect, callback) => {
    const objDAO = tratativaObjeto(collect, request);
    access(banco, (err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execDeleteMany(db, collect, objDAO.deleteMany(), (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  findOne: (request, banco, collect, callback) => {
    const objDAO = tratativaObjeto(collect, request);
    access(banco, (err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execFindOne(db, collect, objDAO.findOne(), (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  },

  find: (banco, collect, callback) => {
    access(banco, (err, db) => {
      if (err) {
        callback(err, null);
      } else {
        operations.execFind(db, collect, (err, data) => {
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
