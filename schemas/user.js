const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  username: String, // 姓名
  password: String, // 密码
  isAdmin: Number, // 是否是管理员
}, {
  timestamps: {
    createdAt: 'created', // 创建时间
    updatedAt: 'updated' // 更新时间
  }
})
