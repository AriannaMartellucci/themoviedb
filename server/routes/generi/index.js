var express = require('express');
var generiController = require('./generiController.js');

var generi = express.Router();


generi.get('/', generiController.getAllgeneri);

generi.post('/', generiController.insertOne);

generi.delete('/:id', generiController.deleteOne);


module.exports = generi;