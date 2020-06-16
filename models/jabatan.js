'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jabatan = sequelize.define('Jabatan', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    hapus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    }
  }, {});
  Jabatan.associate = function(models) {
    // associations can be defined here
  };
  return Jabatan;
};