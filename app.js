var express = require('express');
var mongoose = require('mongoose');
var Lead = require('./models/lead');
var indexRouter = require('./routes/index');
var versionRouter = require('./routes/api/version');
var comingSoonLeadRouter = require('./routes/api/coming-soon/lead');

var app = express();

// Database connection.
const dbHost = process.env.DATABASE_HOST || 'localhost'
const dbPort = process.env.DATABASE_PORT || 27017
const databaseUrl = `mongodb://${dbHost}:${dbPort}/stock-adviser`
mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Database events.
const db = mongoose.connection;
db.on('error', (error) => { // On error.
  console.log(error);
});
db.on('open', async () => { // On init.
  console.log('Server connected to database.');

  const lead = await Lead.findOne({message: "Hang tight while we build this awesome feature."});
  if (!lead) {
    console.log('Seeding database.');

    const messages = [
      "Hang tight while we build this awesome feature.",
      "Hold your horses, this thing ain't built yet.",
      "Look! Look! More awesome features are on their way."
    ];
    messages.forEach((message) => {
      const lead = new Lead({ message });
      lead.save((error) => {
        if (error) {
          console.log('Error seeding database!', error);
        }
      });
    });
  }
});

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
