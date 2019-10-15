// 工具类
const crypto = require('crypto')

module.exports = {
  // 封装response
  responseClient: function (res, httpCode = 500, code = 3, message='服务端异常', data={}) {
    let responseData = {};
    responseData.code = code;
    responseData.message = message;
    responseData.data = data;
    res.status(httpCode).json(responseData)
  },
  // md5加密
  MD5_SUFFIX: 'whatareyoudoinghowareyouiamfine就随便写点什么吧嗯嗯嗯呃嗯#$%^&*()',
  md5: function (pwd) {
    let md5 = crypto.createHash('md5')
    return md5.update(pwd).digest('hex')
  }
}