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

  execUpdateOne: (db, banco, req, callback) => {
    db.collection(banco).updateOne({cpf:req.cpf}, {$set:req}, (err, data) => {
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
