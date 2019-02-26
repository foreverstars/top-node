// POST
const express = require('express')
const router = express.Router()

const UserList = require('../models/userList')
const responseClient = require('../utils/utils').responseClient

router.post('/', function (req, res, next) {
  UserList.find(null, 'username isAdmin', {limit:10})
    .then((result) => {
      responseClient(res, 200, 0, '', result)
    }).catch(err => {
      responseClient(res)
    })
})

module.exports = router