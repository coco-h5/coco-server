'use strict';

module.exports = (app) => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;

  const Plugin = app.model.define(
    'plugin',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      pluginName: STRING(100),
      name: STRING(100),
      status: INTEGER,
      author: STRING(100),
      logo: STRING(100),
      gitUrl: STRING(1000),
      title: STRING(100),
      description: STRING(1000),
      version: STRING(100),
      downloadUrl: STRING(2000),
      detail: TEXT,
    },
    {
      paranoid: true
    }
  );

  return Plugin;
};
