const express = require('express')
const indexRouter = require('./routes/index')
const versionRouter = require('./routes/api/version')
const comingSoonLeadRouter = require('./routes/api/coming-soon/lead')

const app = express()

// CORS policy.
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Route registration.
app.use('/', indexRouter)
app.use('/api/version', versionRouter)
app.use('/api/coming-soon/lead', comingSoonLeadRouter)

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log('Server running on port: ' + port)
})

module.exports = app
