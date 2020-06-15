'use strict';
module.exports = (sequelize, DataTypes) => {
  const Supplier = DataTypes.define('Supplier', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: sequelize.UUID,
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
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
    }
  }, {});
  Supplier.associate = function(models) {
    // associations can be defined here
  };
  return Supplier;
};