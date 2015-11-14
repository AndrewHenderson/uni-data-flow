var express = require('express');
var router = express.Router();

/* Renders the Application's single page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
