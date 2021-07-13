'use strict';

module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;

  const Banner = app.model.define(
    'banner',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      src: STRING(1000),
      link: STRING(1000),
    },
    {
      paranoid: true
    }
  );

  return Banner;
};
