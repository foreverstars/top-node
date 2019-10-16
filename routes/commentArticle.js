// 评论文章
// POST
const express = require('express')
const router = express.Router()

const CommentList = require('../models/comment')
const { responseClient } = require('../utils/utils')

router.post('/', function (req, res, next) {
	let { articleId, userId, username, comment, nickname } = req.body
  if (!articleId) {
    responseClient(res, 400, 2, '用户名不可为空')
  }
  if (!userId) {
    responseClient(res, 400, 2, '用户Id不可为空')
  }
  if (!username) {
    responseClient(res, 400, 2, '文章标题不可为空')
  }
  if (!comment) {
    responseClient(res, 400, 2, '文章内容不可为空')
  }
  const article = new CommentList({
    articleId, userId, username, comment, nickname
  })
  article.save().then(data => {
    responseClient(res, 200, 0, '评论成功', data)
  }).catch(err => {
    responseClient(err)
  })
})

module.exports = router