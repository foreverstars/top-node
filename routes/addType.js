// POST
const express = require('express')
const router = express.Router()

const List = require('../models/blogType')
const { responseClient } = require('../utils/utils')

router.post('/', function (req, res, next) {
	let { name, type } = req.body
  const article = new List({
    name, type
  })
  article.save().then(data => {
    responseClient(res, 200, 0, '保存成功', data)
  }).catch(err => {
    responseClient(err)
  })
})

module.exports = router