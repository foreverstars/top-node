// POST
const express = require('express')
const router = express.Router()

const List = require('../models/comment')
const responseClient = require('../utils/utils').responseClient

router.post('/', function (req, res, next) {
  let { articleId } = req.body
<<<<<<< HEAD
  List.find({articleId}, '_id articleId userId username comment created', {limit: 10}).then(result => {
=======
  List.find({articleId}, '_id articleId userId username comment created nickname', {limit: 10}).then(result => {
>>>>>>> ee040a328787c039626250112265db769fc92d96
    responseData = result
    responseClient(res, 200, 0, '', responseData)
  }).catch(err => {
    responseClient(res)
  })
})

module.exports = router