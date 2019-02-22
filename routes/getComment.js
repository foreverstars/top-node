// POST
const express = require('express')
const router = express.Router()

const CommentList = require('../models/CommentList')
const responseClient = require('../utils/utils').responseClient

router.post('/', function (req, res, next) {
  let { articleId } = req.body
  List.count({articleId}).then(count => {
    List.find({articleId}, '_id articleId userId username comment', {limit: 10}).then(result => {
      responseClient(res, 200, 0, '', result)
    }).catch(err => {
      responseClient(res)
    })
  })
})

module.exports = router