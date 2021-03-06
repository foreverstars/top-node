// POST 用户登录
const express = require('express')
const router = express.Router()

const User = require('../models/userList')
const { MD5_SUFFIX, responseClient, md5 } = require('../utils/utils')

router.post('/', function(req, res, next) {
	let { username, password } = req.body
	if (!username) {
		responseClient(res, 400, 2, '用户名不可为空')
		return
	}
	if (!password) {
		responseClient(res, 400, 2, '密码不可为空')
		return
	}
	User.findOne({
		username,
		password: md5(password + MD5_SUFFIX)
	})
		.then(userInfo => {
			if (userInfo) {
				//登录成功
				let data = {}
				data.username = userInfo.username
				data.userId = userInfo._id
				data.nickname = userInfo.nickname
				data.email = userInfo.email
				//登录成功后设置session
				req.session.regenerate(function(){
					req.session.userId = data.userId;
					req.session.save();  //保存一下修改后的Session

					responseClient(res, 200, 0, '登录成功', data)
				});
			} else{
				responseClient(res, 200, 1, '用户名密码错误')
			}
		})
		.catch(err => {
			responseClient(res)
		})
})

module.exports = router
