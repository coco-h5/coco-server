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
