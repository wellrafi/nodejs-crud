'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaksi = sequelize.define('Transaksi', {
    name: DataTypes.STRING
  }, {});
  Transaksi.associate = function(models) {
    // associations can be defined here
  };
  return Transaksi;
};