'use strict';
module.exports = (sequelize, DataTypes) => {
  const PelakuEkonomi = sequelize.define('Peleko', {
    name: DataTypes.STRING
  }, {});
  PelakuEkonomi.associate = function(models) {
    // associations can be defined here
  };
  return PelakuEkonomi;
};