// POST 用户登录
const express = require('express')
const router = express.Router()
//引入Multiparty解析表单
var multiparty = require('multiparty');

const User = require('../models/userList')
const { MD5_SUFFIX, responseClient, md5 } = require('../utils/utils')

const multer  = require('multer');
var upload = multer({ dest: '/deerschen/imgStore'})

router.post('/', upload.single('photo'), function(req, res, next) {
  var file = req.file;
  User.update({
    _id: id,
  }, { photo: file})
    .then(userInfo => {
      if (userInfo) {
        //登录成功
        let data = {}
        data.photo = userInfo.photo
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
