'use strict';

module.exports = (app) => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;

  const Release = app.model.define(
    'release',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      version: STRING(1000),
      downloadUrl: STRING(1000),
      msg: TEXT,
    },
    {
      paranoid: true
    }
  );

  return Release;
};
