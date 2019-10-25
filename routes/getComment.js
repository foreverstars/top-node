// POST
const express = require('express')
const router = express.Router()

const List = require('../models/comment')
const User = require('../models/userList')
const responseClient = require('../utils/utils').responseClient

router.post('/', function (req, res, next) {
  let { articleId } = req.body
  List.find({articleId}, '_id articleId userId username comment created nickname', {limit: 10}).then(result => {
    responseData = result
    for (var i =0; i<responseData.length;i++) {
      User.findOne({
        _id: responseData[i]._id
      }).then(userInfo => {
        if (userInfo) {
          responseData[i].nickname = userInfo.nickname;
          responseData[i].photo = userInfo.photo;
        }
      })
    }
  }).catch(err => {
    responseClient(res)
  })
})

module.exports = router