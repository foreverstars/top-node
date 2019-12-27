// POST
const express = require('express')
const router = express.Router()

const List = require('../models/comment')
const User = require('../models/userList')
const responseClient = require('../utils/utils').responseClient

router.post('/', function (req, res, next) {
  let { articleId } = req.body
  List.find({articleId}, '_id articleId userId username comment created nickname', {limit: 10}).then(result => {
    getPersonal(result).then(responseData => {
      responseClient(res, 200, 0, '', responseData)
    })
  }).catch(err => {
    responseClient(res)
  })
})

async function getPersonal(data) {
  let newData = [];
  for (let i =0; i<data.length;i++) {
    let res = await read(data[i]);
    let obj = {
      _id: data[i]._id,
      articleId: data[i].articleId,
      userId: data[i].userId,
      username: data[i].username,
      comment: data[i].comment,
      created: data[i].created,
      nickname: data[i].nickname,
    };
    if (res) {
      obj.nickname = res.nickname;
      obj.photo = res.photo;
    }
    newData.push(obj);
  } 
  return newData
}

function read (row) {
  return User.findOne({
    _id: row.userId
  })
}

module.exports = router