// 删除评论（过激的、不和谐的）

const express = require('express')
const router = express.Router()

const CommentList = require('../models/comment')
const responseClient = require('../utils/utils').responseClient

router.post('/', function (req, res, next) {
  let _id = req.query._id;
  CommentList.remove({_id})
    .then(result=>{
      if(result.result.n === 1){
        responseClient(res, 200, 0, '删除成功!')
      }else{
        responseClient(res, 200, 1, '评论不存在')
      }
    }).cancel(err=>{
      responseClient(res);
  })
})

module.exports = router