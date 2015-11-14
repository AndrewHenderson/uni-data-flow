var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(add) {

  var schema = new Schema({
    type: String,
    dob: Number,
    lifespan: Number,
    mass: Number,
    height: Number,
    speed: Number,
    prey: Array,
    predators: Array
  });

  if(add) {
    schema.add(add);
  }

  return schema;
};