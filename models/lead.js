const mongoose = require('mongoose')

const leadSchema = new mongoose.Schema({
  message: {
      type: String,
      required: true
  }
})

module.exports = mongoose.model('Lead', leadSchema, 'lead')
