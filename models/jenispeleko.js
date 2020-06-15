'use strict';
module.exports = (sequelize, DataTypes) => {
  const JenisPeleko = sequelize.define('JenisPeleko', {
    name: DataTypes.STRING
  }, {});
  JenisPeleko.associate = function(models) {
    // associations can be defined here
  };
  return JenisPeleko;
};