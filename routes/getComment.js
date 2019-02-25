// POST
const express = require('express')
const router = express.Router()

const List = require('../models/comment')
const responseClient = require('../utils/utils').responseClient

router.post('/', function (req, res, next) {
  let { articleId } = req.body
  let responseData = []
  List.count({articleId}).then(count => {
    List.find({articleId}, '_id articleId userId username comment', {limit: 10}).then(result => {
      responseData = result
      responseClient(res, 200, 0, '', result)
    }).catch(err => {
      responseClient(res)
    })
  })
})

module.exports = router