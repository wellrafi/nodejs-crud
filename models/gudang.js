'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gudang = sequelize.define('Gudang', {
    name: DataTypes.STRING
  }, {});
  Gudang.associate = function(models) {
    // associations can be defined here
  };
  return Gudang;
};