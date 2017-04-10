'use strict';

const MongoClient = require('mongodb').MongoClient;

module.exports = {
  connection: (url, callback) => {
    const caminho = 'mongodb://127.0.0.1:27017/' + url;
    MongoClient.connect(caminho, (err, db) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, db);
      };
    });
  }
};
