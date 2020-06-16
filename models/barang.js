'use strict';
module.exports = (sequelize, DataTypes) => {
  const barang = sequelize.define('Barang', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: sequelize.UUID,
    },
    kode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kodeScan: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hargaEceran:{
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    hargaGrosir: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    jumlah: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    satuan: {
      type: DataTypes.STRING,
      defaultValue: "dus"
    },
    kategoriBarangId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'KategoriBarangs',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    gudangId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Gudangs',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    pelekoId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Pelekos',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    hapus: {
      type: DataTypes.BOOLEAN,
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
    },
    
  }, {});
  barang.associate = function(models) {
    // associations can be defined here
  };
  return barang;
};