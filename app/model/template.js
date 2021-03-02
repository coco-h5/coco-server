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
