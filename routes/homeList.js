// POST
const express = require('express')
const router = express.Router()

const List = require('../models/blogList')
const responseClient = require('../utils/utils').responseClient

router.post('/', function (req, res, next) {
  List.find(null, '_id type time title brief', {limit:10})
    .then((result) => {
      responseClient(res, 200, 0, '', result)
    }).catch(err => {
      responseClient(res)
    })
})

module.exports = router