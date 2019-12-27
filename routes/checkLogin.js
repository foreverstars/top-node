const { MD5_SUFFIX, responseClient, md5 } = require('../utils/utils')

module.exports = function(req, res, next) {
  next();
  // if(req.session.userId){
  //   next();
  // }else{
  //   responseClient(res, 200, 5, '登录失效')
  // }
}