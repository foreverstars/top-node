const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  username: String, // 姓名
  password: String, // 密码
  isAdmin: Number, // 是否是管理员
<<<<<<< HEAD
=======
  nickname: String, // 昵称
  email: String, // 邮箱地址
  photo: Buffer, // 个人头像
>>>>>>> ee040a328787c039626250112265db769fc92d96
}, {
  timestamps: {
    createdAt: 'created', // 创建时间
    updatedAt: 'updated' // 更新时间
  }
})
