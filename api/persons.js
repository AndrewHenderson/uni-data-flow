var express = require('express');
var url = require('url');
var router = express.Router();
var Person = require('../schemas/persons.js');

// Note All Routes prefixed with 'persons'
router.get('/', function(req, res) {
  var params = url.parse(req.originalUrl, true).query;
  Person.find(params, function(err, users){
    if (err) res.send(err);
    else res.send(users);
  });
});

router.post('/', function(req, res) {
  var person = new Person(req.body);
  person.save(function (err, doc) {
    if (err) res.send(err);
    else res.send(doc);
  });
});

router.get('/:id', function(req, res) {
  Person.findOne({_id: req.params.id}, function(err, doc){
    if (err) res.send(err);
    else res.send(doc);
  });
});

router.put('/:id', function(req, res){
  Person.update({_id: req.params.id}, req.body, function(err, doc){
    if (err) res.send(err);
    else res.send();
  });
});

router.delete('/:id', function(req, res){
  Person.remove({_id: req.params.id}, function(err, doc){
    if (err) res.send(err);
    else res.send();
  });
});

module.exports = router;