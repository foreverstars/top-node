module.exports = {
  dbHost: 'localhost',
  dbPort: '27017',
  dbName: 'myblog',
  sourceSite: 'http://94.191.73.84/imgStore/',
  session: {
    key: 'blog_id',
    secret: 'cookie',
    maxAge: 100000
  }
}