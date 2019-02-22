const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  type: String, // 类型编码
  name: String, // 类型名称
}, {
  timestamps: {
    createdAt: 'created', // 创建时间
    updatedAt: 'updated' // 更新时间
  }
})