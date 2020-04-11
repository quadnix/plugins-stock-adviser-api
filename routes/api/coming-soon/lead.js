var express = require('express');
var Lead = require('../../../models/lead');

var router = express.Router();

router.get('/', async (req, res, next) => {
  const leads = await Lead.find();
  const messages = leads.map((lead) => {
    return lead.message;
  });

  res.send(messages[Math.floor(Math.random() * messages.length)]);
});

module.exports = router;
