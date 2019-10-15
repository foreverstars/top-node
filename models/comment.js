const mongoose = require('mongoose')
const commentSchema = require('../schemas/comment')

module.exports = mongoose.model("comment", commentSchema)