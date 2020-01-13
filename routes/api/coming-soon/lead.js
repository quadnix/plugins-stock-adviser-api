var express = require('express');
var router = express.Router();

var messages = [
  'Hang tight while we build this awesome feature.',
  'Hold your horses, this thing ain\'t built yet.',
  'Look! Look! More awesome features are on their way.'
]

router.get('/', function(req, res, next) {
  res.send(messages[Math.floor(Math.random() * messages.length)])
});

module.exports = router;
