'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAkses = sequelize.define('UserAkses', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: sequelize.UUID,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    aksesId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Akses',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
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
  UserAkses.associate = function(models) {
    // associations can be defined here
  };
  return UserAkses;
};