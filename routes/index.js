module.exports = function (app) {
  app.use('/register', require('./register'))
  app.use('/login', require('./login'))
  app.use('/addArticle', require('./addArticle'))
  app.use('/getContent', require('./getContent'))
  app.use('/homeList', require('./homeList'))
  app.use('/typeList', require('./typeList'))
  app.use('/userList', require('./userList')),
  app.use('/saveImg', require('./saveImg')),
  app.use('/getComment', require('./getComment')),
  app.use('/commentArticle', require('./commentArticle')),
  app.use('/deleteComment', require('./deleteComment'))
}