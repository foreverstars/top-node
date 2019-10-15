const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  title: String, // 标题
  content: String, // 内容
  author: String, // 作者
  type: String, // 所属类别
  brief: String, // 内容
  isPrivacy: Boolean, // 是否私密
}, {
  timestamps: {
    createdAt: 'created', // 创建时间
    updatedAt: 'updated' // 更新时间
  }
})