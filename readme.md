## coco 后台

### mysql 配置

```js
module.exports = {
  sequelize: {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'coco',
    username: 'root',
    password: 'root1234',
    logging: false
  }
};
```

### 数据表结构：

#### 1. project

```js
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Page = app.model.define('project', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    templateId: INTEGER,
    name: STRING(100),
    pageConfig: TEXT,
    gitConfig: TEXT,
    releaseInfo: TEXT,
    version: STRING(100),
    desc: STRING(1000),
  }, {
    paranoid: true
  });

  return Page;
};
```

#### 2. template
```js
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BIGINT } = app.Sequelize;

  const Template = app.model.define('template', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    templateName: STRING(100),
    author: STRING(100),
    name: STRING(100),
    snapshot: STRING(200),
    gitUrl: STRING(200),
    type: INTEGER,
    version: STRING(100),
  }, {
    paranoid: true
  });

  return Template;
};
```

### 启动服务
先创建 `mysql` 数据库 `coco`。在启动服务，会自动创建表
```shell
$ npm run dev
```

