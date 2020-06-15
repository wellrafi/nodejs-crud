'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produsen = sequelize.define('Produsen', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    kode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    noTelp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hapus: {
      type: DataTypes.BOOLEAN
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Produsen.associate = function(models) {
    // associations can be defined here
  };
  return Produsen;
};