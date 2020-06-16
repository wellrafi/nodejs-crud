'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kategori = sequelize.define('Kategori', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    nama: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Kategori.associate = function(models) {

  };
  return Kategori;
};