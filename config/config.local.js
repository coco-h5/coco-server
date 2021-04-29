module.exports = {
  sequelize: {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'coco',
    username: 'root',
    password: 'root1234',
    logging: false
  },
  cors: {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true
  },
  security: {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: [
      'http://localhost:8080',
      'http://aaa.coco-h5.cn:8080'
    ]
  }
};
