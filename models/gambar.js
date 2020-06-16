'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gambar = sequelize.define('Gambar', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    gambarUrl: {
      type: DataTypes.STRING,
    },
    hapus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  }, {});
  Gambar.associate = function(models) {
    // associations can be defined here
  };
  return Gambar;
};