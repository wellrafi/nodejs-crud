'use strict';
module.exports = (sequelize, DataTypes) => {
  const JenisPeleko = sequelize.define('JenisPeleko', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: sequelize.UUID,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
    },
  }, {});
  JenisPeleko.associate = function(models) {
    // associations can be defined here
  };
  return JenisPeleko;
};