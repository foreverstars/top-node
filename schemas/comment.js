const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  articleId: String, // 文章Id
  userId: String, // 用户id
  username: String, // 用户名
<<<<<<< HEAD
  comment: String // 评论内容
=======
  comment: String, // 评论内容
  nickname: String, // 用户昵称
>>>>>>> ee040a328787c039626250112265db769fc92d96
}, {
  timestamps: {
    createdAt: 'created', // 创建时间
    updatedAt: 'updated' // 更新时间
  }
})
