const express = require('express')
const router = express.Router()

const User = require('../models/userList')
const { MD5_SUFFIX, responseClient, md5 } = require('../utils/utils')

// POST 用户注册
router.post('/', function(req, res, next) {
	// res.send('注册')
	let { username, password } = req.body

	if (!username) {
		responseClient(res, 400, 2, '用户名不可为空')
		return
	}
	if (!password) {
		responseClient(res, 400, 2, '密码不可为空')
		return
	}
	//验证用户是否已经在数据库中
	User.findOne({ username: username })
		.then(data => {
			if (data) {
				responseClient(res, 200, 1, '用户名已存在')
				return
			}
			//保存到数据库
			let user = new User({
				username: username,
				password: md5(password + MD5_SUFFIX),
				isAdmin: 0
			})
			user.save().then(function() {
				User.findOne({ username: username }).then(userInfo => {
					let data = {}
					data.username = userInfo.username
					data.userId = userInfo._id
					responseClient(res, 200, 0, '注册成功', data)
					return
				})
			})
		})
		.catch(err => {
			responseClient(res)
			return
		})
})

module.exports = router
