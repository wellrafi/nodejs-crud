'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kategori = sequelize.define('Kategori', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAT: DataTypes.DATE
  }, {});
  Kategori.associate = function(models) {

  };
  return Kategori;
};