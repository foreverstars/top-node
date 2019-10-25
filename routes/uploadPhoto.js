// POST 用户登录
const express = require('express')
const router = express.Router()
//引入Multiparty解析表单
var multiparty = require('multiparty');

const User = require('../models/userList')
const { MD5_SUFFIX, responseClient, md5 } = require('../utils/utils')
const { sourceSite } = require('../utils/config')

const multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/deerschen/html/imgStore')
    // cb(null, 'C:\\Users\\niaoyun\\Desktop\\imgStore')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  }
})
 
var upload = multer({ storage: storage })

router.post('/', upload.single('photo'), function(req, res, next) {
  var file = req.file;
  var { id } = req.body;
  var path = sourceSite + file.filename
  User.updateOne({
    _id: id,
  }, { photo: path})
    .then(userInfo => {
      if (userInfo) {
        //登录成功
        User.findOne({
          _id: id
        })
          .then(userInfo => {
            if (userInfo) {
              //登录成功
              let data = {}
              data.photo = userInfo.photo
              responseClient(res, 200, 0, '', data)
            } else {
              responseClient(res, 200, 1, '')
            }
          })
      } else {
        responseClient(res, 200, 1, '')
      }
    })
    .catch(err => {
      responseClient(res)
    })
})

module.exports = router
