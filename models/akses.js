'use strict';
module.exports = (sequelize, DataTypes) => {
  const Akses = sequelize.define('Akses', {
    name: DataTypes.STRING
  }, {});
  Akses.associate = function(models) {
    // associations can be defined here
  };
  return Akses;
};