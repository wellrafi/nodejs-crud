'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jabatan = sequelize.define('Jabatan', {
    name: DataTypes.STRING
  }, {});
  Jabatan.associate = function(models) {
    // associations can be defined here
  };
  return Jabatan;
};