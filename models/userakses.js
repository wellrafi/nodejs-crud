'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAkses = sequelize.define('UserAkses', {
    name: DataTypes.STRING
  }, {});
  UserAkses.associate = function(models) {
    // associations can be defined here
  };
  return UserAkses;
};