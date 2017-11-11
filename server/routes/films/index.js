var express = require('express');
var filmController = require('./filmController.js');

var films = express.Router();

films.get('/', filmController.getAll);
films.get('/congeneri', filmController.getAllconGeneri);
films.get('/:id([0-9a-f]{24})', filmController.getOne);
films.get('/query', filmController.getByTitle);

//inserimento
films.post('/', filmController.insertOne);

//delete
films.delete('/:id([0-9a-f]{24})', filmController.deleteOne);

//aggiornmenti in PUT
films.put('/:id([0-9a-f]{24})', filmController.updateOne);
films.put('/vote/:id([0-9a-f]{24})', filmController.changeVote);
films.put('/voto/:id([0-9a-f]{24})', filmController.updateVote);



module.exports = films;