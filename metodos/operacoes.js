module.exports = {

  execInsertOne: (db, banco, req, callback) => {
    db.collection(banco).insert(req, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execInsertMany: (db, banco, req, callback) => {
    db.collection(banco).insertMany(req, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execUpdateOne: (db, banco, objeto, callback) => {
    const identificador = objeto[Object.keys(objeto)[0]];
    db.collection(banco).updateOne({id_produto: identificador}, {$set:objeto}, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execUpdateMany: (db, banco, req, callback) => {
    db.collection(banco).updateMany(req, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execDeleteOne: (db, banco, req, callback) => {
    db.collection(banco).deleteOne(req, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execDeleteMany: (db, banco, req, callback) => {
    db.collection(banco).deleteMany(req, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execFindOne: (db, banco, req, callback) => {
    db.collection(banco).findOne(req, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execFind: (db, banco, callback) => {
    db.collection(banco).find().toArray(function(err, items) {
       if (err) {
         callback(err, null);
       } else {
         callback(null, items);
       }
    });
  }
}
