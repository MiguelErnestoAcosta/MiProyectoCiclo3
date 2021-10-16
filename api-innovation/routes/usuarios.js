const express = require('express');
var ObjectID = require('mongodb').ObjectID;

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

// This section will help you get a list of all the records.
recordRoutes.route('/usuarios').get(async function (req, res) {
  // Get records
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('usuarios')
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching usuarios!');
      } else {
        res.json(result);
      }
    });
});

// This section will help you create a new record.
recordRoutes.route('/usuario/create').post(function (req, res) {
  const dbConnect = dbo.getDb();
  console.log('creando un usuario')
  const usuario = {
    name: req.body.name,
    estado: req.body.estado,
    id: req.body.id,
    role: req.body.role,
    created: new Date(),
  };

  dbConnect.collection('usuarios').insertOne(usuario, function (err, result) {
    if (err) {
      res.status(400).send('Error inserting usuario!');
    } else {
      console.log(`Added a new usuario with id ${result.insertedId}`);
      res.json({ id: result.insertedId });
    }
  });
});

// This section will help you update a record by id.
recordRoutes.route('/usuarios/update').patch(function (req, res) {
  const dbConnect = dbo.getDb();
  const usuario = { _id: new ObjectID(req.body.id) };
  delete req.body.id;
  const updates = { $set: req.body };
  console.log(updates)
  dbConnect
    .collection('usuarios')
    .findOneAndUpdate(
      usuario,
      updates,
      { new: true, upsert: true, returnOriginal: false },
      function (err, _result) {
        if (err) {
          res.status(400).send(`Error updating likes on listing with id ${usuario.id}!`);
        } else {
          console.log('1 usuario updated');
          res.json({ result: _result });
        }
      }
    );
});

// This section will help you delete a record
recordRoutes.route('/usuarios/delete').delete((req, res) => {
  // Delete documents
  const dbConnect = dbo.getDb();
  console.log(req.body.id);
  const usuarioQuery = { _id: new ObjectID(req.body.id) };

  dbConnect.collection('usuario').deleteOne(usuarioQuery, function (err, _result) {
    if (err) {
      res.status(400).send(`Error deleting listing with id ${usuarioQuery._id}!`);
    } else {
      console.log('1 document deleted');
      res.json({ status: 'deletion successful' });
    }
  });
});

module.exports = recordRoutes;
