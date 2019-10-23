// POST 用户登录
const express = require('express')
const router = express.Router()

const User = require('../models/userList')
const { MD5_SUFFIX, responseClient, md5 } = require('../utils/utils')

router.post('/', function(req, res, next) {
	let { id, nickname, email } = req.body
	User.updateOne({
    _id: id,
	}, { nickname, email })
		.then(userInfo => {
			if (userInfo) {
				//登录成功
				let data = {}
				//登录成功后设置session
				// req.session.userInfo = data

				responseClient(res, 200, 0, '', data)
				return
			}
			responseClient(res, 200, 1, '')
		})
		.catch(err => {
			responseClient(res)
		})
})

module.exports = router
