// POST
const express = require('express')
const router = express.Router()

const List = require('../models/blogList')
const responseClient = require('../utils/utils').responseClient

router.post('/', function (req, res, next) {
  let { id } = req.body
  let responseData = []
  List.findOne({_id: id}, '_id title author time content type')
    .then((result) => {
      responseData = result
      responseClient(res, 200, 0, '', responseData)
    }).catch(err => {
      responseClient(res)
    })
})

module.exports = router