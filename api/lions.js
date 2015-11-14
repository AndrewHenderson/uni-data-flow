var express = require('express');
var url = require('url');
var router = express.Router();
var Lion = require('../schemas/lions.js');

// Note All Routes prefixed with 'lions'
router.get('/', function(req, res) {
  var params = url.parse(req.originalUrl, true).query;
  Lion.find(params, function(err, users){
    if (err) res.send(err);
    else res.send(users);
  });
});

router.post('/', function(req, res) {
  var lion = new Lion(req.body);
  lion.save(function (err, doc) {
    if (err) res.send(err);
    else res.send(doc);
  });
});

router.get('/:id', function(req, res) {
  Lion.findOne({_id: req.params.id}, function(err, doc){
    if (err) res.send(err);
    else res.send(doc);
  });
});

router.put('/:id', function(req, res){
  Lion.update({_id: req.params.id}, req.body, function(err, doc){
    if (err) res.send(err);
    else res.send();
  });
});

router.delete('/:id', function(req, res){
  Lion.remove({_id: req.params.id}, function(err, doc){
    if (err) res.send(err);
    else res.send();
  });
});

module.exports = router;