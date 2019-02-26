// POST
const express = require('express')
const router = express.Router()

const List = require('../models/blogList')
const responseClient = require('../utils/utils').responseClient

router.post('/', function (req, res, next) {
  let { id } = req.body
  List.findOne({_id: id}, '_id title author time content type created updated')
    .then((result) => {
      responseClient(res, 200, 0, '', result)
    }).catch(err => {
      responseClient(res)
    })
})

module.exports = router