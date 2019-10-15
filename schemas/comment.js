const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  articleId: String, // 文章Id
  userId: String, // 用户id
  username: String, // 用户名
  comment: String // 评论内容
}, {
  timestamps: {
    createdAt: 'created', // 创建时间
    updatedAt: 'updated' // 更新时间
  }
})
