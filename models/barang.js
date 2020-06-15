'use strict';
module.exports = (sequelize, DataTypes) => {
  const barang = sequelize.define('Barang', {
    name: DataTypes.UUID,
    
  }, {});
  barang.associate = function(models) {
    // associations can be defined here
  };
  return barang;
};