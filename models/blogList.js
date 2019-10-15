const mongoose = require('mongoose')
const blogListSchema = require('../schemas/blogList')

module.exports = mongoose.model("blogList", blogListSchema)