'use strict';

const MongoClient = require('mongodb').MongoClient;

module.exports = {
  connection: (callback) => {
    const url = 'mongodb://127.0.0.1:27017/clientes';
    MongoClient.connect(url, (err, db) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, db);
      };
    });
  }
};
