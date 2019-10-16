// POST
const express = require('express')
const router = express.Router()

const BlogList = require('../models/blogList')
const { responseClient } = require('../utils/utils')

router.post('/', function (req, res, next) {
	let { id } = req.body
  BlogList.remove({_id: id}).then(data => {
    responseClient(res, 200, 0, '删除成功', data)
  }).catch(err => {
    responseClient(err)
  })
})

module.exports = router