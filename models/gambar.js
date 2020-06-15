'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gambar = sequelize.define('Gambar', {
    gambarUrl: DataTypes.STRING
  }, {});
  Gambar.associate = function(models) {
    // associations can be defined here
  };
  return Gambar;
};