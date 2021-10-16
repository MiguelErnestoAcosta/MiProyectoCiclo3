const express = require('express');
var ObjectID = require('mongodb').ObjectID;

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

// This section will help you get a list of all the records.
recordRoutes.route('/ventas').get(async function (req, res) {
  // Get records
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('ventas')
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching ventas!');
      } else {
        res.json(result);
      }
    });
});

// This section will help you create a new record.
recordRoutes.route('/ventas/create').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const venta = {
    id_cliente: req.body.id_cliente,
    name_cliente: req.body.name_cliente,
    vendedor: req.body.vendedor,
    identificador: req.body.identificador,
    name_producto: req.body.name_producto,
    cantidad: req.body.cantidad,
    valor_venta: req.body.valor_venta,
    fecha: req.body.fecha,
    created: new Date(),
  };

  dbConnect.collection('ventas').insertOne(venta, function (err, result) {
    if (err) {
      res.status(400).send('Error inserting venta!');
    } else {
      console.log(`Added a new venta with id ${result.insertedId}`);
      res.json({ id: result.insertedId });
    }
  });
});

// This section will help you update a record by id.
recordRoutes.route('/ventas/update').patch(function (req, res) {
  const dbConnect = dbo.getDb();
  const venta = { _id: new ObjectID(req.body.id) };
  delete req.body.id;
  const updates = { $set: req.body };
  dbConnect
    .collection('ventas')
    .findOneAndUpdate(
      venta,
      updates,
      { new: true, upsert: true, returnOriginal: false },
      function (err, _result) {
        if (err) {
          res.status(400).send(`Error updating likes on listing with id ${vehicle.id}!`);
        } else {
          console.log('1 venta updated');
          res.json({ result: _result });
        }
      }
    );
});

// This section will help you delete a record
recordRoutes.route('/venta/delete').delete((req, res) => {
  // Delete documents
  const dbConnect = dbo.getDb();
  console.log(req.body.id);
  const ventaQuery = { _id: new ObjectID(req.body.id) };

  dbConnect.collection('ventas').deleteOne(ventaQuery, function (err, _result) {
    if (err) {
      res.status(400).send(`Error deleting listing with id ${ventaQuery._id}!`);
    } else {
      console.log('1 document deleted');
      res.json({ status: 'deletion successful' });
    }
  });
});

module.exports = recordRoutes;
