var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = Schema({
  name: String,
  age: Number,
  city: String,
  state: String
});

var Person = mongoose.model('Person', personSchema);

module.exports = Person;
