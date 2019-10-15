// POST
const express = require('express')
const router = express.Router()

const blogType = require('../models/blogType')
const responseClient = require('../utils/utils').responseClient

router.post('/', function (req, res, next) {
  blogType.find(null, 'name type')
    .then((result) => {
      responseClient(res, 200, 0, '', result)
    }).catch(err => {
      responseClient(res)
    })
})

module.exports = router