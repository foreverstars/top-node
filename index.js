const path = require('path')
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// const config = require('config-lite')(__dirname)

const routes = require('./routes')
const pkg = require('./package')

const app = express()

//解析post请求
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// 设置模板目录
app.set('views', path.join(__dirname, 'views'))
// 设置模板引擎为 ejs
app.set('view engine', 'ejs')

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')))

// // session 中间件
// app.use(session({
//   name: config.session.key, // 设置 cookie 中保存 session id 的字段名称
//   secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
//   resave: true, // 强制更新 session
//   saveUninitialized: false, // 设置为 false，强制创建一个 session，即使用户未登录
//   cookie: {
//     maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
//   },
//   store: new MongoStore({// 将 session 存储到 mongodb
//     url: config.mongodb// mongodb 地址
//   })
// }))

// flash 中间件，用来显示通知
app.use(flash())

// 路由
routes(app)


mongoose.connect('mongodb://localhost:27017/myblog')
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open')
});
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err)
})

// 监听端口，启动程序
app.listen(3000, function () {
  console.log('listening on port 3000')
})

// 注意：中间件的加载顺序很重要。如上面设置静态文件目录的中间件应该放在routes(app)之前加载，这样静态文件的请求就不会落在业务逻辑的路由里；
// flash中间件应该放在session中间件之后加载，因为flash是基于session实现的。