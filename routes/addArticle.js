// POST
const express = require('express')
const router = express.Router()

const BlogList = require('../models/blogList')
const { responseClient } = require('../utils/utils')

router.post('/', function (req, res, next) {
	let { author, authorId, title, content, type, brief, isPrivacy } = req.body
  if (!author) {
    responseClient(res, 400, 2, '用户名不可为空')
    return
  }
  if (!authorId) {
    responseClient(res, 400, 2, '用户Id不可为空')
    return
  }
  if (!title) {
    responseClient(res, 400, 2, '文章标题不可为空')
    return
  }
  if (!content) {
    responseClient(res, 400, 2, '文章内容不可为空')
    return
  }
  if (!type) {
    responseClient(res, 400, 2, '文章类别不可为空')
    return
  }
  if (!brief) {
    responseClient(res, 400, 2, '文章简述不可为空')
    return
  }
  const article = new BlogList({
    author, authorId, title, content, type, brief, isPrivacy
  })
  article.save().then(data => {
    responseClient(res, 200, 0, '保存成功', data)
  }).catch(err => {
    responseClient(err)
  })
})

module.exports = router