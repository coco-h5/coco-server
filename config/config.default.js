const path = require('path');

module.exports = appInfo => ({
  keys: 'coco', // 用于 cookie 的加解密，上线后就不要改了。
  logger: {
    dir: path.join(__dirname, '../logs/coco-server'),
  },
  static: {
    dir: path.join(appInfo.baseDir, 'static/dist'),
    prefix: '/static/'
  }
});
