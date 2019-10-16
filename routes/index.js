module.exports = function (app) {
  app.use('/register', require('./register')),
  app.use('/login', require('./login')),
  app.use('/getUserinfo', require('./getUserinfo')),
  app.use('/updatePersonal', require('./updatePersonal')),
  app.use('/addArticle', require('./addArticle')),
  app.use('/deleteArticle', require('./deleteArticle')),
  app.use('/getContent', require('./getContent')),
  app.use('/homeList', require('./homeList')),
  app.use('/typeList', require('./typeList')),
  app.use('/addType', require('./addType')),
  app.use('/userList', require('./userList')),
  app.use('/saveImg', require('./saveImg')),
  app.use('/getComment', require('./getComment')),
  app.use('/commentArticle', require('./commentArticle')),
  app.use('/deleteComment', require('./deleteComment')),
  app.use('/getBlogTypes', require('./getBlogTypes'))
}