'use strict';
module.exports = (sequelize, DataTypes) => {
  const GambarAble = sequelize.define('GambarAble', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    gambarId: {
      type: DataTypes.UUID,
    },
    gambarAbleId: {
      type: DataTypes.UUID,
    },
    gambarAbleType: {
      type: DataTypes.STRING,
    },
  }, {});
  GambarAble.associate = function(models) {
    // associations can be defined here
  };
  return GambarAble;
};