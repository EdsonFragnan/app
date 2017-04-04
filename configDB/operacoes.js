"use strict";

module.exports = {

  execInsertOne: (db, req, callback) => {
    db.collection('cliente').insert(req, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execInsertMany: (db, req, callback) => {
    db.collection('cliente').insertMany(req, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execUpdateOne: (db, req, callback) => {
    db.collection('cliente').updateOne(req.cpf, req, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execUpdateMany: (db, req, callback) => {
    db.collection('cliente').updateMany(req, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execDeleteOne: (db, req, callback) => {
    db.collection('cliente').deleteOne(req, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execDeleteMany: (db, req, callback) => {
    db.collection('cliente').deleteMany(req, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execFindOne: (db, req, callback) => {
    db.collection('cliente').findOne(req, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execFind: (db, callback) => {
    const items = db.collection('cliente').find().toArray();
    callback(null, items);
  }
}
