const connect = require('./conexao');

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
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        db.collection('cliente').insert(request, (err, data) => {
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
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        db.collection('cliente').insertMany(request, (err, data) => {
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
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        db.collection('cliente').updateOne(request, (err, data) => {
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
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        db.collection('cliente').updateMany(request, (err, data) => {
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
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        db.collection('cliente').deleteOne(request, (err, data) => {
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
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        db.collection('cliente').deleteMany(request, (err, data) => {
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
    access((err, db) => {
      if (err) {
        callback(err, null);
      } else {
        db.collection('cliente').findOne(request, (err, data) => {
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
        const items = db.collection('cliente').find().toArray();
        callback(null, items);
      }
    });
  }
};
