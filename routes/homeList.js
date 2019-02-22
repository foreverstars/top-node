// POST
const express = require('express')
const router = express.Router()

const List = require('../models/blogList')
const responseClient = require('../utils/utils').responseClient

router.post('/', function (req, res, next) {
  let responseData = []
  List.find(null, '_id type time title brief', {limit:10})
    .then((result) => {
      responseData = result
      responseClient(res, 200, 0, '', responseData)
    }).catch(err => {
      responseClient(res)
    })
})

module.exports = router