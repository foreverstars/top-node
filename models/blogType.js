const mongoose = require('mongoose')
const blogTypeSchema = require('../schemas/blogType')

module.exports = mongoose.model("blogType", blogTypeSchema)