'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produsen = sequelize.define('Produsen', {
    name: DataTypes.STRING
  }, {});
  Produsen.associate = function(models) {
    // associations can be defined here
  };
  return Produsen;
};