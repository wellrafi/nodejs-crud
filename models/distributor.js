'use strict';
module.exports = (sequelize, DataTypes) => {
  const Distributor = sequelize.define('Distributor', {
    name: DataTypes.STRING
  }, {});
  Distributor.associate = function(models) {
    // associations can be defined here
  };
  return Distributor;
};