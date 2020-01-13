var express = require('express');
var indexRouter = require('./routes/index')
var versionRouter = require('./routes/api/version');
var comingSoonLeadRouter = require('./routes/api/coming-soon/lead');

var app = express();

// CORS policy.
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Route registration.
app.use('/', indexRouter);
app.use('/api/version', versionRouter);
app.use('/api/coming-soon/lead', comingSoonLeadRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Server running on port: ' + port);
})

module.exports = app;
