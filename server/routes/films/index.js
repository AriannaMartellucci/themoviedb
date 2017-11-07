var express = require('express');
var filmController = require('./filmController.js');

var films = express.Router();

films.get('/', filmController.getAll);



module.exports = films;