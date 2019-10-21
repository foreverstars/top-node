// POST
const express = require('express')
const router = express.Router()

const List = require('../models/blogList')
const responseClient = require('../utils/utils').responseClient

router.post('/', function (req, res, next) {
  let { type } = req.body
  List.count({type}).then(count => {
<<<<<<< HEAD
    List.find({type}, '_id type time title brief', {limit: 10}).then(result => {
=======
    List.find({type}, '_id type title brief created', {limit: 10}).then(result => {
>>>>>>> ee040a328787c039626250112265db769fc92d96
      responseClient(res, 200, 0, '', result)
    }).catch(err => {
      responseClient(res)
    })
  })
})

module.exports = router