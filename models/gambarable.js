'use strict';
module.exports = (sequelize, DataTypes) => {
  const GambarAble = sequelize.define('GambarAble', {
    gambarUrl: DataTypes.STRING
  }, {});
  GambarAble.associate = function(models) {
    // associations can be defined here
  };
  return GambarAble;
};