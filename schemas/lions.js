var mongoose = require('mongoose');
var AnimalSchema = require('../schemas/animals');

var lionSchema = AnimalSchema();

console.log(lionSchema);

var Lion = mongoose.model('Lion', lionSchema);

module.exports = Lion;
